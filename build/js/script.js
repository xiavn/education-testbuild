function generateTabbedContent(e){$("#tabbed-content-active").html(e.html())}var tabbedContent={latestNews:{header:"Year 3 Science Museum Adventure!",date:"12/04/2014",text:"Miss Smith and Mrs Weston's Year 3 classes had great fun at the Science Museum this week. Their trip was to support the Amazing Bodies portion of their curriculum this year, and they made lots of amazing discoveries...",photo:"../img/news-photo.jpg",html:function(){var e='<aside class="news-photo"><img src="'+this.photo+'" alt="Photo of the Science Museum"></aside>',t='<article class="latest-news"><h2>'+this.header+'</h2><span class="date">'+this.date+"</span><p>"+this.text+'</p><a class="read-more">Read More...</a></article>',a=e+t;return a}},upcomingEvents:{events:[{month:"Jan",day:10,name:"Fire Safety Day",time:"All Day"},{month:"Jan",day:12,name:"Parent's Evening",time:"16:00 - 17:30"},{month:"Jan",day:13,name:"KS2 Football Tournament",time:"15:00 - 17:00"},{month:"Jan",day:15,name:"Year 5 Gallery Trip",time:"All Day"},{month:"Jan",day:16,name:"Year 6 Swimming Lessons",time:"10:30 - 12:30"},{month:"Jan",day:17,name:"School Photos",time:"09:00 - 11:30"}],generateEvent:function(e){var t='<div class="date-box"><div class="month">'+e.month+'</div><div class="day">'+e.day+"</div></div>",a="<h3>"+e.name+"</h3>",s="<p>"+e.time+"</p>",i='<div class="event">'+t+a+s+"</div>";return i},html:function(){for(var e="",t=0;t<this.events.length;t++)e+=this.generateEvent(this.events[t]);return e}},latestPhotos:{photos:[{photo:"l-photo1.jpg",alt:"School Reading Time"},{photo:"l-photo2.jpg",alt:"Activity Time"},{photo:"l-photo3.jpg",alt:"Arts & Crafts"}],generateSlider:function(e){var t='<li><img src="../img/'+e.photo+'" alt="'+e.alt+'"></li>';return t},html:function(){for(var e="",t=0;t<this.photos.length;t++)e+=this.generateSlider(this.photos[t]);var a='<div class="arrow-slider"><img class="arrow-slider" id="arrow-left" src="../img/arrow-left-slider.png"></div><div class="photo-slider"><ul>'+e+'</ul></div><div class="arrow-slider"><img id="arrow-right" src="../img/arrow-right-slider.png"></div>';return a}},newsletters:{header:"Year 3 Science Museum Adventure!",date:"12/04/2014",text:"Miss Smith and Mrs Weston's Year 3 classes had great fun at the Science Museum this week. Their trip was to support the Amazing Bodies portion of their curriculum this year, and they made lots of amazing discoveries...",photo:"../img/news-photo.jpg",html:function(){var e='<aside class="news-photo"><img src="'+this.photo+'" alt="Photo of the Science Museum"></aside>',t='<article class="latest-news"><h2>'+this.header+'</h2><span class="date">'+this.date+"</span><p>"+this.text+'</p><a class="read-more">Read More...</a></article>',a=e+t;return a}}};$(document).ready(function(){generateTabbedContent(tabbedContent.latestNews),$("#tabbed-nav ul li").click(function(){$("#tabbed-nav ul li").removeClass("active"),$(this).addClass("active");var e=$(this).attr("id");generateTabbedContent(tabbedContent[e])})});