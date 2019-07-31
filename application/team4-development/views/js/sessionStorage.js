$(function () {

        $("#searchBtn").click(function () {

             var filterSel =  $("#filter option:selected").text();
              sessionStorage.setItem("sele", filterSel);

              var searchSel =   $("#search").val();
              sessionStorage.setItem("sele2", searchSel);

              });

              var ty = sessionStorage.getItem("sele");
                var ty2 = sessionStorage.getItem("sele2");

              if(ty){
                //Set the value of select from sessionStorage
                    $('#filter option').filter(function () { return $(this).html() == ty; }).prop('selected', true);
                    $("#search").attr({"placeholder" : ty2});
               }
            });
