const grades=['A', 'B', 'A']
const gradevalue=grades.map(function gpa(grade){
  let points= 0
  if (grade==='A') 
    points= 4;
  else if(grade==='B')
    points= 3;
  else if(grade==='C')
    points= 2;
  return points;
})

const pointsTotal = gradevalue.reduce(function (total, item) {
  return total + item;});

document.getElementById('p').innerHTML= pointsTotal;