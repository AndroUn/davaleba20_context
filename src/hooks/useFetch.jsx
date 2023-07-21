import { useEffect, useState, useCallback } from "react"


const API_KEY = 'msD8JD00dEenCOutidLhJhTR-GrsUWCb71PO2L5jZEOG6hSuOw'

const useFetch = ({url, method}) => {

    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const onFetch = useCallback(() => {
      setLoading(true)
      fetch(url, {
          method,
          headers: {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${API_KEY}`
          }
        })
        .then(res => {
          if(!res.ok) throw new Error("Response Failed")
          return res.json()
        })
        .then(data => setResponse(data))
        .catch(err => setError(err))
        .finally(() => setLoading(false))


        return  () => {
          setResponse(null)
          setError(null)
          setLoading(false)
        }
    },[url, method])
      
    useEffect(() => {
        onFetch()
    },[onFetch])

    return {response, error, loading, resendRequest: onFetch}
}


export default useFetch