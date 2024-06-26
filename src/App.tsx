import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-col items-center space-y-4 border border-gray-400 rounded-md bg-slate-50 p-5">
        <h1 className="text-3xl text-center font-semibold mx-3 w-full border border-black rounded-md px-2">
          {count}
        </h1>
        <div className="flex items-center gap-2">
          <button
            onClick={() => dispatch(incrementByAmount({ value: 5 }))}
            className="px-3 py-2 bg-blue-500 rounded-md text-xl text-white font-semibold"
          >
            +5
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="px-3 py-2 bg-green-500 rounded-md text-xl text-white font-semibold"
          >
            +1
          </button>

          <button
            onClick={() => dispatch(decrement())}
            className="px-3 py-2 bg-red-500 rounded-md text-xl text-white font-semibold"
          >
            -1
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
