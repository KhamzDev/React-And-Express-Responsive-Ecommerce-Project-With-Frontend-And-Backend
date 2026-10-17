import styles from "./CartPage.module.css";
import useFetch from "../../services/api/useFetch";
import FetchReq from "../../services/api/fetchReq";
import CardProduct from "../../components/product/cart-product/CardProduct";


function CartPage() {

    const { data: initialCart } = useFetch(`http://localhost:3000/api/cart`);
    const { handleFetch, data: fetchData } = FetchReq();

    const product = fetchData ?? initialCart ?? null;

    function handleSelect(e, id){
        if(e.target.value === "🗑️"){
            return handleFetch({url: `http://localhost:3000/api/cart/${id}`, md: "DELETE" })
        }

        const ammount = Number(e.target.value);

        handleFetch({
            url: `http://localhost:3000/api/cart/${id}`, 
            md: "PATCH", 
            by: {quantity: ammount}});
    };

    const totalSum = product.reduce((acc, item) => {
        const qty = item.quantity || 1
        return acc + qty * item.price
    }, 0);

  return (
    <div className={styles.container}>
        <div className={styles.product_c}>
            {product?.map((item) => (
                <CardProduct key={item.id} product={item} handleSelect={(e) => handleSelect(e, item.id)}/>
            ))}
        </div>

        <div className={styles.payment}>
            <h4>Total Price:</h4>
            <span style={{fontSize: "2.5em"}}>{totalSum.toFixed(2, 0)}$</span>
            <button>Purchase</button>
        </div>
    </div>
  )
}

export default CartPage