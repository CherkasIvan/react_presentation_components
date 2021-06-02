import {useSelector, useDispatch} from 'react-redux'
import {counterActionTypes} from './redux/counterSlice'

function Counter() {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    const incrementHandler = () => dispatch(counterActionTypes.increment());

    const decrementHandler = () => dispatch(counterActionTypes.decrement());

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={incrementHandler}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={decrementHandler}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}

export default Counter;