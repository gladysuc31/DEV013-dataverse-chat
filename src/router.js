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
    const newRoot = rootEl;
    newRoot.innerHTML = "";
    // find the correct view in ROUTES for the pathname
    const view = ROUTES[pathname];
    if (view){
        // render the correct view passing the value of props
        const viewElement = view(props);
        // add the view element to the DOM root element
        newRoot.appendChild(viewElement);
    } else {
        // in case not found render the error view
        newRoot.appendChild(ROUTES["/error"]);
    }
  } 
  
  export const navigateTo = (pathname, props={}) => {
    // update window history with pushState
    history.pushState({},"",pathname);
    // render the view with the pathname and props
  }
  
  export const onURLChange = (location) => {
    // parse the location for the pathname and search params
    // convert the search params to an object
    // render the view with the pathname and object
  }