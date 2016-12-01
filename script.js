$(document).ready(function(){ 
  
 $(".btn").attr('href','https://en.wikipedia.org/wiki/Special:Random');
 
$("input[type='text']").addClass("searchBox");                             
 $(".searchBox").keyup(function(event){   
   var searchInfo = $("input[type='text']").val();
                        
$.ajax({ 	
dataType: "jsonp", url:"https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + searchInfo + "&format=json", 
success: function(data){
 
 //so results don't repeat!!
  $("#searchResults").empty(); 
  $("#searchResults").append("<p style='text-align:center; '> Results for <b>" + searchInfo + "</b>");
  
  
  
  $.each(data.query.search, function(i,response){
      var finding =  "<a style='text-decoration:none;' href='http://en.wikipedia.org/wiki/" + encodeURIComponent(response.title) + "'><div class='finding'><b style='text-align:center; ''>" + response.title + "</b><p>"+response.snippet + "</div></a>";
     
   $("#searchResults").append(finding);
});
}
 
});
});   
 });                             

                             


/*

//
-click a button to see a random article(easier)
-encodeURI component













*/