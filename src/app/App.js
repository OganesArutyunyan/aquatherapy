import './App.css';
import React from 'react';
import Header from '../header/Header';
import Main from '../main/Main';
import Services from '../services/Services';
import Blog from '../blog/Blog';
import Footer from '../footer/Footer';
import Format from '../format/Format';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {/*<Main />
        <Services /> */}
    
    { /*<Blog />
        <Format /> */}
        <Footer />
      </div>
    );
  }  
}

export default App;
