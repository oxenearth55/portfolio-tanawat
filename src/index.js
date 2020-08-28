import React from 'react';
import ReactDOM from 'react-dom';
import Paths from './Paths';
import './Style.css';

import'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

ReactDOM.render(
  <React.StrictMode>
    <Paths />
  </React.StrictMode>,

  document.getElementById('root')
);

