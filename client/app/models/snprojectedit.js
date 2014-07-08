import DS from 'ember-data';

var Snprojectview = DS.Model.extend({
  name: DS.attr('string'),
  isRunning: DS.attr('boolean'),
  title: DS.attr('string'),
  tags: DS.attr('string'),  
  content: DS.attr('string')	  
});

Snprojectview.reopenClass({
	FIXTURES: [
	  {
    id: 1,
    name: 'Social Network Test 1',
    isRunning: false,
    title: 'This is a test title',
    tags: 'social',    
    content: 'This is the test content'    
  },
  {
    id: 2,
    name: 'Social Network Test 2',
    isRunning: false,
    title: 'This is a test title',
    tags: 'social',    
    content: 'This is the test content'    
  },
  {
    id: 3,
    name: 'Social Network Test 3',
    isRunning: false,
    title: 'This is a test title',
    tags: 'social',    
    content: 'This is the test content'    
  }

	]
});

export default Snprojectview;