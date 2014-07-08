import Ember from 'ember';
import Testchildmodel from 'beat-senuke-ember-cli/models/testchildmodel';
export default Ember.Route.extend({
	model: function(params) {
		return Testchildmodel.find(params.testroute_id);		
	}
});
