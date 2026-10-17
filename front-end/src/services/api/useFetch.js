import { useState, useEffect } from "react";

function useFetch(url){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!url){
            return
        }
        setLoading(true);
        setError(null);

        const abortController = new AbortController();
        const signal = abortController.signal;

        const handleFetch = async () => {

            try{

            const response = await fetch( url, {signal} );
            if(!response.ok){
                setError('Could not fetch url');
                return;
            }

            const data = await response.json();
            setData(data);
            }catch(err){
            setError(err);
            }finally{
            setLoading(false);
            }


        }
        
        handleFetch();

        return () => abortController.abort();

    }, [url])



    return {data, loading, error}

}

export default useFetch