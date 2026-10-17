import { useNavigate } from "react-router-dom";
import styles from "./SearchProductCom.module.css";



function SearchProductCom({sRes}) {

  const navigate = useNavigate();

  return (
    <div className={styles.container} onClick={() => navigate(`/product/${sRes.id}`)}>
        <div className={styles.info}>
            <img src={sRes?.image} className={styles.image}></img>
            <span className={styles.name}>{sRes?.name}</span>
        </div>
            <span style={{fontSize: "20px"}}>{sRes?.price}$</span>
    </div>
  )
}

export default SearchProductCom


