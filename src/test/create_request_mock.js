import nock from 'nock';

const createRequestMock = ({ bearerToken, host, method, params, path, responseStatus = 200, response }) => {
  const reqheaders = { Authorization: `Bearer ${bearerToken}` };
  const req = bearerToken ? nock(host, { reqheaders }) : nock(host);

  if (params) {
    return req[method](path, JSON.stringify(params))
      .reply(responseStatus, response);
  }

  if (responseStatus >= 300) {
    return req[method](path)
      .replyWithError(response);
  }

  return req[method](path)
    .reply(responseStatus, response);
};

export default createRequestMock;
