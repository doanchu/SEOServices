import Ember from 'ember';
import DS from 'ember-data';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

DS.ArrayTransform = DS.Transform.extend({
  deserialize: function(serialized) {
    return (Ember.typeOf(serialized) === "array") ? serialized : [];
  },

  serialize: function(deserialized) {
    var type = Ember.typeOf(deserialized);
    if (type === 'array') {
        return deserialized;
    } else if (type === 'string') {
        return deserialized.split(',').map(function(item) {
            return Ember.$.trim(item);
        });
    } else {
        return [];
    }
  }
});


var App = Ember.Application.extend({
  modulePrefix: 'beat-senuke-ember-cli', // TODO: loaded via config
  Resolver: Resolver
});


//App.ApplicationAdapter = DS.FixtureAdapter.extend();

loadInitializers(App, 'beat-senuke-ember-cli');

export default App;