import { queryStringToObject } from '../src/router.js';

describe('queryStringToObject', () => {
  it('returns new object', () => {
    const queryStringChat = queryStringToObject("/chat");
    expect(queryStringChat).toStrictEqual('www.localhost3000/chat');
  })
})