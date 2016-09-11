import OAuth2 from 'torii/providers/oauth2-code';
import {configurable} from 'torii/configuration';

export default OAuth2.extend({
    // Create a new authorization.
    // When your code calls `this.get('torii').open('geocities', options)`,
    // the `options` will be passed to this provider's `open` method.

    name: 'osf-oauth2',
    baseUrl: configurable('baseUrl'),

    redirectUri: configurable('redirectUrl'),
    state: 'STATE',

    //response params that we expect to be returned
    responseParams: ['code'],

    fetch(data) {
        return data;
    }
});
