$(function () {
          $("#searchBtn").click(function(){
            var filterSel =  $("#filter option:selected").val();
          if (filterSel > 5 && filterSel < 9){
               $("#filter").attr({"name" : "status_id"});
          }
          if(filterSel > 8){
            $("#filter").attr({"name" : "null"});
            $("#search").attr({"name" : "location"});
          }
          });
        });
