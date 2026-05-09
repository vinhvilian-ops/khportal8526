import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Copy server output to vercel functions
const serverDist = path.join(__dirname, 'dist/server');
const vercelFunctions = path.join(__dirname, '.vercel/output/functions');

if (fs.existsSync(serverDist)) {
  fs.mkdirSync(vercelFunctions, { recursive: true });
  fs.cpSync(serverDist, vercelFunctions, { recursive: true });
}

console.log('✓ Build prepared for Vercel');
