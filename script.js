const calculateCGPA = () => {
    const grades = document.getElementsByClassName('grade');
    const credits = document.getElementsByClassName('credits');
    let totalCredits = 0;
    let totalPoints = 0;
    let filledCourses = 0; // To track how many courses have both grade and credit filled

    for (let i = 0; i < grades.length; i++) {
        const gradeValue = grades[i].value;
        const creditValue = credits[i].value;

        if (gradeValue && creditValue) {  // Only consider fields that are filled
            const grade = parseFloat(gradeValue);
            const credit = parseFloat(creditValue);

            totalPoints += grade * credit;
            totalCredits += credit;
            filledCourses++; // Count the course as filled
        }
    }

    const resultElement = document.getElementById('result');

    // Ensure at least 2 courses are filled
    if (filledCourses >= 2 && totalCredits > 0) {  // Avoid division by zero
        const cgpa = totalPoints / totalCredits;
        resultElement.textContent = `Your CGPA is ${cgpa.toFixed(2)}`;
    } else {
        resultElement.textContent = `Please enter grades and credits for at least 2 courses.`;
    }

    // Show result with animation
    resultElement.classList.add('show');
};

document.getElementById('calculateBtn').addEventListener('click', calculateCGPA);
