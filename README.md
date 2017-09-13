# frontend-bootstrap

## Table of Contents


### Summary

This is a basic but opinionated hello world example using a complete set of tools. Further projects can be based off this set up.

### Technology Summary
* ES6 
* React
* Styled Components
* Webpack
* Babel
* Docker
* Jest
* Enzyme 

## Front-end Development Provisions

### Front-end
    
* ES6, React, Styled Components

Feel free to use ES6, and develop React components. 

### Bundle and dependency management

* npm
* Webpack

NPM is the primary entry point for performing specific build objectives, e.g build, test

### Installing 

The project can be built using the following commands:

1. Natively (assuming you have node/npm installed)

`%> npm install && npm run build`

2. In a docker container:

`%> ./buildImage.sh`

### ES6 Transpiling

* Babel

Babel is incorporated into the build as part of the bundling step (webpack). See `webpack.config.js` and `.babelrc` for more details

### Test

* Jest

Just is used to allow both test authoring and execution, along with coverage. Execute tests as follows:

`%> ./runInCtr.sh npm run test`

You can also run jest in watch-mode:

`%> npm run test:watch`

#### Unit Testing React Components

* Jest
* Enzyme

Jest is used to define the test suites and tests, as well as provide some support for assertions and mocking.

Enzyme is used to render react components at various levels.

#### Coverage

* Jest (via command line arg: --coverage)

Coverage collection is always on. 

### Code Style

EsLint, configured with the airbnb react style is configured

It's triggered on build 

%> `npm run build`

### Cross platform

* Docker

Some docker scripts are available to limit environment setup issues, enable cross platform portability and stability, but also provide 
an entry point for CI

#### Run arbitrary build targets in a docker container

`%> ./runInCtr.sh npm run build`

#### Build and test image

`%> docker build -t frontend-bootstrap .`

## Contributors

* dmneale@thoughtworks.com
* gsoertsz@thoughtworks.com

