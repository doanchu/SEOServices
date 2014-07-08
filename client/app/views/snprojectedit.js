import Ember from 'ember';

export default Ember.View.extend({
  templateName: "snprojecteditview",
  didInsertElement: function() {
    Ember.$("#multi").select2();
        

  }  

});
