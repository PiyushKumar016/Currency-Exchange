import { useCallback, useState, useEffect } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(5);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);

  const getRandom = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllow){
      str += "0123456789";
    }

    if (charAllow){
      str += "!@#$%^&*()[]{}?`~";
    }

    for (let i = 0; i < length; i++) {
      let pos = Math.floor(Math.random() * str.length);
      pass += str.charAt(pos);
    }

    setPassword(pass);
  }, [length, numAllow, charAllow]);

  useEffect(() => {
    getRandom();
  }, [length, numAllow, charAllow, getRandom]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-100 p-8 space-y-6">
        <h1 className="text-2xl font-semibold text-gray-800 text-center tracking-tight">
          Password Generator
        </h1>
        <div className="flex gap-3">
          <input
            type="text"
            value={password}
            readOnly
            className="flex-1 px-4 py-3 rounded-lg bg-gray-100 text-gray-700 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
          />
          <button className="px-4 py-3 rounded-lg bg-gray-900 text-white shadow-sm hover:shadow-md hover:bg-gray-800 transition-all duration-200">
            Copy
          </button>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Length</span>
            <span className="font-medium text-gray-800">{length}</span>
          </div>
          <input
            type="range"
            min="4"
            max="100"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-gray-800"
          />
        </div>
        <div className="flex justify-between text-sm text-gray-700">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={numAllow}
              onChange={() => setNumAllow(prev => !prev)}
              className="accent-gray-800"
            />
            Numbers
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={charAllow}
              onChange={() => setCharAllow(prev => !prev)}
              className="accent-gray-800"
            />
            Special Characters
          </label>
        </div>
        <button
          onClick={getRandom}
          className="w-full py-3 rounded-lg bg-gray-900 text-white shadow-sm hover:shadow-md hover:bg-gray-800 transition-all duration-200 font-medium"
        >
          Generate Password
        </button>

      </div>
    </div>
  );
}

export default App;