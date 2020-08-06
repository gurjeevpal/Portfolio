import React from 'react';
import './App.css';
import Header from './components/Header';
import HomeTabs from './components/HomeTabs';

import { faGetPocket } from '@fortawesome/free-brands-svg-icons';
import { Helmet } from 'react-helmet'

const TITLE = 'Porfolio'

function App() {
  return (
    
    <div className="app">
      <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
      <div className="app-header"> </div> 

      <HomeTabs />
   </div>
    

  );
}
export default App;