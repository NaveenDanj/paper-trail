'use client'

import useCurrentCurrency from "@/hooks/currentCurreny"
import { useEffect, useState } from "react"

export default function TopSection() {

    const { setCurrentCurrencyState } = useCurrentCurrency()
    const [currencyState, setCurrencyState] = useState('')

    useEffect(() => {
        const currencyString = localStorage.getItem('currency')
        if (currencyString == null) {
            setCurrencyState('LKR')
        } else {
            setCurrencyState(currencyString)
        }

    }, [])

    const handleChangeCurrency = (cString: string) => {
        setCurrentCurrencyState(cString)
    }


    return (
        <div className="text-white p-2 bg-black flex w-full justify-end text-center px-5 lg:px-24">
            {/* <label className="text-sm">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</label> */}
            <select value={currencyState} onChange={(e) => handleChangeCurrency(e.target.value)} className="text-sm text-black rounded-md">
                <option value={'USD'}>USD</option>
                <option value={'LKR'} selected>LKR</option>
            </select>
        </div>
    )
}