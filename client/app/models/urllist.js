import DS from 'ember-data';

var Urllist = DS.Model.extend({
  name: DS.attr('string'),
  campaign: DS.belongsTo('campaign'),
  count: DS.attr('number'),
  urldetails: DS.hasMany('urldetail',{async: true})
});

Urllist.reopenclass({
FIXTURES: [
  {
    id: 1,
    name: 'U 01',
    count: 3,
    urldetails: [1],
    campaign: 1
  },
  {
    id: 2,
    name: 'U 02',
    count: 4,
    urldetails: [2],
    campaign: 2
  },
  {
    id: 3,
    name: 'U 03',
    count: 1,
    urldetails: [3,4],
    campaign: 3
  },
  {
    id: 4,
    name: 'U 04',
    count: 1,
    urldetails: [5],
    campaign: 3
  }
]
});

export default Urllist;
