// init();  
  
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
function init(){
    // Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);    
let names = data.names;
  console.log(data.names);

for(let i=0; i<names.length; i++){
    let option_sel = d3.select("#selDataset")
    option_sel.append("option").text(names[i]).attr("value",names[i]);
}})};
 
init()


// // // pulling in the data using d3
// // const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// // // Fetch the JSON data and console log it
// // d3.json(url).then(function(data) {
// //   console.log(data);
// // });

// //bar chart is in the init function 

// function init(){

// }

// //how to define variables above for each graph
// // function build_charts(sample) {
// function init(){
  
  

//   const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

//   // Fetch the JSON data and console log it
//   d3.json(url).then(function(data) {
//     console.log(data);
//   });
//   let samples = data.samples;
//   let result_array= samples.filter(sampleobject=>sampleobject.id==sample);
//   let result= result_array[0];
//   let otu_ids=result.otu_ids;
//   let otu_labels=result.otu_labels;
//   let sample_values=result.sample_values;

//   let right_ticks=otu_ids.slice(0,10).map(otuid=>`otu ${otuid}`).reverse();
//   let bar_data=[{
//     y:right_ticks,
//     x:sample_values.slick(0,10).reverse(),
//     text: otu_labels.slick(0,10).reverse(),
//     type:"bar",
//     orientation:"h"
//   }];
//   let bar_layout={title:"Top 10 OTUS",margin:{t:30,l:150}};
//   Plotly.newPlot("bar",bar_data,bar_layout);

//   }


// function init(){
//   let selector=d3.select("seldataset");
//   const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

//   // Fetch the JSON data and console log it
// d3.json(url).then(function(data) {
//     console.log(data);
//     let sample_names=data.names;
//   sample_names.forEach((sample) => {
//     selector.append("option").text(sample).property("value",sample);});

//   build_charts(sample_names[0]);
// });}
// init();


// let names = ["Mark", "James", "Mona", "Lisa"];
// for(let i=0; i<names.length; i++){
//     let option_sel = d3.select("#selDataset")
//     option_sel.append("option").text(names[i]).attr("value",names[i]);
// }

// // Add function to bottom of Activity 3 JS script
// function alertMe(){

//   // Below, two methods for getting the select element value
//   // Select DOM node
//   let val = d3.select("#cars").node().value;
//   console.log(`Node Selection is ${val}`);
//   alert(`Node Selection is ${val}`);

//   // Select the element property
//   let valAlt = d3.select("#cars").property("value");
//   console.log(`Property Selection is ${valAlt}`);
//   alert(`Property Selection is ${valAlt}`);
// }
// //examples from HW

// // function init() {
// //   data = [{
// //     x: [1, 2, 3, 4, 5],
// //     y: [1, 2, 4, 8, 16] }];

// //   Plotly.newPlot("bar", data);
// // }

// // d3.selectAll("#selDataset").on("change", updatePlotly);

// // function updatePlotly() {
// //   // Use D3 to select the dropdown menu
// //   let dropdownMenu = d3.select("#selDataset");
// //   // Assign the value of the dropdown menu option to a variable
// //   let dataset = dropdownMenu.property("value");

// //   // Initialize x and y arrays
// //   let x = [];
// //   let y = [];

// //   if (dataset === 'dataset1') {
// //     x = [1, 2, 3, 4, 5];
// //     y = [1, 2, 4, 8, 16];
// //   }

// //   else if (dataset === 'dataset2') {
// //     x = [10, 20, 30, 40, 50];
// //     y = [1, 10, 100, 1000, 10000];
// //   }

// //   // Note the extra brackets around 'x' and 'y'
// //   Plotly.restyle("plot", "x", [x]);
// //   Plotly.restyle("plot", "y", [y]);
// // }

