import { useState, useEffect } from 'react'
import { IProduct } from '../types/product'

const useFetch = async (uri: string) => {
  const [fetchData, setFetchData] = useState<IProduct[] | IProduct | null>(null)
  const fetchingData = async () => {
    const url = `http://localhost:3000/api/${uri}`
    const res = await fetch(url).then(res => res.json().then(data => data )).catch(err => err)
    return res
  } 
  useEffect( async () =>{

    const res = await fetchingData()
    setFetchData(res)
  }, [])
  return {
    data: fetchData,
    error: {msg: ''}
  }
}
export default useFetch
