import { useSearchParams } from 'react-router-dom';
import SearchProductCom from '../../components/product/search-product-com/SearchProductCom';
import styles from './SearchPage.module.css';
import useFetch from '../../services/api/useFetch';


function SearchPage() {

  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");

  const {data} = useFetch(`http://localhost:3000/api/search/res/products?name=${name}`)

  return (
    <div className={styles.container}>
        <div className={styles.main}>
          {data?.map((item) => (
            <SearchProductCom key={item.id} sRes={item} />
          ))}
        </div>
    </div>
  )
}

export default SearchPage