/*
  filterOption.js
  CSC648-su19-Team04
  The Better City
  Created by Maithri on 7/30/19.
  Copyright © CSC-648/848 Team 04. All rights reserved.
*/
$(function () {
          $("#searchBtn").click(function(){
            var filterSel =  $("#filter option:selected").val();
          if (filterSel > 5 && filterSel < 9){
               $("#filter").attr({"name" : "status_id"});
          }
          if(filterSel > 8){
            $("#filter").attr({"name" : "search"});
            $("#search").attr({"name" : "title"});
          }
          });
        });
