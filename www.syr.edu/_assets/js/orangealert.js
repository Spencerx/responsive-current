$(document).ready(function () {
        
    $("#alertlatest").hide();
    
    $('#alertlatest').rssfeed(
        'http://www.getrave.com/rss/syr/channel1', {
        limit: 5
    },function(data){
        
        var alertmsg = "";
        var cells = data[0].getElementsByTagName("div");   
        console.log("How many cells: "+cells.length);
        for (var i = 0; i < cells.length; i++) {   
            
            var status = cells[i].getAttribute("class");
            // check attribute for older versions of IE
            var iestatus = cells[i].attributes["class"].value;
            
            if ( status == "modal-body" || iestatus == "modal-body" ) {   
                // grab the data  
                //console.log("modal-body");
                //console.log(cells[i]);
                if(document.all) {
                    //console.log("IE");
                    alertmsg =  $.trim(cells[i].innerText);         
                } else {
                    //console.log("NOT IE");
                    alertmsg =  $.trim(cells[i].textContent);           
                } 
            } 
        }  
        
        //console.log("("+alertmsg+")");
        
        if (alertmsg != "ALL CLEAR") {
            //console.log("not all clear, show");
           /// commented out during hurricane sandy $("#alertlatest").modal();  
        } else {
            //console.log("all clear");
            $("#alertlatest").hide();
            
        }
        
        
    });
    
    
    
});

