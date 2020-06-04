import React from 'react'
import { Homepage, AppHeader } from './Components';
import { Route, Switch } from 'react-router-dom';

/**
 * Route-
 *
 * path: relative url / means localhost or base URL
 * exact means that path must be exactly /
 * component is the component we want to render
 * with the exact as long as the path matches it will render the component i.e. all the components
 * which have / in their path which be rendered.
 *
 * Switch-
 *
 * Makes sure only one component is rendered from all the routes if more than one matches.
 *
 */

const HatsPage = (props) => {
  console.log(props);
  return (
    <h1 style={{ marginTop: '10%' }}>HATS</h1 >
  )
}


const App = () => {
  return (
    <>
      <AppHeader />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/hats" component={HatsPage} />
    </>
  )
};

export default App;
