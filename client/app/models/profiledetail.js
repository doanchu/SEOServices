import DS from 'ember-data';


var Profiledetail = DS.Model.extend({
  site: DS.attr('string'),
  username: DS.attr('string'),
  password: DS.attr('string'),
  email: DS.attr('string'),
  accountprofile: DS.belongsTo('accountprofile')
});

Profiledetail.reopenclass({
	FIXTURES: [
  {
    id: 1,
    site: 'wordpress.com',
    username: 'tranvana',
    password: 'abcd1234',
    email: 'tranvana@hotmail.com'
  },
  {
    id: 2,
    site: 'blog.com',
    username: 'tranvana1',
    password: 'abcd1234',
    email: 'tranvana@hotmail.com'
  },
  {
    id: 3,
    site: 'tumblr.com',
    username: 'tranvana',
    password: 'abcd1234',
    email: 'tranvana@hotmail.com'
  }
]
});

export default Profiledetail;