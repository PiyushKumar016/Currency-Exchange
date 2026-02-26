import React, { useEffect, useState } from 'react'

function CurrencyInfo(currency) {
  const [data, setData] = useState({});
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    fetch(`${baseURL}&currencies=&base_currency=${currency}`)
    .then(res => res.json())
    .then(res => setData(res.data))
  } , [currency])
  return data;
}

export default CurrencyInfo;
