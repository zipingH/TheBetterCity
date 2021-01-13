/*
  sessionStorage.js
  CSC648-su19-Team04
  The Better City
  Created by Maithri on 7/30/19.
  Copyright © CSC-648/848 Team 04. All rights reserved.
*/
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
                    $("#search").attr({"value" : ty2});
               }
            });
