$(function () {
          $("#postIssue").click(function(){

            if(loggedInName!=''){
          $("#postIssue").attr({"type" : "submit"});
        }
          else {
            alert("Please log in to submit the issue")
          }


          });
        });
