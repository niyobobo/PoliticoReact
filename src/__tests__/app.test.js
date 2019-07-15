import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from '../App';
import Index from '../index'

const initialState = {
  user: {
    user: {},
  },
};
const mockStore = configureMockStore([thunk]);
const store = mockStore(initialState);

describe('App component', ()=>{
  test ('Should Render the component', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>, div)
    ReactDOM.unmountComponentAtNode(div);
  });

  test('Index should render without crashing', ()=> {
    expect(JSON.stringify(Object.assign({}, Index, {
      _reactInternalInstance: 'censored'
    }))).toMatchSnapshot();
  });
});