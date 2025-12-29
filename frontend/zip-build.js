import { zip } from 'zip-a-folder';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
  try {
    const distDir = path.join(__dirname, 'dist');
    const zipPath = path.join(__dirname, 'dist.zip');
    
    await zip(distDir, zipPath);
    console.log('ZIP creado exitosamente');
  } catch (err) {
    console.error('Error:', err.message);
    // Alternativa moderna a process.exit(1)
    throw new Error('Process failed');
  }
}

main().catch(() => {});