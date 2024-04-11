/* eslint-disable */
import { communicateWithOpenAI } from "../src/lib/openAIApi.js";

describe("communicateWithOpenIA", () => {
    test("communicateWithOpenAI debería enviar una solicitud a la API de OpenAI y devolver los datos exitosamente", async () => {
        const respuesta = {
            choices: [
                {
                    message: {
                        content: "Soy una respuesta"
                    }
                }
            ]
        };

        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve(respuesta)
        }));

        const data = await communicateWithOpenAI("Este es un msj", {
            input: "pelicula"
        });

        expect(typeof(data)).toEqual('object');
    });
});