// Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from './apiKey.js';
/*export const communicateWithOpenAI = (messages) => {
/Aquí es donde debes implementar la petición con fetch o axios
}; */
export const communicateWithOpenAI= (pelicula, input) =>{
   const apiKey = getApiKey();
   console.log(apiKey);
   return fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         "Authorization": "Bearer " + apiKey,
      },
      body: JSON.stringify({
         model: "gpt-3.5-turbo",
         messages: [
            {
               role:"system",
               content: `Tu eres una película de Pixar ${pelicula} y debes comportarte amigable, divertido,
               educativo, con valores, puedes compartir tus facts mas destacados y debes responder en primera persona.`
             },
             {
               role: "user",
               content: input,
             },
         ],
      }),
   })
   .then((result) =>{
      return result.json();
   })
   .then((datafech)=>{
      console.log(datafech);
      return datafech;
   })
   .catch(error=>{
   console.log(error);
   })
};