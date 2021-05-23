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