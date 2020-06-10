import React from 'react'
import { Homepage, AppHeader, ShopPage, UserAuth } from './Components';
import { Route } from 'react-router-dom';


const HatsPage = (props) => {
  console.log(props);
  return (
    <h1>HATS</h1 >
  )
}

const App = () => {
  return (
    <>
      <AppHeader />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/hats" component={HatsPage} />
      <Route exact path="/shop" component={ShopPage} />
      <Route exact path="/signin" component={UserAuth} />

    </>
  )
};

export default App;
