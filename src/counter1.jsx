import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-cyan-400 to-blue-500">
      <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl p-6 shadow-2xl w-72 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-6 px-6 py-3 bg-white rounded-xl shadow-md w-40 text-center">
          Count: {count}
        </h2>
        <button
          className="bg-black text-white font-semibold px-6 py-3 rounded-xl w-40 hover:bg-gray-800 hover:scale-105 transition transform duration-300 shadow-lg"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default Counter;
