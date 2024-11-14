const courseController = require('./courseController');

//Adding courses
courseController.addCourse('Hello Kitty World Recipes', 'HK101', 'A beginner course on hello kitty desserts', 1);
courseController.addCourse('Delicious Curry Puff Recipes', 'CP201', 'A step by step cooking book', 2);
courseController.addCourse('Super Mom Western Recipes', 'SM301', 'Mom guide on western cuisines', 3);

//Show ALL courses
courseController.getAllCourses();

//Get course via index
courseController.getCourseByIndex(1); 

//Search for course
courseController.searchCourseByNameOrCode('HK101');

//Show TOTAL number of courses
courseController.getTotalCourses();

// Delete a course
courseController.deleteCourseByNameOrCode('Super Mom Western Recipes'); 
courseController.getAllCourses(); 
