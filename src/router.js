let ROUTES = {};
let rootEl = "";

export const setRootEl = (el) => {
// assign rootEl
  rootEl = el;
};

export const setRoutes = (routes) => {
	ROUTES = routes;
};

const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams
  const params = new URLSearchParams(queryString);
  // convert URLSearchParams to an object
  return Object.fromEntries(params.entries());
  // return the object
};

const renderView = (pathname, props = {}) => {
  // clear the root element
  const newRoot = rootEl;
  newRoot.innerHTML = "";
  // find the correct view in ROUTES for the pathname
  const view = ROUTES[pathname];
  if (view) {
    // render the correct view passing the value of props
    const viewElement = view(props);
    // add the view element to the DOM root element
    newRoot.appendChild(viewElement);
  } 
  else {
    // in case not found render the error view
    newRoot.appendChild(ROUTES["/error404"]());
  }
};

export const navigateTo = (pathname, props = {}) => {
  // update window history with pushState
	history.pushState({}, "", pathname);
	// separar con ?
	const separatedURL = pathname.split('?');
	// declarar pathname
	pathname = separatedURL[0];
	// declarar props
	props = separatedURL[1];
	const objectProps = queryStringToObject(props);
  // render the view with the pathname and props
  renderView(pathname, objectProps);
};

export const onURLChange = (location) => {
  // parse the location for the pathname and search params
  const pathname = location.pathname;
  const searchParams = location.search;
  // convert the search params to an object
  const newSearchObject = queryStringToObject(searchParams);
  // render the view with the pathname and object
  return renderView(pathname, newSearchObject);
};