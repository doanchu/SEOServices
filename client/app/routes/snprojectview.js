import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
	 		var obj = this.store.find('snprojectview', params.snprojectview_id);
			return obj;
	}
});
