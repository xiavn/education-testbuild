var tabbedContent = {
	"latestNews": {
		"class": "latest-news",
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
				'</p><a class="read-more">Read More...</a></article>';
				html = img + article;
			return html;
		}
	},
};

function generateTabbedContent(tab) {
	return tab;
}

$(document).ready(function() {
	generateTabbedContent(tabbedContent.latestNews);
});