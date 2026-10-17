import styles from "./CardProduct.module.css";


function CardProduct({ product, handleSelect }) {
    
  return (
        <div className={styles.product}>
                <img src={product?.image} className={styles.img}></img>
                <div className={styles.info}>
                    <span className={styles.p_name}>{product?.name}</span>
                    <span className={styles.p_price}>{product?.price}$</span>
                    <span className={styles.p_desc}>{product?.description}</span>
                </div>
                <div className={styles.select_c}>
                    <select className={styles.select} onChange={handleSelect} value={product?.quantity || 1}>
                        <option>🗑️</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option> 
                    </select>
                </div>
            </div>
  )
}

export default CardProduct