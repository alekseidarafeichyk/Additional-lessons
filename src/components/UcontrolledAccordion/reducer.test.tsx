import {reducer, StateType, TOGGLE_COLLAPSED} from './reducer';

let startState: StateType;

beforeEach(() => {
    startState = {
        collapsed: false
    }
})

test('should change collapsed to the opposite value', () => {
    let action = {type: TOGGLE_COLLAPSED}
    let endState = reducer(startState,action)

    expect(endState.collapsed).toBeTruthy()
});0