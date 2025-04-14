<?php
// Configuración CORS para desarrollo y producción
$allowedOrigins = [
    'https://www.kevcodesdev.cl', // Producción
    'http://localhost:5173'       // Desarrollo
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($origin, $allowedOrigins)) {
    header("Access-Control-Allow-Origin: $origin");
}

header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

// Manejar la solicitud OPTIONS (Preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Validar que sea una solicitud POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit;
}

// Obtener y validar los datos JSON
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(['error' => 'JSON inválido']);
    exit;
}

// Validar campos obligatorios
$requiredFields = ['name', 'email', 'message'];
foreach ($requiredFields as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['error' => "El campo $field es requerido"]);
        exit;
    }
}

// Sanitizar entradas
$name = filter_var($data['name'], FILTER_SANITIZE_STRING);
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$message = filter_var($data['message'] ?? '', FILTER_SANITIZE_STRING);
$phone = filter_var($data['phone'] ?? '', FILTER_SANITIZE_STRING);

// Validar email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Email inválido']);
    exit;
}

// Configurar y enviar el email
$to = 'contacto@kevcodesdev.cl';
$subject = "Nuevo mensaje de $name";
$headers = [
    "From: $name <$email>",
    "Reply-To: $email",
    "Content-Type: text/html; charset=UTF-8",
    "X-Mailer: PHP/" . phpversion()
];

$body = "
    <html>
    <body>
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        " . (!empty($phone) ? "<p><strong>Teléfono:</strong> $phone</p>" : "") . "
        <p><strong>Mensaje:</strong></p>
        <p>$message</p>
    </body>
    </html>
";

// Intentar enviar el email
try {
    $mailSent = mail($to, $subject, $body, implode("\r\n", $headers));
    
    if (!$mailSent) {
        throw new Exception('Error al enviar el correo');
    }
    
    echo json_encode([
        'success' => true,
        'message' => 'Mensaje enviado correctamente'
    ]);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'error' => 'Error al enviar el mensaje',
        'details' => $e->getMessage()
    ]);
    
    // Log del error (opcional)
    error_log('Error en contacto.php: ' . $e->getMessage());
}
?>