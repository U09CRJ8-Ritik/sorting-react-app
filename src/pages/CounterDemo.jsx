import Button from '../components/Button';
import useCounter from '../hooks/use-counter';

const CounterDemo = ({ initialCount }) => {

    const { counter, increment } = useCounter(initialCount);

    return (
        <div>
            <h2>{counter}</h2>
            <Button onClick={increment}>
                Increment
            </Button>
        </div>
    )
}

export default CounterDemo
