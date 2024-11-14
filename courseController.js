const courses = [];
console.log('  ');
console.log('Adding The Courses:');
function addCourse(name, code, description, difficulty) {
    courses.push({ name, code, description, difficulty });
    console.log(`Course added: ${name} (${code}) -- Difficulty: ${difficulty}`);
    
}


function getAllCourses() {
    console.log('-----------------------');
    console.log("All Courses:");
    courses.forEach((course, index) => {
        console.log(`${index + 1}. ${course.name} (${course.code})`);
        console.log(`   Description: ${course.description}`);
        console.log(`   Difficulty: ${course.difficulty}`);
        console.log(' ');
    });
}

function getCourseByIndex(index) {
    
    const course = (index >= 0 && index < courses.length) ? courses[index] : null;
    if (course) {
        console.log(`Course at index ${index + 1}: ${course.name} (${course.code})`);
        console.log(`   Description: ${course.description}`);
        console.log(`   Difficulty: ${course.difficulty}`);
        console.log('-----------------------');
        
    } else {
        console.log(`No course found at index ${index + 1}, try again.`);
    }
}

function searchCourseByNameOrCode(query) {
    const lowerCaseQuery = query.toLowerCase();
    const results = courses.filter(course =>
        course.name.toLowerCase().includes(lowerCaseQuery) ||
        course.code.toLowerCase().includes(lowerCaseQuery)
    );
    if (results.length > 0) {
        console.log("Searched Course:");
        results.forEach(course => {
            console.log(`${course.name} (${course.code})`);
            console.log(`   Description: ${course.description}`);
            console.log(`   Difficulty: ${course.difficulty}`);
        
        });
    } else {
        console.log("No matching courses found.");
    }
}

function getTotalCourses() {
    console.log('-----------------------');
    console.log(`Total number of courses BEFORE deletion: ${courses.length}`);
    console.log('-----------------------');
}

function deleteCourseByNameOrCode(query) {
    const lowerCaseQuery = query.toLowerCase();
    const index = courses.findIndex(course => 
        course.name.toLowerCase() === lowerCaseQuery || 
        course.code.toLowerCase() === lowerCaseQuery
    );

    if (index !== -1) {
        const removedCourse = courses.splice(index, 1)[0];
        console.log(`Course deleted: ${removedCourse.name} (${removedCourse.code})`);
    } else {
        console.log(`No course found with name or code: ${query}`);
    }
}


module.exports = {
    addCourse,
    getAllCourses,
    getCourseByIndex,
    searchCourseByNameOrCode,
    getTotalCourses,
    deleteCourseByNameOrCode 
};

