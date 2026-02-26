import { useCallback, useState, useEffect, useRef } from "react";
import CurrencyInfo from "./Hooks/CurrencyInfo";
import InputBox from "./components/InputBox";
import purpleBG from "./assets/purpleBG.jpg";
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [value, setValue] = useState(0);
  const [result, setResult] = useState(0);
  const currencyInfo = CurrencyInfo(from);
  const codes = Object.keys(currencyInfo);

  useEffect(() => {
    if (currencyInfo && currencyInfo[to]) {
      const rate = currencyInfo[to].value;
      setResult(amount * rate);
    }
  }, [to, from, amount, currencyInfo]);
  function swap() {
    const temp = from;
    setFrom(to);
    setTo(temp);
  }
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#1a0a1f] via-[#140d2e] to-[#090414]">
      <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-xl p-6 space-y-6 shadow-md">
        <h1 className="text-2xl font-semibold text-center text-purple-400">
          Currency Converter
        </h1>

        <InputBox
          block="From"
          amount={amount}
          onAmountChange={(newAmount) => {
            setAmount(newAmount);
          }}
          currencyOptions={codes}
          onCurrencyChange={(newCurr) => {
            setFrom(newCurr);
          }}
          isDisabled={false}
          curr={from}
        />

        <div className="flex justify-center">
          <button
            onClick={() => {
              swap();
            }}
            className="px-5 py-2 text-sm rounded-md bg-purple-600 hover:bg-purple-500 text-white transition"
          >
            Swap
          </button>
        </div>

        <InputBox
          block="To"
          amount={result}
          onAmountChange={(newAmount) => {
            setAmount(newAmount);
          }}
          currencyOptions={codes}
          onCurrencyChange={(newCurr) => {
            setTo(newCurr);
          }}
          isDisabled={true}
          curr={to}
        />
      </div>
    </div>
  );
}

export default App;
