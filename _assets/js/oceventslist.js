var longMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    $(document).ready(function(){
        $("#occalendar").html("");
        
        $.getJSON("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%3D'http%3A%2F%2Fsuevents.syr.edu%2Fexport.php%3Fcalendar%3Dorangecentral%26type%3Dxml%26categoryid%3D0%26sponsortype%3Dall%26specificsponsor%3D'%20&format=json&diagnostics=true&callback=?",
            function(data){
              $("#occalendar").html("");
              $.each(data.query.results.events.event, function(i,item){
                eventdate = new Date(item.date);
                evDate = item.date.split("-");
                
                eventDay = evDate[2];
                
                eventMonth = longMonths[(evDate[1] -1)];
                
                eventTime = item.timebegin.split(":");
                
                eventHour = eventTime[0] > 12 ? ((eventTime[0] -12)  + ":" +eventTime[1] + " PM") : (eventTime[0] + ":" +eventTime[1] + " AM");
                eventinfo = "<div class='eventinfo'><h3><a href=\""+item.url+"\" target='new'>"+item.title+"</a></h3><em> "+eventMonth+" "+eventDay+" @ "+eventHour+"</em><br />Location: <em> "+item.location+" </em><p>"+item.description+"</p></div>";
                $("#occalendar").append(eventinfo);           
       
              });
            }).error(function() { });
      });
