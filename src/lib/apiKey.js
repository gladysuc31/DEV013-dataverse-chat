export const getApiKey = () => {
    return localStorage.getItem("llave");
 };
 
 export const setApiKey = (apiKey) => {
    localStorage.setItem("llave", apiKey);
 };