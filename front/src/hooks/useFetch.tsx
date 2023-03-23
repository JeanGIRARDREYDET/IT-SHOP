import { useState, useEffect } from 'react'
import { IProduct } from '../types/product'
type IReturn<T> = {
  data: T | null,
  error: any,
  loading: boolean
}

async function useFetch<T>(uri: string, method='GET', payload ={}):Promise<IReturn<any>> {
  const [data, setData] = useState<T | null>({})
  const [error, setError] = useState<any>({})
  const [loading,setLoading] = useState(false)
  // const url = `http://localhost:3000/api/${uri}`
  console.log(uri)
  useEffect(() => {
    
    console.log(uri)
      setLoading(true)
      if(method === 'GET'){
        fetch(uri)
        .then(response => response.json())
        .then(setData)
        .catch(setError)
        .finally(() => {
          console.log(data)
          setLoading(false)
        });
      } else if (method === 'POST') {
        const fetchOptions =  {
                    method: 'POST',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                  }
        fetch(uri, fetchOptions)
        .then(response => response.json())
        .then(setData)
        .catch(setError)
        .finally(() => {
          console.log(data)
          setLoading(false)
        })
      }
  }, [])
  return (
    {
      data,
      error,
      loading
    }
  )
  
}
export default useFetch
