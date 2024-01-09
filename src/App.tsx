import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { decrement, increment } from "./redux/features/counter/counterSlice";

function App() {
  const count = useSelector((state: RootState) => state.counter.valeu);

  const dispatch = useDispatch();

  return (
    <>
      <h2 className="text-red-500 bg-black">Hello</h2>
      <div className="container mx-auto">
        <h1> counter {count}</h1>

        <button
          onClick={() => dispatch(increment())}
          className="rounded px-2 py-3 text-2xl border bg-red-300 font-semibold"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="rounded px-2 py-3 text-2xl border bg-red-300 font-semibold"
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
