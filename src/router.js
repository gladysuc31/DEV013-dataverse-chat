let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
    // assign rootEl
    let rootEl = el;
    return rootEl;
  };
  
  export const setRoutes = (routes) => {
    // optional Throw errors if routes isn't an object
    // optional Throw errors if routes doesn't define an /error route
    // assign ROUTES
    if (routes != {}) {
        throw new Error('routes is not an object');
    };
    if (routes != "/error404") {
        throw new Error('routes is not an /error route');
    };
    let ROUTES = routes;
    return ROUTES;
  };
  
  const queryStringToObject = (queryString) => {
    // convert query string to URLSearchParams
    let queryString = window.location.search;
    let params = new URLSearchParams(queryString);
    // convert URLSearchParams to an object
    return Object.fromEntries(params.entries());
    // return the object
  };
  
  const renderView = (pathname, props={}) => {
    // clear the root element
    const rootEl = "";
    // find the correct view in ROUTES for the pathname
    // in case not found render the error view
    // render the correct view passing the value of props
    // add the view element to the DOM root element
  } 
  
  export const navigateTo = (pathname, props={}) => {
    // update window history with pushState
    // render the view with the pathname and props
  }
  
  export const onURLChange = (location) => {
    // parse the location for the pathname and search params
    // convert the search params to an object
    // render the view with the pathname and object
  }