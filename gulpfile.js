import { src, dest } from 'gulp';

// Copie la documentation à la racine de la sortie de production.
function copierReadme() {
  return src('README.md').pipe(dest('dist'));
}

export default copierReadme;