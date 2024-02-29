# React + TypeScript + Vite

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



/// App details
[1:32 PM] Mathan Mohan Ganesan
React JS
Create a web app in Typescript with React JS functional components to provide information on NYC High schools. Use Visual Studio Code editor to complete this.
Display a list of NYC High Schools (school_name, dbn)
Access the JSON API directly from below link: https://data.cityofnewyork.us/resource/s3k6-pzi2.json
Selecting a school should show additional information about the school. At the very least, display the overview_paragraph
Please consider reusable component pattern to solve #1 and #2
Implement the unit test cases using JEST/Enzyme or React Testing Library
Write automation will be plus point
Ensure that you provide clear and thorough explanations while writing your code. Clarify the steps and reasoning behind your decisions, making it easier for others to understand and learn from your work.
[1:34 PM] Mathan Mohan Ganesan
Code Submission Guidelines:
1.      Submit your code via Gitlab.com. / Github.com Feel free to use your current account or create a free account.
2.      Create a new PUBLIC project.
3.      Create a repository and add your code challenge.
4.      Add the email address of Photon Point of Contact as a “Master /Maintainer” to your project:
User Name: Shyam-Photon/ Photon PoC email ids: Shyam.su1@photon.com
4. Also share your Public project link or entire code Repo Zip file to the recruiter.
The most-comprehensive AI-powered DevSecOps platform
From planning to production, bring teams together in one application. Ship secure code more efficiently to deliver value faster.

Meeting Details
Master /Maintainer - 
User Name: Shyam-Photon/ Photon PoC email ids: Shyam.su1@photon.com