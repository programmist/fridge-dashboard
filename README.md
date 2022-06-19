# Getting Started With the QPU Fridge Dashboard

The fridge dashboard application is a React web application (bootstrapped with [Create React App](https://github.com/facebook/create-react-app)) with an [Express](https://expressjs.com/) back-end API server. The web application runs in development mode for ease of development and demonstration.

This is a prototype and, as such, is still a work-in-progress.

## 1. Running the Application

### 1.1 Required Software

In order to run this application you will need to have a relatively recent version of [NodeJS](https://nodejs.org/en/) installed. I developed with **v16.15.1** and recommend versions 15 or higher, as some features (like ES modules) may not work in older versions.

### 1.2 Installation

Next you will need to install the application dependencies via Node Package Manager by running `npm run installall` from the `fridge-dashboard/` project root directory. This may take a few minutes as dependencies are downloaded.

### 1.3 Execution

Once installation is complete, you can execute the `npm run startall` command from the project root directory, to start both the web and back-end API servers on your local machine. This should also automatically open the main page of the application in your browser, which is served at [http://localhost:3000](http://localhost:3000). Since the application runs in development mode, making and saving any code changes will automatically reload the currently-open page with hte changes applied.

**Note:** If you wish you may run the server and client separately (in separate console tabs/windows) with the `npm run server` and `npm run client` commands respectively.

## 2. Stopping the Application

in order to stop the servers, simply type `Ctrl+C` in the same console(s) in which you started the application.

## 3. Using the Application

The home page should display a list of QPU fridge options. Clicking on any fridge will take you to that fridge's metrics page, which will display the requested graphics. In order to return to the home page simply use your browser's back button.

Future enhancements should include explicit navigation controls to enhance and normalize the experience for both web and mobile users.

## 4. Running Tests

In order to execute the tests, first change directories to the `fridge-dashboard/client` subdirectory. Next run `npm test`. This will execute the test script, which should present a menu of options. In order to run all tests, type `a` as the menu suggests. To exit, type `q` or `Ctrl+C`.

**Note:** All unit and functional tests can be executed without any of the servers running.

# Architecture

Most of the content of this project is organized into two main subdirectories: `client/` and `server/`, leaving the root directory mostly empty, save for this README and some configuration files. The `server/` subdirectory contains the back-end API code, while the `client/` subdirectory contains the React web application code.

## API Server

As mentioned the API server is implemented using Express, which is a very simple Node HTTP server. As advices, the API uses hard-coded data in lieu of an actual database. Also, due to the simplicity of this prototype, all API routes are contained within the single `index.js` file, whereas normally they might be organized up into separate directories/files.

## Web Application

The web application uses the latest version of React, bootstrapped with the `create-react-app` CLI, as mentioned. All React code can be found under `client/src`. Static files can be found in `client/public`.

# Github Repo

This application can be found on Github at https://github.com/programmist/fridge-dashboard/.
