// var react = require('react');
// console.log(react.version);
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Hello from './components/Hello';
// import { AppContainer} from 'react-hot-loader';
// import './index.less';
// ReactDOM.render(
//     <AppContainer>
//       <Hello/>
//     </AppContainer>,
//     document.getElementById('root')
// )
// if (module.hot) {
//     module.hot.accept('./components/Hello', () => {
//         const NewHello = require('./components/Hello').default;
//         ReactDOM.render(
//             <AppContainer>
//               <NewHello/>
//             </AppContainer>,
//             document.getElementById('root')
//         )
//     })
// }
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import { AppContainer} from 'react-hot-loader';
import './index.less';
ReactDOM.render(
    <AppContainer>
      <Root/>
    </AppContainer>,
    document.getElementById('root')
)
if (module.hot) {
    module.hot.accept('./root', () => {
        const NewRoot = require('./root').default;
        ReactDOM.render(
            <AppContainer>
              <NewRoot/>
            </AppContainer>,
            document.getElementById('root')
        )
    })
}