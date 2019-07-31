$(function () {
          $("#searchBtn").click(function(){
            var filterSel =  $("#filter option:selected").val();
          if (filterSel > 5)
               $("#filter").attr({"name" : "status_id"});
          });
        });
