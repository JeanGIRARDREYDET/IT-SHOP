import { useState, useEffect } from 'react'
import { IProduct } from '../types/product'

const useFetch = async (uri: string) => {
  const [fetchData, setFetchData] = useState<IProduct[] | IProduct | null>(null)
  const [error, setError] = useState()
  useEffect(() => {
    // declare the data fetching function
    const url = `http://localhost:3000/api/${uri}`
    console.log(url)
    const fetchData = async () => {
      const data = await fetch(url);
      setFetchData(await data.json()) ;
    }
  
    // call the function
       fetchData()
   
      // make sure to catch any error
      .catch( (err)=>setError(err) );
      
  }, [])
return{
  data: fetchData,error

}
  
}
export default useFetch
