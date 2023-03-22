import { useState, useEffect } from 'react'
const useFetch = async () => {
  const url = ''
  await fetch(url)
  return {
    data: [],
    error: {msg: ''}
  }
}