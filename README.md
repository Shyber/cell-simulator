# Cell Simulator Coding Exercise

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using the Typescript template.

How I approached the solution
* I started off writing the utils first and its unit tests just to get the core logic sorted easily. 
* In Session 2, I started thinking about the UI and though to write the 'Cell' component first based on div using styled-components.
* I thought about using Canvas and pixels but decided to just move forward with a vanilla HTML based implementation and potential UI improvement later on.
* In my Session 3, I just plugged it all together in App. I thought about creating more views/containers for eg World but just wanted to wrap up the core requirements first.

What would I have done next?
* Potentially split App into atleast one more component.
* Exposed some config options on the UI for world and cell sizes.
* Probably shifted to some component library for nicer aesthetics on the controls.
* Mapped the render logic to Canvas and pixels instead of divs.
* Introduced some decent unit testing with Enzyme, specially around World and how its UI is initialized.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn lint`

Launches the ESLint configured with prettier to run linting scripts on the src folder.


