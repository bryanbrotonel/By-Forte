import React, { useState, useReducer } from 'react';
import Routes from 'routes';
import { useLocation } from 'react-router-dom';

import { Fade } from 'reactstrap';

import { getEnabledCookies, setEnabledCookies } from './../..//helpers/cookieHelpers';

import { CookiesNotification } from './../../components/CookiesNotification';

import { NavBar } from 'components/Navbar';
import { Footer } from 'components/Footer';

import './styles.css';

function App() {
  let location = useLocation();
  const [hideFooter, setHideFooter] = useState(true);
    const [ignored, handleConfirmCookies] = useReducer(setEnabledCookies());

  React.useEffect(() => {
    let windowLocation = location.pathname;
    let nonFooterPages = ['', 'editorial'];

    setHideFooter(
      !nonFooterPages.includes(windowLocation.split('/')[1].toLocaleLowerCase())
    );
  }, [location]);

  return (
    <div id="app">
      <NavBar />
      <div id="body">
        <Routes />
      </div>
      {hideFooter && (
        <div id="Footer">
          <Footer />
        </div>
      )}
      {!getEnabledCookies() ? (
        <Fade in={!getEnabledCookies()} out={getEnabledCookies()}>
          <CookiesNotification
            handleConfirmCookies={handleConfirmCookies}
          />
        </Fade>
      ) : null}
    </div>
  );
}

export default App;
