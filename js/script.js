var tabbedContent = {
	"latestNews": {
		"header": "Year 3 Science Museum Adventure!",
		"date": "12/04/2014",
		"text": "Miss Smith and Mrs Weston's Year 3 classes had great fun at the Science Museum this week. Their trip was to support the Amazing Bodies portion of their curriculum this year, and they made lots of amazing discoveries...",
		"photo": "../img/news-photo.jpg",
		"html": function() {
			var img = '<aside class="news-photo"><img src="' + this.photo + '" alt="Photo of the Science Museum"></aside>',
				article = '<article class="latest-news"><h2>' + 
				this.header + 
				'</h2><span class="date">' + this.date + '</span><p>' + 
				this.text + 
				'</p><a class="read-more">Read More...</a></article>',
				html = img + article;
			return html;
		}
	},
	"upcomingEvents": {
		"events": [
			{
				"month": "Jan",
				"day": 10,
				"name": "Fire Safety Day",
				"time": "All Day"
			},
			{
				"month": "Jan",
				"day": 12,
				"name": "Parent's Evening",
				"time": "16:00 - 17:30"
			},
			{
				"month": "Jan",
				"day": 13,
				"name": "KS2 Football Tournament",
				"time": "15:00 - 17:00"
			},
			{
				"month": "Jan",
				"day": 15,
				"name": "Year 5 Gallery Trip",
				"time": "All Day"
			},
			{
				"month": "Jan",
				"day": 16,
				"name": "Year 6 Swimming Lessons",
				"time": "10:30 - 12:30"
			},
			{
				"month": "Jan",
				"day": 17,
				"name": "School Photos",
				"time": "09:00 - 11:30"
			},
		],
		"generateEvent": function(event) {
			var dateBox = '<div class="date-box"><div class="month">' + 
			event.month + 
			'</div><div class="day">' + 
			event.day + 
			'</div></div>',
				eventName = '<h3>' + event.name + '</h3>',
				eventTime = '<p>' + event.time + '</p>',
				html = '<div class="event">' + dateBox + eventName + eventTime + '</div>';
			return html;
		},
		"html": function() {
			var html = "";
			for (var i=0; i<this.events.length; i++) {
				html += this.generateEvent(this.events[i]);
			}
			return html;
		}
	}
};

function generateTabbedContent(tab) {
	$("#tabbed-content-active").html(tab.html());
}

$(document).ready(function() {
	generateTabbedContent(tabbedContent.latestNews);
	$("#tabbed-nav ul li").click(function() {
		$("#tabbed-nav ul li").removeClass("active");
		$(this).addClass("active");
		var tab = $(this).attr("id");
		generateTabbedContent(tabbedContent[tab]);
	});
});