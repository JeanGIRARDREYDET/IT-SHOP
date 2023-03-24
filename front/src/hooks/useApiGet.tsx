import { useState, useEffect } from 'react';

export type TApiResponse = {
  status: Number;
  statusText: String;
  data: any;
  error: any;
  loading: Boolean;
};

export const useApiGet = (url: string): TApiResponse => {
  const [status, setStatus] = useState<Number>(0);
  const [statusText, setStatusText] = useState<String>('');
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  console.log ("17 useApiGet : "+url);

  useEffect(() => {
    const getAPIData = async () => {
      console.log("19 useApiGet : " + url);
  
      setLoading(true);
  
      try {
        console.log("25 useApiGet : " + url);
        const apiResponse = await fetch(url);
        const json = await apiResponse.json();
        setStatus(apiResponse.status);
        setStatusText(apiResponse.statusText);
        setData(json);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    getAPIData();
  }, [url]); // <- Changement ici, j'ai enlevé `data` de la liste des dépendances

  return { status, statusText, data, error, loading };
};

export default useApiGet