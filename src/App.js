import React from 'react';
import './App.css';
import logo from './logo.png';


//logo rengi: #470e0d
function App() {
  return (
      <div className="App">
          <header className="App-header" style={{}}>
              <img src={logo} className="App-logo" alt="logo"/>
              <h1 style={{alignSelf: 'center', flex: 1, color: 'white', marginLeft: -50}}>ŞU ANDA BAKIMDAYIZ</h1>
          </header>
          <main className="App-main">
              <img src={logo} style={{height: 400}} alt="logo"/>
              <h1 style={{alignSelf: 'center', flex: 1, color: '#470e0d'}}>EN KISA SÜREDE HİZMETİNİZE AÇILACAĞIZ</h1>

          </main>
      </div>
  );
}

export default App;