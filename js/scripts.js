$(function tabs() {

    $('.nav-tabs a').each(function(index, el) {
  
      var $this = $(this);
      var pane = $this.attr('href');
      var src = $this.data('src');
  
      $(pane).load(src);
  
    });
  
  });

async function callLeaderboard() {
  console.log('s');
  
  var apiCall = 'http://localhost:31415/api/improvement\?agentId\="a4e3edd5-f9ee-422e-9e42-ec05b66ab677';
  
  const result = await fetch(apiCall, {mode: "no-cors"});
  console.log(typeof result);

  if (result.status != 200) {
      alert("Error " + result.status + "\nLeaderboard can not be displayed.");
  };

  function addAllColumnHeaders() {
  var columnSet = ["Agent ID", "Games Played", "Games Won", "Win Percentage (%)"];
  var headerTr$ = $('<tr/>');

  for (i=0; i<columnSet.length; i++) {
      headerTr$.append($('<th/>').html(columnSet[i]));
  }

  $("#excelDataTable").append(headerTr$);

  return columnSet;
  };

  function buildHtmlTable() {
    var columns = addAllColumnHeaders();
    console.log(result.keys())
    let objCount = 0
    //For each day (number of days)
    for (i=0;i<k.length;i++) {
        numObj = a.near_earth_objects[k[i]].length;
        numDays = k.length;

        let dataFrame = [name, refId, minDia, maxDia, hazardous, orbits, approachDate, velocity, missDistance];
    
        row$.append($('<td/>').html(date));
        
        dataFrame.forEach(function(obs, i) {
            if (obs == null) {
                cellValue = "";
            }
            else {
                cellValue = obs;
            };
            row$.append($('<td/>').html(cellValue));
            let loadPercent = ((objCount/numObj * 100)/numDays);
            //console.log(loadPercent);
            $("#loadPercent").html(Math.round(loadPercent));
        });

            $("#excelDataTable").append(row$);
        };

    };
  
  addAllColumnHeaders();
  };