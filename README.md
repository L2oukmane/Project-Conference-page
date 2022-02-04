# Cpastone Project for module-1

> This is a complete version of my Capstone project.

My goal here is to Build a personal portfolio site from scratch, focusing on building the mobile version first. take a look at what i'v built [Live Demo](https://l2oukmane.github.io/Capstone-project-Conference-page/). 🙂

## Built With

- Lighthouse (An open-source, automated tool for improving the quality of web pages. It has audits for performance, accessibility, progressive web apps, SEO and more).
- Webhint (A customizable linting tool that helps you improve your site's accessibility, speed, cross-browser compatibility, and more by checking your code for best practices and common errors).
- Stylelint (A mighty, modern linter that helps you avoid errors and enforce conventions in your styles).

To get a local copy up and running follow these simple example steps.

### Prerequisites

The basic requirements for building the executable are:

- A working browser application (Google chrome, Mozilla Fire fox, Microsoft edge ...)
- VSCode or any other equivalent code editor
- Node Package Manager (For installing packages like Lighthous, webhint & stylelint used for checking for debugging bad codes before deployment)

# Getting Started

#### Cloning the project

```
git clone  https://github.com/L2oukmane/Capstone-project-Conference-page <Your-Build-Directory>
```

## Getting packages and debuging with Stylelint

```
npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
```

##### For validation detection using Stylelint Run

```
npx stylelint "**/*.{css,scss}"
```

##### from parent source directory

## Getting packages and debuging with Webhint

```
npm init -y
npm install --save-dev hint@6.x
```

##### For validation detection using Webhint Run

```
npx hint .
```

## Getting packages and debuging with Eslint

```
npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x

```

##### For validation detection using Eslint Run

```

npx eslint .

```

##### from parent source directory

## Acknowledgments

- Thanks to Cindy Shin whose design of cc global summit 2015 was used.

## License

All source code files are licensed under the permissive MIT license
(https://opensource.org/licenses/MIT) unless marked differently in a particular folder/file.

## Author

- **Oustani Loukmane** - [github](https://github.com/L2oukmane), [twitter](https://twitter.com/LoukmaneOustani), [linkedin](https://www.linkedin.com/in/loukmane-oustani-221668211/)
