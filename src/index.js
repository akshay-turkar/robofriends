import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';


ReactDOM.render(<App />, document.getElementById('root')
);


reportWebVitals();
//we used div because we and use only single component
//we can add as much as card component inside div