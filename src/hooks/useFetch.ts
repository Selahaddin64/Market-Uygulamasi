import {useEffect, useState} from 'react';
import axios from 'axios';

const useFetch = (Url: any) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(Url);
      setData(response.data);
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return {data, loading};
};

export default useFetch;