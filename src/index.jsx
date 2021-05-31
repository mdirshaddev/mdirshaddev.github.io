import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@store/store'


import App from './App'

/**
 * 
 * CSS import index.css
 * 
**/
import '@css/index.css'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

if(module.hot){
  module.hot.accept()
}