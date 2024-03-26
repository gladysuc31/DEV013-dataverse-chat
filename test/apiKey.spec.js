import { getApiKey, setApiKey } from '../src/lib/apiKey.js';
const testKey = "estaeslallave"
describe('getApiKey', () => {
  test('valor de API Key', () => {
      localStorage.setItem("llave", testKey);
      expect(getApiKey()).toBe(testKey); // ''
  });
});

describe('setApiKey', () => {

  it('debería establecer correctamente la API Key', () => {
    setApiKey(testKey);
    expect(localStorage.getItem("llave")).toBe(testKey);
    expect(localStorage.getItem("llave")).not.toBe('perrito') //.not 
    
  });
});
