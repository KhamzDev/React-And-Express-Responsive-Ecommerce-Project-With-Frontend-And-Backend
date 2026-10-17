import useFetch from "../../services/api/useFetch";
import styles from "./ProductClick.module.css";
import { useParams } from "react-router-dom";
import FetchReq from "../../services/api/fetchReq";


function ProductClick() {

    const { id } = useParams();
    const { data: product } = useFetch(`http://localhost:3000/api/products/${id}`);
    const { handleFetch } = FetchReq();

    function handleAddCart(){
        
        const md = "POST";
        const by = product;
        handleFetch({
            url: `http://localhost:3000/api/cart`, 
            md, 
            by});
    }

  return (
    <div className={styles.container}>
        <div className={styles.product}>
            <img src={product?.image} className={styles.img}></img>
            <div className={styles.info}>
                <span className={styles.p_name}>{product?.name}</span>
                <span className={styles.p_price}>{product?.price}$</span>
                <span className={styles.p_desc}>{product?.description}</span>
            </div> 
        </div>

        <div className={styles.payment}>
            <h4>Total Price:</h4>
            <span style={{fontSize: "2.5em"}}>{((product?.price) * (product?.quantity)).toFixed(2)}$</span>
            <button onClick={handleAddCart}>Add To Cart</button>
        </div>
    </div>
  )
}

export default ProductClick