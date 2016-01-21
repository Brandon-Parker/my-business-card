var display= {};

function Project (opts) {
  this.title = opts.title;
  this.authorUrl = opts.authorUrl;
  this.publishedOn = opts.publishedOn;
  this.body = opts.body;
}

Project.prototype.toHtml = function() {
  console.log('toHtml Start')
  var template = Handlebars.compile($('#project-template').html());
  console.log('template created');
  console.log('result: '+template(this));
  return template(this);
}

display.initIndexPage = function() {
  console.log('Function start')
  projectData.map(function(ele) {
    console.log('mapping...')
    var newProject = new Project(ele);
    $('#rowHeader').append(newProject.toHtml());
  });
  console.log('function end');
}
