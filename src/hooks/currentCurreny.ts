"use client";
import { useEffect, useState } from 'react';

function useCurrentCurrency() {

    const [currentCurrency , setCurrentCurrency] = useState<string>('LKR')
    const [rate , setRate] = useState<number>(0)

    const fetchUserGeoLocation = async () => {
        const response = await fetch('http://ip-api.com/json');
        const data = await response.json();

        if (data.error) {
            console.log(data.error);
        } else {
            console.log(data)
            const responseRates = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/lkr.json')
            const data2 = await responseRates.json()
            console.log(data2.lkr.usd);
            setRate(data2.lkr.usd)
        }
        
    }

    useEffect(() => {
        fetchUserGeoLocation();
    } , [])

    return {currentCurrency , rate };
}

export default useCurrentCurrency;