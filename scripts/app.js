var portfolioView = [];

function Projects (opts) {
  this.title = opts.title;
  this.category = opts.category;
  this.authorUrl = opts.authorUrl;
  this.publishedOn = opts.publishedOn;
  this.body = opts.body;
}

function bxslider() {
$(document).ready(function(){
  $('.bxslider').bxSlider();
  });
}


bxslider();
