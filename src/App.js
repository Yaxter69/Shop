import React from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Shop } from './components/Shop';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Header />
        <Shop />
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;
