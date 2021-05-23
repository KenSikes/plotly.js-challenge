//Use the D3 library to read in samples.json
function buildMetadata(sample) {

    // metadata 
   
      d3.json("samples.json").then(function(data){
        var metadata = data.metadata;
        var filterdata = metadata.filter(sampleobject => sampleobject.id==sample);
        var result = filterdata[0];
        var sampleData = d3.select("#sample-metadata");
        sampleData.html("");
        Object.entries(result).forEach(function([key,value]){
          var row = sampleData.append("p");
          row.text(`${key}:${value}`)
        })
      });
  }

  //create dropdown menu
function dropdown(){
    var ID = d3.select("#selDataset");
    d3.json("samples.json").then((data)=>{
        var id = data.names;
        id.forEach((sampleid)=>{
            ID.append("option")
            .text(sampleid)
            .property("value",sampleid)
        })
        var sample1 = id[0];
        buildMetadata(sample1);
        buildCharts(sample1);
    })
}

/*Create a horizontal bar chart .
Use sample_values as the values for the bar chart.
Use otu_ids as the labels for the bar chart.
Use otu_labels as the hovertext for the chart.
*/

function buildCharts(sample) {
    // pull data w json
    d3.json("samples.json").then(function(data){
        var metadata = data.samples;
        var filterdata = metadata.filter(sampleobject => sampleobject.id==sample);
        var result = filterdata[0];

        var OTU_ids = result.otu_ids;
        var OTU_labels = result.otu_labels;
        var samplevalue = result.sample_values;

