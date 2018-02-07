import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import SingleLine from '../../src/component/table/AdditValue/SingleLine';
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




describe('SingleLine', () => {
    const mockFn = jest.fn();
    it('should be defined', () => {
        expect(SingleLine).toBeDefined();
    });
     it('should render correctly', () => {
        const tree = shallow(
            <Provider store={store}>
                <SingleLine lineId={8} handleClick={mockFn} />
            </Provider>
        );
        expect(tree).toMatchSnapshot();
     });
    it('should have a button value', () => {
        const wrapper = shallow(   <Provider store={store}>
            <SingleLine lineId={8} name='button test' handleClick={mockFn} />
        </Provider>);
        expect(wrapper.props().name).toEqual('button test');
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