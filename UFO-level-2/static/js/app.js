// from data.js
var tableData = data;

// YOUR CODE HERE!
//Select the table body in d3
var tableBody = d3.select("tbody");

//Create a table with the input data
function createTable(data_in){
    
    //clear html from table
    tableBody.html("");
    //Append new table row for each object in data
    data_in.forEach(sighting =>{
        tableBody.append("tr");
        //Append values into columns for each row
        Object.values(sighting).forEach(info => {
            tableBody.append("td").text(info);    
        });
    });
}

createTable(tableData);

function filterTable(){
    d3.event.preventDefault(); //Prevent page refresh

    console.log("Button Clicked!");
    var filteredData = data.map(row => row);
    //console.log(filteredData);
    var datetime = d3.select("#datetime").property("value");
    if(datetime){
        //console.log(datetime);
        filteredData = filteredData.filter(row => row.datetime == datetime);
    }
    var city = d3.select("#city").property("value");
    if(city){
        filteredData = filteredData.filter(row => row.city == city);
    }
    var state = d3.select("#state").property("value");
    if(state){
        filteredData = filteredData.filter(row => row.state == state);
    }
    var shape = d3.select("#shape").property("value")
    if(shape){
        filteredData = filteredData.filter(row => row.shape == shape);
    }

    //console.log(filteredData);
    createTable(filteredData);
}

d3.selectAll("#filter-btn").on("click", filterTable);
