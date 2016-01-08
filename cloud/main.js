
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
require('cloud/app.js');

Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});
/*
function getPosts(){
      var query = new Parse.Query(class1_object);
      query.find({     
        success: function(results){
          var output="";
          for( var i in results){
            var name = results[i].get("username");
            var pass = results[i].get("password");
            var pointer_to_other_class = results[i].get("pointer");
            var id = pointer_to_other_class.id;
            
            output+="<li>";
            output+="<h4><a href='"+id+"'>"+name+"</h4>";
            output+="<h4>"+pass+"</h4>";
            
            output+="</li>";
          }
          $("#show-info").html(output);
        }, error: function(error){
          console.log("Query Error: "+error.message);
        }
    });
}
*/