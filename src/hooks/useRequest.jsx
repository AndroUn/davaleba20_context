import { useState } from "react";

const API_KEY = 'msD8JD00dEenCOutidLhJhTR-GrsUWCb71PO2L5jZEOG6hSuOw';

const useRequest = ({url, method}) => {
    const [loading, setLoading] = useState(false)

    const sendRequest = async (body, custom) => {
        setLoading(true)
        const res = await fetch(url || custom, {
            method,
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${API_KEY}`
              },
            body: !!body && method !== 'GET' ? JSON.stringify(body) : undefined
        })

        const data = await res.json()
        setLoading(false)

        return data
    }


    return [sendRequest, loading]
}

export default useRequest