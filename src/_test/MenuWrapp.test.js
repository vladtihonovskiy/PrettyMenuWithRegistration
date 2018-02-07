import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import MenuWrapp from '../../src/component/Menu_Conponent/MenuWrapp';
import { Provider } from 'react-redux';
import reducer from '../../src/redusers/index';
import {createStore,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../../src/sagas'
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga);




describe('MenuWrapp', () => {
    const mockFn = jest.fn();
    it('should be defined', () => {
        expect(MenuWrapp).toBeDefined();
    });
    it('should render correctly', () => {
        const tree = shallow(
            <Provider store={store}>
                <MenuWrapp MassiveAllMenuItems={['Home', 'About', 'Contact','Product','Logout'] }/>
            </Provider>
        );
        expect(tree).toMatchSnapshot();
    });
    it('should have a button value', () => {
        const wrapper = shallow(   <Provider store={store}>
            <MenuWrapp MassiveAllMenuItems={['Home', 'About', 'Contact','Product','Logout'] } name='button test' handleClick={mockFn} />
        </Provider>);
        // expect(wrapper.props().name).toEqual('button test');
        // expect(tree.find('.button').node.props.value).toEqual('button test');
    });
    // it('should have a click function', () => {
    //     const tree = shallow(
    //         <SingleLine name='button test' handleClick={mockFn} />
    //     );
    //     tree.simulate('click');
    //     expect(mockFn).toHaveBeenCalled();
    // });
});