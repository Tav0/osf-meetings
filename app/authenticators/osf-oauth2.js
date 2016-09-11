import Ember from 'ember';
import ToriiAuthenticator from 'ember-simple-auth/authenticators/torii';

export default ToriiAuthenticator.extend({
    torii: Ember.inject.service('torii'),
    authenticate(options) {
        return this._super(options).then((data) => {
            //needs implementation for getting access_token through our backend
            //ajax call thus we need a simple endpoint for getting the token
            //and return us a session-id
            console.log(data);
            debugger;
        });
    }

});
