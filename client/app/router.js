import Ember from 'ember';

var Router = Ember.Router.extend({
  location: BeatSenukeEmberCliENV.locationType
});

Router.map(function() {
	this.route('snprojectview', { path: '/snprojectview/:snprojectview_id'});
  this.route('project/edit', { path: '/project/:project_id/edit' });
  this.route('project/index', { path: '/project/:project_id' });

  
  this.route('snprojectedit', { path: '/snprojectedit/:snprojectedit_id'});
  this.route('campaigns');
  this.route('campaign', {path: '/campaign/:campaign_id'});
  this.route('accountprofile');
  this.route('urllist');
  this.route('profiledetail');
  this.route('campaign');
  this.route('TestRoute', { path: '/testroute/:testroute_id'});
});

export default Router;
