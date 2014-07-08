import Ember from 'ember';

var TestChildModel = Ember.Model.extend({

});

TestChildModel.url = "/rest/testmodel";

TestChildModel.adapter = Ember.RESTAdapter.create(); 

export default TestChildModel;
