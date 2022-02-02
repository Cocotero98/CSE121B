
function getGrades(inputSelector) {
    // get grades from the input box
    // split them into an array (String.split(','))
    // clean up any extra spaces, and make the grades all uppercase. (Array.map())
    // return grades
    const commaSeparatedGrades=document.querySelector('#grades').value
    grades=commaSeparatedGrades.split(',')
    const cleanGrades=grades.map((grade)=>grade.trim().toUpperCase());
    console.log(cleanGrades)
    return cleanGrades
  }

  function lookupGrade(grade) {
    // converts the letter grade to it's GPA point value and returns it
    if (grade==='A'){return 4}
    else if (grade==='B'){return 3}
    else if (grade==='C'){return 2}
    else if (grade==='D'){return 1}

  }
  
  function calculateGpa(grades) {
    // gets a list of grades passed in
    // convert the letter grades to gpa points
    // calculates the GPA
    // return the GPA
    const arrayOfPoints= grades.map((grade) => lookupGrade(grade))
    const gpa =arrayOfPoints.reduce((total, num) => total + num) / arrayOfPoints.length;
    return gpa
  }
  
  function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML in the element identified by the selector
    const element=document.querySelector(selector)
    element.innerHTML=gpa

  }

  function clickHandler() {
    // when the button in our html is clicked:
    // get the grades entered into the input
    // calculate the gpa from the grades entered
    // display the gpa
    const grades=getGrades()
    const gpa=calculateGpa(grades)
    outputGpa(gpa, "#output");
  }

  document.querySelector("#submitButton").addEventListener("click", clickHandler);