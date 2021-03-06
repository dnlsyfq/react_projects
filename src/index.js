import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { render } from '@testing-library/react';

// component 1

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//-----------------------------

// class 

// class MyComponent extends Component {
//   render(){
//     return (
//       <section>
//         <h1>My Component</h1>
//         <p>Content in my component</p>
//       </section>
//     );
//   }
// }


// ReactDOM.render(
//     <MyComponent />,
//     document.getElementById('root')
//   );

//-----------------------------

ReactDOM.render(
  <h1>Sherlock Holmes</h1>,
  document.getElementById('root')
);

ReactDOM.render(
  <h1>Batman</h1>,
  document.getElementById('container')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
