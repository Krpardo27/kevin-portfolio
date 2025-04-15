import { zip } from 'zip-a-folder';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
  const buildDir = path.join(__dirname, 'build');
  const zipPath = path.join(__dirname, 'build.zip');
  
  try {
    await zip(buildDir, zipPath);
    console.log('ZIP creado exitosamente');
    return 0; // Código de éxito
  } catch (err) {
    console.error('Error al crear el ZIP:', err);
    return 1; // Código de error
  }
}

main().then(code => {
  if (code !== 0) {
    // Forzar salida con error
    setTimeout(() => { throw new Error('Process failed'); }, 0);
  }
});