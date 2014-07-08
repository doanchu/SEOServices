import DS from 'ember-data';

var Campaign = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  main: DS.belongsTo('main'),
  projects: DS.hasMany('project',{async:true}),
  accountprofiles: DS.hasMany('accountprofile',{async: true}),
  urllists: DS.hasMany('urllist', {async: true})
});

Campaign.reopenclass({
  FIXTURES: [
  {
    id: 1,
    name: 'Campaign 1',
    description: 'Campaign for maylocnuoc',
    projects: [1,2,3,4],
    accountprofiles: [1,2,3],
    urllists: [1]
  },
  {
    id: 2,
    name: 'Campaign Test 2',    
    description: 'Campaign for do go huong mac',
    projects: [1,2,3],
    accountprofiles: [2,3],
    urllists: [2]
  },
  {
    id: 3,
    name: 'Campaign Test 3',   
    description: 'Campaign for dien thoai di dong',
    projects: [1,3,4],
    accountprofiles: [1,3],
    urllists: [3,4]
  }
]
});

export default Campaign;