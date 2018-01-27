#!/usr/bin/env bash

# Create a new Angular CLI application
ng new web-app

cd web-app
ng serve --aot --no-sourcemap

# Generate a new component named home in the app module
ng generate component home

# Make more components
ng generate component about
ng generate component login
ng generate component signup

ng generate module profile

ng generate component profile/post

# Convert the style sheets to use Sass
ng set defaults.styleExt scss

# Set up code coverage with coveralls
npm install karma-coveralls --save-dev