// from data.js
var tableData = data;

// YOUR CODE HERE!
//worked: 
//print('{tableData}');

//display on inspect console
//console.log('{tableData}');

//var cityList = []
//var 

//for (var i = 0; i < tableData.length; i++) {
 //   console.log(tableData[i]);
 // }

 var city=[];
 var comments=[];
 var country=[];
 var datetime=[];

 var durationMinutes=[];
 var shape=[];
 var state=[];

 var newTableData = {};

 var allData = [];
 var rowData = [];
var tbody = d3.select("tbody");
 

tableData.forEach(function(tableDataRow) {
    var rowData = [];
    console.log(tableDataRow);
    city.push(tableDataRow.city);
    comments.push(tableDataRow.comments);
    country.push(tableDataRow.country);
    datetime.push(tableDataRow.datetime);
    durationMinutes.push(tableDataRow.durationMinutes);
    shape.push(tableDataRow.shape);
    state.push(tableDataRow.state);

    rowData.push(tableDataRow.datetime);
    rowData.push(tableDataRow.city);
    rowData.push(tableDataRow.state);
    rowData.push(tableDataRow.country);
    rowData.push(tableDataRow.shape);
    rowData.push(tableDataRow.durationMinutes);
    rowData.push(tableDataRow.comments);
    allData.push(rowData);
  });

//console.log(tableData.length);
console.log(city);
console.log(comments);
console.log(country);
console.log(datetime);

console.log(durationMinutes);
console.log(shape);
console.log(state);
console.log("next");
console.log(allData);
console.log("above allData will be used to load html table");
console.log(city.length);
//worked: newTableData = tableData;
newTableData = tableData;
console.log(newTableData);
console.log("here 2");

// Iterate through each student/grade pair
allData.forEach(item => {
  console.log(item);
  //[city, comments, country, datetime, datetimeMapped, shape, state]
  // Append one table row per student/grade
  var row = tbody.append("tr");

  // append one cell for the student and one cell for the grade
  row.append("td").text(item[0]);
  row.append("td").text(item[1]);
  row.append("td").text(item[2]);
  row.append("td").text(item[3]);
  row.append("td").text(item[4]);
  row.append("td").text(item[5]);
  row.append("td").text(item[6]);
  
});

console.log("here 3");



// //below are tests

// var cityMapped = newTableData.map(newTableDataRow => newTableDataRow.city);
// var datetimeMapped = newTableData.map(newTableDataRow => newTableDataRow.datetime);

// console.log(cityMapped);
// console.log(datetimeMapped);

// // Create a custom filtering function
// function selectCity(observation) {
//   return observation.city === 'benton';
// }

// // filter() uses the custom function as its argument
// var cityNewTableData= newTableData.filter(selectCity);

// // Test
// console.log(cityNewTableData);

// //test
// var testArr = [];
// //var testArr[0] = [];
// var student1 = ["Mike", "99"];
// var  student2= ["Peter", "98"];

// testArr.push(student1);
// //testArr[0].push(grades[0]);
// testArr.push(student2);
// console.log(testArr);
// //console.log(testArr[0]);
// //console.log(students);
// //console.log(grades);



