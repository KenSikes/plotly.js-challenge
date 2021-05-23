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

  //create dropdown
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