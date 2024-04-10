import { communicateWithOpenAI } from "../src/lib/openAIApi";

describe("communicateWithOpenIA",() => {
    test ("communicateWuthOpenAI debería enviar una solicitud a la Api de OpenAI y devolver los datos exitosamente", fetch ()=>{
        const respuesta = {choices:[{message:{ content:`Soy una respuesta` }}];
        global.fetch = jest.fn (() => Promise.resolve ({(respuesta)})
    )
        const data = communicateWithOpenAI ("Este es un msj",{
            input:"pelicula"

        });
        expect (typeof(data)).toEqual ('object');
});
});