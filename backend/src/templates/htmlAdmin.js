export const htmlAdmin = ({ nombre, email, telefono, mensaje }) => `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Nuevo mensaje de contacto</title>
</head>

<body style="margin:0;padding:0;background:#111827;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#1f2937;border-radius:12px;overflow:hidden;">
          
          <!-- Header -->
          <tr>
            <td style="padding:24px 28px;border-bottom:1px solid #374151;">
              <h1 style="margin:0;font-size:20px;color:#ffffff;font-weight:600;">
                Nuevo mensaje desde el formulario
              </h1>
              <p style="margin:8px 0 0;font-size:14px;color:#9ca3af;">
                kevcodesdev.cl
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:28px;color:#e5e7eb;">
              
              <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;">
                <tr>
                  <td style="padding:6px 0;color:#9ca3af;width:120px;">Nombre</td>
                  <td style="padding:6px 0;color:#ffffff;">${nombre}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;color:#9ca3af;">Correo</td>
                  <td style="padding:6px 0;color:#60a5fa;">${email}</td>
                </tr>
                ${
                  telefono
                    ? `<tr>
                        <td style="padding:6px 0;color:#9ca3af;">Teléfono</td>
                        <td style="padding:6px 0;color:#ffffff;">${telefono}</td>
                      </tr>`
                    : ""
                }
              </table>

              <div style="margin-top:24px;padding:18px;background:#111827;border:1px solid #374151;border-radius:8px;">
                <p style="margin:0 0 8px;font-size:13px;color:#9ca3af;">
                  Mensaje
                </p>
                <p style="margin:0;font-size:14px;line-height:1.6;color:#e5e7eb;white-space:pre-line;">
                  ${mensaje}
                </p>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:16px 28px;background:#111827;border-top:1px solid #374151;">
              <p style="margin:0;font-size:12px;color:#6b7280;text-align:center;">
                Enviado desde el formulario de contacto · kevcodesdev.cl
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
