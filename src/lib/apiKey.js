export const getApiKey = () => {
    return localStorage.getItem("llave");
 };
 
 export const setApiKey = (apiKey) => {
   return localStorage.setItem("llave", apiKey);
 };