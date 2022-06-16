const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

function init(){
    // Fetch the JSON data and console log it
        d3.json(url).then(function(data) {
        console.log(data);    
        let names = data.names;
        
        
        
        for(let i=0; i<names.length; i++){
            let option_sel = d3.select("#selDataset")
            option_sel.append("option").text(names[i]).attr("value",names[i]);
        }       

        createScatter("940");
        createBar("940");
        createSummary("940");
    }
)};


function optionChanged(newID){
    // code that updates graphics
    // one way is to recall each function
    createScatter(newID);
    createBar(newID);
    createSummary(newID);
    console.log(newID)
}

function createScatter(id) {
    //read in sample data
    d3.json(url).then(function(data) {
        console.log(data);
        let x= data.samples.filter(i=>i.id==id)
        console.log(x)
        let ids=x[0].otu_ids
        console.log(ids)
        let sample_values_1=x[0].sample_values.slice(0,10).reverse();
        console.log(sample_values_1);
        let sample_values_all=x[0].sample_values
        console.log(sample_values_all)
        let labels=x[0].otu_labels.slice(0,10).reverse();
        console.log(labels)
        let top_ids= x[0].otu_ids.slice(0,10).reverse();
        let OTU_id = top_ids.map(x => "OTU " + x);

        let bubble_data=[{
                x:ids,
                y: sample_values_all,
                mode: "markers",
                marker:{
                    size:sample_values_all,
                    color:ids
                },
                
              }];
              let bubble_layout={
                  
                  xaxis:{title:"OTU ID"},
                  height:600,
                  width:1000
                };
              Plotly.newPlot("bubble",bubble_data,bubble_layout);

              console.log(`This function generates scatter plot of ${id} `)


})}

function createBar(id) {
    //read in sample data
    d3.json(url).then(function(data) {
        console.log(data);
        let x= data.samples.filter(i=>i.id==id)
        let ids=x[0].id
        console.log(ids)
        let sample_values=x[0].sample_values.slice(0,10).reverse();
        let sample_values_all=x[0].sample_values
        console.log(sample_values)
        let labels=x[0].otu_labels.slice(0,10).reverse();
        console.log(labels)
        //need top 10 otu ids for the graphs
        let top_ids= x[0].otu_ids.slice(0,10).reverse();
        let OTU_id = top_ids.map(x => "OTU " + x);

        let bar_data=[{
            x:sample_values,
            y: OTU_id,
            text: labels,
            type:"bar",
            orientation:"h"
  }];
            let bar_layout={title:"Top 10 OTUS",margin:{t:30,l:150}};
            Plotly.newPlot("bar",bar_data,bar_layout);

            console.log(`This function generates bar chart of ${id} `)

        })}


function createSummary(id){
    d3.json(url).then(function(data) {
        console.log(data);    
        let demographic_data = data.metadata.filter(i=>i.id==id);
        console.log(`this is demo info ${demographic_data[0]}`);
        var panel= d3.select("#sample-metadata");
        panel.html("");
        Object.entries(demographic_data[0]).forEach(([key,value])=>{
            let option_select = d3.select("#sample-metadata");
            option_select.append("p").text(`${key}: ${value}`);

        
        })
})}
init();


