
# WildHut Dashboard

![screenshot](/public/trello-screenshot.png)

### fully-functional task management app
#### Live on [https://trello101.vercel.app/](https://trello101.vercel.app/)
## Technology Stack

Trello 101  is built using the following technologies:

- **React**
- **Redux Toolkit**
- **Typescript**
- **React Hook Form**
- **Tailwind CSS**
- **date fns**

## Features

- ✅ create / update /delete boards or workspace
- ✅ create /update / delete columns known as category
- ✅ create  / delete tasks
- ✅ each task can be have subtask on it 
- ✅ tasks can be move from category to another in workspace or board  
- ✅ all work space and task user created save in localstorage 
 - ✅ have dark / light mode  with store your preference in browser storage  

- ✅ compatible for various screens
- ✅ handle your inputs and consider you faults when interact with app


- - To get started with the Trello 101 , follow these steps:

1. **Installation**: Clone the repository to your local machine.
   ```bash
   git clone https://github.com/shawkysobhy/Trello101.git
   ```


### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
