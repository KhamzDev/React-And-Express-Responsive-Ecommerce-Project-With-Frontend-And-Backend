import { useEffect, useRef, useState } from "react";
import useFetch from "../../services/api/useFetch";
import { useNavigate } from "react-router-dom";
import searchImg from "../../assets/search.png";


function SearchBar() {

    const [inputValue, setInputValue] = useState("");
    const [displaySD, setDisplaySD] = useState(false)
    const url = `http://localhost:3000/api/search/products?name=${inputValue}`;
    const {data} = useFetch(url);
    const [result, setResult] = useState([]);

    const inputRef = useRef(null);
    const searchDivRef = useRef(null);

    const navigate = useNavigate();

    function handleSearch(){
        if(inputValue.length === 0) return;
        setDisplaySD(false);
        navigate(`/search/product?name=${inputValue}`);
    }

    function handleClick(name){
        if(inputValue.length === 0) return;
        setDisplaySD(false);
        inputRef.current.value = name;
        navigate(`/search/product?name=${name}`);
    }

    useEffect(() => {
        function handleSD(e){
            if(!searchDivRef.current || !searchDivRef.current.contains(e.target)){
                setDisplaySD(false);
            }
        }

        document.addEventListener('mousedown', handleSD);
        return () => document.removeEventListener('mousedown', handleSD);
        
    }, []);

    useEffect(() => {
        if(data){
            setResult(data);
        }
    }, [data])

    function handleInput(e){
        setInputValue(e.target.value.trim())
        if(inputValue.length > 0 && result && result.length > 0 ){
            setDisplaySD(true);
        }
    }

  return (
    <div style={container}>
        <div style={input_c}>
            <input ref={inputRef} onChange={handleInput} style={input}></input>
            <img src={searchImg} style={sImgLogo} onClick={handleSearch}/>
        </div>
        {displaySD && <div style={searchRes} ref={searchDivRef}>
            {result.map((p) => (
                <div key={p.id} style={resDiv} onClick={() => handleClick(p.name)}>
                    <p>{p.name}</p>
                </div>
            ))}
        </div>}
    </div>
  )
}

export default SearchBar

const container = {
  width: "400px",
  height: "40px",
  display: "flex",
  flexDirection: "column",
  position: "relative",
}

const input = {
    width: '100%',
    height: '40px',
    padding: '5px',
    border: "none",
    outline: 'none',
    fontSize: '17px',
};
const searchRes = {
    width: '100%',
    minHeight: '40px',
    backgroundColor: "#fff",
    color: "#000",
    border: "2px solid grey",
    position: "absolute",
    top: "+100%",
}

const resDiv = {
    width: "100%",
    height: "40px",
    borderBottom: "1px solid grey",
    display: "flex",
    alignItems: "center",
    padding: "5px",
    cursor: "pointer",
}

const input_c = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    border: '2px solid gray',
}

const sImgLogo = {
    width: "30px",
    height: "30px",
    cursor: "pointer",
}