# Front end test - Tony Veículos

## Challenge Objective

Render a list of cars with the following data:

- Brand
- Model
- Year
- Price

The form should be validated before the user can submit the data, and after that, a completion message should appear for the user.
The user will be able to select a car from this list, and should be taken to a screen with the detailed car information, and a contact form for generating sales leads.

## Technologies used

As a front end test, i'll choose to use this bunch of techs.

- [Styled Components](https://www.styled-components.com), the best css-in-js lib;
- [Vite](https://vitejs.dev/), to create the React project;
- [Axios](https://axios-http.com/), to make http requests;
- [Jest](https://jestjs.io/), i'll use vitest, but jest get more documentation.

## Why these ?

This stack is the one I am most familiar with working in, and I feel very comfortable with it, allowing me to extract all my potential as a developer. Since whenever I can, I choose the same tools.

## Some hacks that i've use.

To avoid creating a local mock file and paying to access the FIPE table, I went after the API that Tony Veiculos themselves use, in order to maintain the authenticity of the data and minimize the fabrication of prices and products as much as possible. I won't describe the method I used to find this API, as I am certain it's a private API, and I won't disclose it here in the documentation.

## Patterns that i've followed

- YAGNI: `you ain't gonna need it`. All the libraries were installed as needed. None were installed before they were required.
- Conventional Commits;

## How to run the project

- First thing first, you should have git locally installed (Windows olny. Linux and Mac get this native).
  To make sure you have git, open your terminal, then type:  
  `git --version`  
  You should get a return like this:  
  ` git version 2.34.1`

- Second step, clone the repo. To clone the repo, you should type on your terminal:  
  ` git clone git@github.com:Ceagah2/tony-veiculos-teste.git`

- Third, you should jump into this new repo.  
  `cd tony-veiculos-teste`

- Fourth, you should install the dependencies.
  `npm i` or `yarn`

- Last but not least, you should run the application.
  `npm run dev` or `yarn dev`

- Now you just should open in your browser the application, that is at `http://localhost:5173/`

## Developed with ♥ by [Fantasy Forge](https://www.linkedin.com/in/carlosceagah)
