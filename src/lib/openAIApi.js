// Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from './apiKey.js';

/*export const communicateWithOpenAI = (messages) => {
/Aquí es donde debes implementar la petición con fetch o axios
}; */

export const communicateWithOpenAI=  (pelicula, input) =>{
   const apiKey = getApiKey ();
   const apiUrl = "https://api.openai.com/v1/chat/completions";
 
   
   const responseIA =  fetch(apiUrl, {
      method: "POST",
      Headers: {
         "Content-Type": "application/json",
         "Authorization": `Bearer ${apiKey}`,
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
   });
   responseIA.then((result)=> {

      const formatedresult = result.json();
      console.log (formatedresult);
      formatedresult.then ((jsobject)=>{
         console.log (jsobject);
         return jsobject;
      })
      
      
   }) 
}; 

