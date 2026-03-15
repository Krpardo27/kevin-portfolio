export const htmlAdmin = ({ nombre, email, telefono, mensaje }) => `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width,initial-scale=1.0" />
<title>Nuevo mensaje</title>
</head>

<body style="margin:0;background:#0f172a;font-family:Arial,Helvetica,sans-serif;padding:40px 0;">

<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center">

<table width="600" cellpadding="0" cellspacing="0"
style="
background:#111827;
border-radius:12px;
overflow:hidden;
box-shadow:0 10px 30px rgba(0,0,0,0.4);
">

<!-- HEADER -->

<tr>
<td style="padding:28px 32px;border-bottom:1px solid #1f2937">

<h1 style="
margin:0;
font-size:20px;
color:#ffffff;
font-weight:600;
letter-spacing:.3px;
">
Nuevo mensaje de contacto
</h1>

<p style="
margin:6px 0 0;
font-size:13px;
color:#9ca3af;
">
kevcodesdev.cl
</p>

</td>
</tr>

<!-- CONTENT -->

<tr>
<td style="padding:32px">

<table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px">

<tr>
<td style="padding:6px 0;color:#6b7280;width:120px">
Nombre
</td>

<td style="padding:6px 0;color:#ffffff;font-weight:500">
${nombre}
</td>
</tr>

<tr>
<td style="padding:6px 0;color:#6b7280">
Correo
</td>

<td style="padding:6px 0;color:#60a5fa">
${email}
</td>
</tr>

${
  telefono
    ? `<tr>
<td style="padding:6px 0;color:#6b7280">Teléfono</td>
<td style="padding:6px 0;color:#ffffff">${telefono}</td>
</tr>`
    : ""
}

</table>

<!-- MENSAJE -->

<table width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px">
<tr>
<td
style="
background:#020617;
border:1px solid #1f2937;
border-radius:8px;
padding:18px;
">

<p style="
margin:0 0 6px;
font-size:12px;
color:#6b7280;
letter-spacing:.3px;
">
MENSAJE
</p>

<p style="
margin:0;
font-size:14px;
line-height:1.6;
color:#e5e7eb;
white-space:pre-line;
">
${mensaje}
</p>

</td>
</tr>
</table>

<!-- BOTON -->

<table width="100%" cellpadding="0" cellspacing="0" style="margin-top:26px">
<tr>
<td align="center">

<a
href="mailto:${email}"
style="
display:inline-block;
padding:12px 20px;
background:#2563eb;
color:#ffffff;
font-size:14px;
font-weight:500;
text-decoration:none;
border-radius:6px;
letter-spacing:.3px;
"
>
Responder al remitente
</a>

</td>
</tr>
</table>

</td>
</tr>

<!-- FOOTER -->

<tr>
<td style="
padding:18px 32px;
border-top:1px solid #1f2937;
background:#020617;
">

<p style="
margin:0;
font-size:12px;
color:#6b7280;
text-align:center;
">
Este mensaje fue enviado desde el formulario de contacto de
<strong style="color:#9ca3af">kevcodesdev.cl</strong>
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
