export const environment = {
  production: true
};

export let APIURL = '';

switch (window.location.hostname) {
    case 'chix-waffle-client.herokuapp.com':
        APIURL = 'https://chix-waffle-server.herokuapp.com';
        break;
    default:
        APIURL = 'http://localhost:4000';
}
