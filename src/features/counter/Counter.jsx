import { increment, decrement, reset} from "./counterSlice";
import { useDispatch, useSelector } from "react-redux";


const Counter = ()=>{
    // const [count, setCount] = useState(0);
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div  className="flex flex-col items-center gap-10 p-12">
           
            
            <div className="flex gap-12 ">
                <button className="font-bold text-white rounded-lg bg-green-600 font-semibold py-2 px-8" onClick={()=> dispatch(increment())}>+</button>
          <h1 className="font-bold">count : {count}</h1>
                <button className="font-bold text-white rounded-lg bg-red-600 font-semibold py-2 px-8" onClick={()=> dispatch(decrement())}>-</button>
                
            </div>
            
            <button className="font-bold text-white rounded-lg bg-red-600 font-semibold py-2 px-8" onClick={() => dispatch(reset())}>reset</button>
        </div>
    )
}
export default Counter;