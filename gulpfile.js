import { src, dest } from 'gulp';

function copierReadme() {
  return src('README.md').pipe(dest('dist'));
}

export default copierReadme;