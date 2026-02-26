import React from "react";

function InputBox({
  block,
  amount = 0,
  onAmountChange,
  currencyOptions,
  onCurrencyChange,
  isDisabled = false,
  curr,
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-neutral-400">{block}</label>

      <input
        type="number"
        value={amount}
        disabled={isDisabled}
        onChange={(e) => {
          onAmountChange(Number(e.target.value));
        }}
        className="w-full px-3 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-1 focus:ring-purple-500"
      />

      <label className="text-xs text-neutral-500">Select Currency</label>

      <select
        name="currencyType"
        onChange={(e) => onCurrencyChange(e.target.value)}
        value={curr}
        className="w-full px-3 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:ring-1 focus:ring-purple-500"
      >
        {currencyOptions.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputBox;
