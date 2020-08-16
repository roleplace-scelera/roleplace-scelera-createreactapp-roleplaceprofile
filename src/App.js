import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            This is CreateReactApp for Roleplace Profiles! To get started run: <br/>
            <code>
              git clone https://github.com/roleplace-scelera/createreactapp-roleplaceprofile.git <br/>
              yarn install <br/>
              yarn start <br/>
            </code>
            To get your profile code, at any time, you can run: <br/>
            <code>
              yarn build <br/>
            </code>
            Copy the contents of build/index.html to your Roleplace profile. (It is minified).  <br/>
            That's it! Thank you for deciding to join us on Roleplace, and enjoy the node support! ;)
          </p>
          <a
              className="App-link"
              href="https://github.com/roleplace-scelera"
              target="_blank"
              rel="noopener noreferrer"
          >
            Check out our Roleplace Templates
          </a>
        </header>
      </div>
  );
}

export default App;
