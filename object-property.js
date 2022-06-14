 const student = [
    {id:21, name:"omar sunny"},
    {id:31, name:"maannaaa"},
    {id:41, name:"moyuri"},
    {id:61, name:"dipjol"},
 ];
 const names =student.map(student =>student.name);
 const id = student.map(student =>student.id);
 const bigger = student.filter(student =>student.id>40);
 const biggerOne = student.find(student =>student.id>40);
 console.log(biggerOne);