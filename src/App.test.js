import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

describe('crash test',()=>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

describe('start with count 0',()=>{
  it('count of 0', () => {
    const wrapper = shallow(<App></App>);
    const text = wrapper.find('p').text();
    expect(text).toEqual('Count: 0');
  });
})

describe('on button click',()=>{
  it('count increments to 1',()=>{
    const wrapper = shallow(<App />);
    const incrBtn = wrapper.find('button.increment');
    incrBtn.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('Count: 1');
   
  });

  it('decrements count by 1 when the decrement button is clicked', () => {
    const wrapper = shallow(<App />);
    const decrementBtn = wrapper.find('button.decrement');
    decrementBtn.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('Count: -1');
  });
})

it('matches the snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

