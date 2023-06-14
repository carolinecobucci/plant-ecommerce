import React from 'react';

function useFetch(id) {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3000/plants/${id}`);
        if (!response.ok) throw new Error('Erro ao fazer a requisição');
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError('Houve um erro ao solicitar os dados');
      }

      setLoading(false);
    };
    fetchData();
  }, [id]);

  return { data, error };
}

export default useFetch;
