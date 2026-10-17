import { useState } from "react";
import ProductCom from "../../components/product/product-com/ProductCom";
import useFetch from "../../services/api/useFetch";
import { useEffect } from "react";
import styles from './HomePage.module.css';
import { useNavigate } from "react-router-dom";

function HomePage() {

    const url = "http://localhost:3000/api/products";
    const {data} = useFetch(url);
    
    const [products, setProducts] = useState(data);

    const navigate = useNavigate();

    function handleClick(id){
        navigate(`/product/${id}`)
    }

    useEffect(() => {
        if(data){
            setProducts(data)
        }
    }, [data])

  return (
    <div className={styles.container}>
        <div className={styles.main}>
            {products?.map((item) => (
                <div key={item.id} onClick={() => handleClick(item.id)}>
                    <ProductCom item={item} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default HomePage