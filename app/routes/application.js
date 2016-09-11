import Ember from 'ember';

export
default Ember.Route.extend({
    actions: {
//        logout: function() {
//            this.get('session').close('osf').then(() => {
//                this.transitionTo('index');
//            });
//
//            //this.transitionTo('logout');
//        },
//        login: function(username, password) {
//            let route = this;
//            let providerName = 'osf';
//
//            //the options to `this.get('torii').open(providerName, options)`
//            //will be passed to the provider's `open` method.
//            let options = {
//                username: username,
//                password: password
//            };
//
//            this.get('torii').open(providerName, options).then(function(authorization) {
//                debugger;
//                //authorization as returned by the provider
//                route.somethinWithToken(authorization.sessionToken);
//            });
//
//            //document.cookie = "redirectURL=" + window.location.href;
//            //this.transitionTo('login');
//        },
//        accessDenied() {
//            this.transitionTo('index');
//        },

        filter(params) {
            this.transitionTo('index', {
                queryParams: {
                    q: params
                }
            });
        },
        search(params) {
            this.transitionTo('search', {
                queryParams: {
                    q: params,
                    p: 1
                }
            });
        }
    }
});
