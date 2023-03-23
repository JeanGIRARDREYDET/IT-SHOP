import { useState, useEffect } from 'react'

const useFetch = async (uri: string) => {
  const url = `http://localhost:3000/api/${uri}`
  const res = await fetch(url);
  const result = res.json()
  return {
    data: result,
    error: {msg: ''}
  }
}
export default useFetch
