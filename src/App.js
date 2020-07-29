import React from 'react';
import {useMediaQuery} from 'react-responsive';
import './css/App.css';
import Hamburger from './components/nav-bar/Hamburger';
import LandingPagePC from './components/LandingPagePC';

function App() {

  const isMobileOrPC = useMediaQuery(
    {
      minDeviceWidth: "1224px"
    }
  );

  return (
    <div className="App">
      {
        isMobileOrPC ?
          <React.Fragment>
            <LandingPagePC />
          </React.Fragment>
          :
          <React.Fragment>
            <Hamburger />

          </React.Fragment>
      }
    </div>
  );
}

export default App;
