// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function init(mydata) {
  console.log("init called");
  mydata.forEach(ufosittings => {
    var row = tbody.append("tr");
    Object.entries(ufosittings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}
init(tableData);

var button = d3.select("#filter-btn");
button.on("click", function() {
  console.log("user filtered the data");

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  var inputElement2 = d3.select("#city");
  var inputElement3 = d3.select("#state");
  var inputElement4 = d3.select("#country");
  var inputElement5 = d3.select("#shape");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  var inputValue2 = inputElement2.property("value");
  var inputValue3 = inputElement3.property("value");
  var inputValue4 = inputElement4.property("value");
  var inputValue5 = inputElement5.property("value");

  // console.log(inputValue);
  // console.log(tableData);
  var filteredData = tableData;

  if (inputValue) {
    filteredData = filteredData.filter(
      myDateFilter => myDateFilter.datetime === inputValue
    );
  }

  if (inputValue2) {
    filteredData = filteredData.filter(
      myDateFilter => myDateFilter.city === inputValue2
    );
  }
  if (inputValue3) {
    filteredData = filteredData.filter(
      myDateFilter => myDateFilter.state === inputValue3
    );
  }
  if (inputValue4) {
    filteredData = filteredData.filter(
      myDateFilter => myDateFilter.country === inputValue4
    );
  }
  if (inputValue5) {
    filteredData = filteredData.filter(
      myDateFilter => myDateFilter.shape === inputValue5
    );
  }
  console.log(inputValue);

  console.log(filteredData);

  // $("#tbody-id").empty();
  d3.select("#tbody-id")
    .selectAll("tr")
    .remove();

  // append stats to the list
  init(filteredData);
  console.log("filteredData: ", filteredData);
});
