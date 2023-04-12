import React from 'react';
import { useRouteError } from 'react-router-dom';
import Header from '../Header/Header';
import './ErrorPage.css'
const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
    <Header></Header>
     <div id="error-page">
     <h1>404</h1>
      {/* <p>Sorry, an unexpected error has occurred.</p> */}
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
     </div>
    </div>
  );
};

export default ErrorPage;