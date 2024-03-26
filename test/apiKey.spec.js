import { getApiKey, setApiKey } from '../src/lib/apiKey.js';
const testKey = "estaeslallave"
describe('getApiKey', () => {
  test('valor de API Key', () => {
      localStorage.setItem("llave", testKey);
      expect(getApiKey()).toBe('estaeslallave');
  });
});

describe('setApiKey', () => {

  it('debería almacenar una API Key', () => {
    setApiKey("estaeslallave");
    expect(localStorage.getItem(testKey)).toBe('estaeslallave');
  });
});
