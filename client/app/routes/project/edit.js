import Ember from 'ember';
var objs = {
    "1": {
        id: 1,
        name: 'Social Network Test 1',
        isRunning: false,
        title: 'This is a test title',
        tags: 'social',    
        keyword: 'student',    
        content: 'This is the test content',
        module: "SN",
        campaign_id: 1,
        sites: [
        {
            id: 3,
            name: "wordpres.com",
            status: "successful",
            checked: false,
            module: 'SN',
            pr: 8
        },
        {
            id: 4,
            name: "livejournal1.com",
            status: "failed",
            checked: false,
            module: 'SB',
            pr: 3
        }
        ]
    }    
};
export default Ember.Route.extend({
    model: function(params) {
		//var obj = this.store.find("project", params.project_id);		
        return objs[params.project_id];
    },
    setupController: function(controller, model) {    
      if (model.module === "SN") {
         this.controllerFor("snprojectedit").set("model", model);
     }
    },
    renderTemplate: function() {
        var model = this.modelFor(this.routeName);
        if (model.module === "SN") {
            this.render("snprojectedit", {controller: this.controllerFor("snprojectedit")});
        }
    }

});
