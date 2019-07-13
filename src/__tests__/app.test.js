import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Index from '../index'

describe('App component', ()=>{
  test ('Should Render the component', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div)
    ReactDOM.unmountComponentAtNode(div);
  });

  test('Index should render without crashing', ()=> {
    expect(JSON.stringify(Object.assign({}, Index, {
      _reactInternalInstance: 'censored'
    }))).toMatchSnapshot();
  });
});