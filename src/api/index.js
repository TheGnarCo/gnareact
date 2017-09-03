import Schlepp from 'schlepp';

import constants from 'constants';
import sessionMethods from 'api/sessions';

class Api extends Schlepp {
  constructor(options) {
    super(options);

    this.sessions = sessionMethods(this);
  }
}

export default new Api({
  host: constants.API_HOST,
  bearerTokenKeyInLocalStorage: `${constants.APP_NAME}::auth_token`,
});
