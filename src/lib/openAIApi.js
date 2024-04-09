// Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from './apiKey.js';
/*export const communicateWithOpenAI = (messages) => {
/Aquí es donde debes implementar la petición con fetch o axios
}; */

export const communicateWithOpenAI=  (pelicula, input) =>{
   const apiKey = getApiKey ();
   const apiUrl = "https://api.openai.com/v1/chat/completions";
 
   
   const fetchpromiseresult =  fetch(apiUrl, {
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
               content: `Tu eres una película de Pixar ${pelicula} y debes comportarte amigable,
               educativo, debes responder en primera persona con respuestas cortas.`
             },
             {
               role: "user",
               content: input,
             },
         ],
      }),
   });
    return fetchpromiseresult.then((result)=> {

      const formatedpromiseresult = result.json();
      return formatedpromiseresult
      //console.log (formatedresult);
      
        // console.log (jsobject);
        
      })
      
      
   }


