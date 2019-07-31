$(function () {

        $("#searchBtn").click(function () {

             var filterSel =  $("#filter option:selected").text();

              sessionStorage.setItem("sele", filterSel);
              });

              var ty = sessionStorage.getItem("sele");

              if(ty){
                //Set the value of select from sessionStorage
                    $('#filter option').filter(function () { return $(this).html() == ty; }).prop('selected', true);
               }
            });
