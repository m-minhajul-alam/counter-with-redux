function App() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex items-center border border-gray-400 rounded-md bg-slate-50 p-5">
        <button className="px-3 py-2 bg-green-500 rounded-md text-xl text-white font-semibold">
          Increment
        </button>
        <h1 className="text-3xl font-semibold mx-3">0</h1>
        <button className="px-3 py-2 bg-red-500 rounded-md text-xl text-white font-semibold">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
