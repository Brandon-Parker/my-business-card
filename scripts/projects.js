var display= {};

function Project (opts) {
  this.title = opts.title;
  this.authorUrl = opts.authorUrl;
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
    $('#rowHeader').append(newProject.toHtml());
  });
}
