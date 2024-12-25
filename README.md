# Checklist System with Node.js

## Overview

This project is a simple Checklist System built using Node.js that evaluates specific conditions based on input data fetched from an API. The results of the evaluation are displayed on a user-friendly dashboard.

## Features

* Fetches input data from an external API.

* Dynamically evaluates checklist rules.

* Displays the evaluation results (Passed/Failed) in a dashboard.

* Modular design for easy addition or modification of rules.

* Clean and maintainable codebase.

## Technologies Used

* Backend: Node.js (with ES Modules)

* Frontend: HTML, CSS, JavaScript

## Dependencies:

* Express

* node-fetch

* cors

## Running the Application

* Start the server: **npm start**

* Open your browser and visit: http://localhost:2728

## Steps to Add a New Rule
* Define the Rule: Add a new object to the rules array. Each object must have:

   * **name**: A descriptive name for the rule.
   * **condition**: A function that takes the data object and evaluates whether the rule passes or fails. This function must return true (Passed) or false (Failed).
   * Just add this in the rules array in the rules.js file.
