# Assignment 1
# Course Management Node Module
This Node.js module allows you to manage and view a list of courses through basic operations such as adding, retrieving, searching, and deleting courses. It provides functions to interact with the courses array.

## Setup Instructions
1. Ensure you have Node.js installed on your system.
2. Create a new project folder called Assignment 1 and navigate to it in your terminal.
3. Create two files:
   - `courseController.js` (this contains the module)
   - `app.js` (a file to demonstrate usage)
4. Copy the code from the `courseController` module into `courseController.js`.
5. In `app.js`, require the module and call its functions to demonstrate functionality.

6. required module to add in app.js:
```js
- const courseController = require('./courseController');
```

## Example functions:
1. Adding courses
- courseController.addCourse('Hello Kitty World Recipes', 'HK101', 'A beginner course on hello kitty desserts', 1);
- courseController.addCourse('Delicious Curry Puff Recipes', 'CP201', 'A step by step cooking book', - 2);
courseController.addCourse('Super Mom Western Recipes', 'SM301', 'Mom guide on western cuisines', 3);
-----------------------------------------------------------------------
2. Show ALL courses
```js
- courseController.getAllCourses();
```
-----------------------------------------------------------------------
3. Get course via index
```js
- courseController.getCourseByIndex(1);
```
-----------------------------------------------------------------------
4. Search for a course by name or code
```js
- courseController.searchCourseByNameOrCode('HK101');
```
-----------------------------------------------------------------------
5. Show total number of courses
```js
- courseController.getTotalCourses();
```
-----------------------------------------------------------------------
6. Delete a course by name or code
```js
- courseController.deleteCourseByNameOrCode('Super Mom Western Recipes');
```
-----------------------------------------------------------------------
7. Show ALL courses after deletion
```js
- courseController.getAllCourses();
```
-----------------------------------------------------------------------

## References
- Lab 2
- Lab 5
- StackOverflow
- Learn Coding(Youtube)

