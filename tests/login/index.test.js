import test from 'ava'
import login from '../../src/login/index.js'

const testOptions = {
  domain: 'mydomain.com',
  client_id: 'clientId123',
  redirect_uri: 'http://localhost:1234/callback.html',
  scope: 'openid%20profile',
  state: 'state123',
  nonce: 'nonce123'
}

test('create authentication URL', t => {
  const expectedResponse = {
    url:
      'https://mydomain.com/authorize?response_type=id_token%20token&client_id=clientId123&redirect_uri=http://localhost:1234/callback.html&scope=openid%20profile&nonce=nonce123&state=state123',
    validation: {
      state: 'state123',
      nonce: 'nonce123'
    }
  }

  const loginResponse = login(testOptions)
  t.deepEqual(loginResponse, expectedResponse)
})
