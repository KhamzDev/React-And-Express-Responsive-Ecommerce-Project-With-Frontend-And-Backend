import { useState } from "react";

function FetchReq() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

    const handleFetch = async ({url, md, by}) => {

    setLoading(true);
    setError(null);

    try {

      let response = null;

      if(md === "DELETE"){
        response = await fetch(url, {method: md})
      }else{
        response = await fetch(url, { 
          method: md,
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(by)
        });
      }
      
      if (!response.ok) {
        setError("Could not fetch url");
        return
      }

      const data = await response.json();
      setData(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }

    }

    return { handleFetch, data, loading, error };
  };

export default FetchReq;
