"use client";
import { useEffect, useState } from 'react';

function useCurrentCurrency() {

    const [currentCurrency , setCurrentCurrency] = useState<string>('LKR')
    const [rate , setRate] = useState<number>(1)

    const fetchUserGeoLocation = async () => {

        let currencyStr = localStorage.getItem('currency')

        if(currencyStr == null){
            try{
                const response = await fetch('http://ip-api.com/json');
                const data = await response.json();
        
                if (data.error) {
                    console.log(data.error);
                } else {
                    console.log(data)
    
                    if(data.countryCode !== 'LK'){
                        const responseRates = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/lkr.json')
                        const data2 = await responseRates.json()
                        console.log(data2.lkr.usd);
                        setRate(data2.lkr.usd)
                        setCurrentCurrency('USD')
                        localStorage.setItem('currency' , 'USD')
                    }else{
                        setRate(1)
                        setCurrentCurrency('LKR')
                        localStorage.setItem('currency' , 'LKR')
                    }
    
                }
            }catch(err){
                console.log(err)
            }

        }else{

            if(currencyStr !== 'LKR'){
                const responseRates = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/lkr.json')
                const data2 = await responseRates.json()
                console.log(data2.lkr.usd);
                setRate(data2.lkr.usd)
                setCurrentCurrency('USD')
                localStorage.setItem('currency' , 'USD')
            }else{
                setCurrentCurrency('LKR')
                localStorage.setItem('currency' , 'LKR')
            }
        }

    }

    const setCurrentCurrencyState = async (currencyString:string) => {
        
        if(currencyString !== 'LKR'){
            const responseRates = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/lkr.json')
            const data2 = await responseRates.json()
            console.log(data2.lkr.usd);
            setRate(data2.lkr.usd)
            setCurrentCurrency('USD')
            localStorage.setItem('currency' , 'USD')
        }else{
            setRate(1)
            setCurrentCurrency('LKR')
            localStorage.setItem('currency' , 'LKR')
        }

        window.location.reload();

    }

    useEffect(() => {
        fetchUserGeoLocation();
    } , [])

    return {currentCurrency , rate , setCurrentCurrencyState };
}

export default useCurrentCurrency;