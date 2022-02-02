// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections:[{ sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
    { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}]
  };

  function nameNumber(course){
      document.getElementById('courseName').innerText=course.name
      document.getElementById('courseCode').innerText=course.code
  }
  function sect(sections){
      const html = sections.map(
    (section) => `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td></tr>`
  );
    document.querySelector('#sections').innerHTML=html.join('')
  }


  nameNumber(aCourse)
  sect(aCourse.sections);