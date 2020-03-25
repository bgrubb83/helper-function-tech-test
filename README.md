# Tech test submission

This repo contains a tech test submission for an application to a front end developer role.

Out of respect to the hiring company and the integrity of this test in the future, I've opted not to mention the company's name, or a description of the task.

## Overview

I've built this application as a front end app using [React](https://reactjs.org/), with [Create React App](https://create-react-app.dev/) to speed up the process.

I've also used the [Jest](https://jestjs.io/) test runner to write the unit tests.


## Running the code

Once you've cloned this repo locally you'll need to `cd` into it and run `npm install` to install the required dependencies. Once the installation has completed, you'll just need to run `npm start` within the same directory to spin up the packager and run the app locally. You'll then be able to access it in your browser at `http://localhost:3000/`.

The app will render to the screen the argument passed to the helper function, and once it's ready, the result that it returns. Note that due to the fact that this test specifies the writing of a helper function and not a UX, and due to the short amount of time recommended for the test, the UX is terrible/non-existant, but functional enough to demonstrate what it needs to.

Also due to the nature of this test, my implementation relies upon the fact that the consumer of this helper function will be an experienced developer rather than a general end-user. As such it will be required for you to comment/uncomment the lines of code that I've added from lines 22-27 of `src/App.js` to test all of the different cases that I've included (or of course to add your own additional cases if you wish to). Because the React packager uses the [Watchman](https://facebook.github.io/watchman/) package to watch for code changes, simply changing those lines of code and saving the file whilst the packager is running (as described above) will cause the packager to rebuild the app, and the results to show in the browser.

To stop the app from running, simply tap `Ctrl + C` to kill the running process.

## Running the tests

I've included several Jest unit tests to test the functionality of the helper function. These tests can be run from the project directory by running `npm test`. Note that by default the Jest test runner will only run those tests which have changed since the last git commit to save development time. However, if you tap `a` when prompted Jest will run all of the tests, of which there are currently 13.

Because this test requires the creation of a helper function rather than a UX, the Jest tests I've written are all unit tests specifically targeting that helper function, rather than UX tests which check, for example, that the function was called from a given React component or similar, which seemed a bit superfluous to the task at hand. Essentially I chose to test the helper function that I was asked to write, and not the barebones UX that's required to demonstrate it.

Note that while the helper function is asynchronous and awaits a delay function to provide the necessary delay during processing, I've mocked the delay function within the test suite, bringing the time taken to run the tests down from ~13 seconds to ~1.3 seconds.

To stop the Jest test runner, simply tap `q`.