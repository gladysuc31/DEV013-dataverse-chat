import { getApiKey, setApiKey } from '../src/lib/apiKey.js';

describe('getApiKey', () => {

  test('valor de API Key', () => {
      const testKey = "estaeslallave"
      localStorage.setItem("llave", testKey);
      expect(getApiKey()).toBe('estaeslallave');
  });
});

describe('setApiKey', () => {

  it('debería establecer correctamente la API Key', () => {
   // Desarrolla el test correspondiente aquí
   expect(setApiKey()).toBe();
  });
});
