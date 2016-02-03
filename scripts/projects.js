var display= {};

function Project (opts) {
  this.title = opts.title;
  this.author = opts.author;
  this.authorUrl = opts.authorUrl;
  this.imgLink = opts.imgLink
  this.publishedOn = opts.publishedOn;
  this.body = opts.body;
}

Project.prototype.toHtml = function() {
  var template = Handlebars.compile($('#project-template').html());
  return template(this);
}

display.initIndexPage = function() {
  projectData.map(function(ele) {
    var newProject = new Project(ele);
    $('#row-header').append(newProject.toHtml());
  });
}
