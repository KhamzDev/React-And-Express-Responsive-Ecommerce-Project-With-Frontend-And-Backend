import styles from "./Navbar.module.css";
import SearchBar from "../../components/search-bar/SearchBar";
import titleImg from "../../assets/titleImg.png";
import cart from "../../assets/cart.png";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.logo}>
              <img 
                className={styles.title} 
                src={titleImg} 
                onClick={() => navigate('/')}
                ></img>
            </div>

            <SearchBar />
            
            <div className={styles.cart}>
              <img 
                className={styles.cartImg} 
                src={cart}
                onClick={() => navigate('/cart')}
                ></img>
            </div>
        </div>
    </div>
  )
}

export default Navbar

