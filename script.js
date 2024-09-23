$(document).ready(function(){ 
  
                          
 $("#search-box").keyup(function(event){   
   var searchInfo = $("#search-box").val(); 
                        
$.ajax({ 	
dataType: "jsonp", url:"https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + searchInfo + "&format=json", 
success: function(data){
 
 //so results don't repeat!!
  $("#search-results").empty(); 
  $("#search-results").append("<p style='text-align:center; '> Results for <b>" + searchInfo + "</b>");
  
  
  
  $.each(data.query.search, function(i,response){
      var finding =  "<a style='text-decoration:none;' href='http://en.wikipedia.org/wiki/" + encodeURIComponent(response.title) + "'><div class='finding'><b style='text-align:center; ''>" + response.title + "</b><p>"+response.snippet + "</div></a>";
     
   $("#search-results").append(finding);
});
}
 
});
});   
 });                                                       
