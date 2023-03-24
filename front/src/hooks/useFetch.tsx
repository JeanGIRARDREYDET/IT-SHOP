import { useState, useEffect } from 'react'
import { IProduct } from '../types/product'
type IReturn<T> = {
  data: T | null,
  error: any,
  loading: boolean
}

async function useFetch<T>(uri: string, requestOptions = {}):Promise<IReturn<any>> {
  const [data, setData] = useState<T | null>()
  const [error, setError] = useState<any>({})
  const [loading,setLoading] = useState(false)
  // const url = `http://localhost:3000/api/${uri}`
  console.log(uri)
  useEffect(() => {
    
    console.log(uri)
      setLoading(true)

        fetch(uri, requestOptions)
        .then(response => response.json())
        .then(setData)
        .catch(setError)
        .finally(() => {
          console.log(data)
          setLoading(false)
        });
      
      
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
