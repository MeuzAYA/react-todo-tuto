# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  # Todo-list React

  Petite application de liste de tâches réalisée avec React 19, TypeScript et Vite. Les tâches sont conservées dans l'état React en mémoire : elles sont réinitialisées au rechargement de la page.

  ## Démarrer le projet

  Prérequis : Node.js et npm.

  ```sh
  npm install
  npm run dev
  ```

  Vite affiche l'adresse locale à ouvrir dans le navigateur.

  | Commande | Rôle |
  | --- | --- |
  | `npm run dev` | Lance le serveur de développement avec rechargement à chaud. |
  | `npm run build` | Vérifie les projets TypeScript, puis génère la version de production dans `dist/`. |
  | `npm run preview` | Sert localement la version de production déjà générée. |
  | `npm run lint` | Vérifie les fichiers du projet avec ESLint. |

  ## Fonctionnement

  - `src/App.tsx` détient la liste et le texte saisi, ajoute une tâche non vide et inverse l'état d'une tâche identifiée par son id.
  - `src/TacheItem.tsx` affiche une tâche et appelle le gestionnaire fourni lorsqu'on la sélectionne.
  - `src/types.ts` définit le modèle `Tache` : un identifiant, un libellé et un état d'accomplissement.
  - `src/main.tsx` charge les styles globaux et monte `App` dans l'élément `#root` du document.
  - `src/index.css` contient les styles globaux issus du template. `src/App.css` contient les styles de démonstration du template et n'est pas importé par l'application actuellement.

  ## Configuration

  | Fichier | Utilité |
  | --- | --- |
  | `package.json` | Déclare les dépendances du projet et les commandes npm décrites ci-dessus. |
  | `vite.config.ts` | Active le plugin React dans Vite. |
  | `eslint.config.js` | Configure ESLint pour TypeScript, les règles des Hooks React et le rafraîchissement à chaud. |
  | `tsconfig.json` | Regroupe les configurations TypeScript de l'application et des outils Node via des références de projets. |
  | `tsconfig.app.json` | Configure la compilation et les vérifications TypeScript du code de l'application. |
  | `tsconfig.node.json` | Configure TypeScript pour les fichiers exécutés dans Node, notamment la configuration Vite. |
  | `gulpfile.js` | Définit la tâche Gulp par défaut, qui copie `README.md` dans `dist/`. Cette tâche n'est pas appelée par `npm run build`. |
  | `.gitignore` | Exclut du dépôt les dépendances, les sorties de compilation, les journaux et les fichiers locaux d'éditeur. |
  | `index.html` | Fournit la page d'entrée et le point de montage de l'application. |
      reactDom.configs.recommended,
