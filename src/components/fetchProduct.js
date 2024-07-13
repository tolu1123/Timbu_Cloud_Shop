import { useState, useEffect } from 'react';

function useData(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
      if (url) {
        let ignore = false;
        fetch(url)
          .then(response => response.json())
          .then(json => {
            if (!ignore) {
              setData(json.items);
            }
          })
          
        return () => {
          ignore = true;
        };
      }
    }, [url]);

    if(error) {
        return error;
    } else {
        return data;
    }
}

export {useData}