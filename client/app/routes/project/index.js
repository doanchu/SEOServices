import Ember from 'ember';
import Project from "beat-senuke-ember-cli/models/project";
export default Ember.Route.extend({
	model: function(params) {
		//var obj = this.store.find("project", params.project_id);		
		return Project.fetch(1);		
	},
	setupController: function(controller, model) {	
		var that = this;
		if (model && Ember.typeOf(model.then) === "function") {
			model.then(function(model) {
				if (model.get("module") === "SN") {
					that.controllerFor("snprojectview").set("model", model);	
				}
			})
		} else {
			if (model.get("module") === "SN") {
				this.controllerFor("snprojectview").set("model", model);		
			}
		}
			
	},
	renderTemplate: function() {
		//var model = this.modelFor(this.routeName);
		//if (model.module == "SN") {
			this.render("snprojectview", {controller: this.controllerFor("snprojectview")});
		//}
	}
});
