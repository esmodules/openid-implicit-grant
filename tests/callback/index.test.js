import test from 'ava'
import callback from '../../src/callback/index.js'

const testHashstring =
  'access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c&token_type=bearer&id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6ImExM2Y4MThjLTJjNDUtNDgzMy04OGJiLTBhYzM4NTQxYTM3NiIsImlhdCI6MTU5NDc5NTU4MywiZXhwIjoxNTk0Nzk5MjM2LCJub25jZSI6Im5vbmNlMTIzIn0.1HFOcsGkLseVLPHAAapYl6Rims6u3et9XeFRiWd6kuY&expires_in=3600&state=state123'

const accessToken = {
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  claims: {
    sub: '1234567890',
    name: 'John Doe',
    iat: 1516239022
  }
}

const idToken = {
  token:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6ImExM2Y4MThjLTJjNDUtNDgzMy04OGJiLTBhYzM4NTQxYTM3NiIsImlhdCI6MTU5NDc5NTU4MywiZXhwIjoxNTk0Nzk5MjM2LCJub25jZSI6Im5vbmNlMTIzIn0.1HFOcsGkLseVLPHAAapYl6Rims6u3et9XeFRiWd6kuY',
  claims: {
    sub: '1234567890',
    name: 'John Doe',
    admin: true,
    jti: 'a13f818c-2c45-4833-88bb-0ac38541a376',
    iat: 1594795583,
    exp: 1594799236,
    nonce: 'nonce123'
  }
}

const validation = {
  state: 'state123',
  nonce: 'nonce123'
}

test('validate hashstring', t => {
  const expectedResponse = {
    idToken,
    accessToken
  }

  const callbackResponse = callback(testHashstring, validation)
  t.deepEqual(callbackResponse, expectedResponse)
})
