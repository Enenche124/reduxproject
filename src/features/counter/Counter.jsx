import { increment, decrement, reset} from "./counterSlice";
import { useDispatch, useSelector } from "react-redux";


const Counter = ()=>{
    // const [count, setCount] = useState(0);
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            
            <h1>count : {count}</h1>
            <div >
                <button onClick={()=> dispatch(increment())}>+</button>
                <button onClick={()=> dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(reset())}>reset</button>
            </div>
        </div>
    )
}
export default Counter;