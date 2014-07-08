/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

 app.import('vendor/ic-ajax/dist/named-amd/main.js', {
   'ic-ajax': [
     'default',
     'defineFixture',
     'lookupFixture',
     'raw',
     'request',
   ]
 });

app.import('vendor/ember-model/ember-model.js')
app.import('vendor/bootstrap/dist/js/bootstrap.js');
app.import('vendor/bootstrap/dist/css/bootstrap.css');

		// <!-- END PLUGIN CSS -->

        // <!-- BEGIN CORE CSS FRAMEWORK -->

 app.import('vendor/font-awesome/css/font-awesome.css');
 app.import('vendor/font-awesome/fonts/fontawesome-webfont.woff');
 app.import('vendor/font-awesome/fonts/fontawesome-webfont.svg');
 app.import('vendor/animate.css/animate.min.css');
app.import('vendor/select2/select2.js');
//app.import('vendor/select2/select2-bootstrap.css');
        // <!-- END CORE CSS FRAMEWORK -->

        // <!-- BEGIN CSS TEMPLATE -->
 // app.import('vendor/assets/css/style.css');
 // app.import('vendor/assets/css/responsive.css');
 // app.import('vendor/assets/css/custom-icon-set.css');
		// <!-- END CSS TEMPLATE -->
 
module.exports = app.toTree();
