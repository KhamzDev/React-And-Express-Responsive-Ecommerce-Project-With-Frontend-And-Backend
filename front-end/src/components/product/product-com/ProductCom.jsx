

function ProductCom({ item }) {


  return (
    <div style={container}>
        <img style={img} src={item.image}></img>
        <div style={p_info}>
            <span style={p_name}>{item.name}</span>
            <span style={p_price}>{item.price}$</span>
        </div>
    </div>
  )
}

export default ProductCom

const container = {
    backgroundColor: "#a3c2d5",
    boxShadow: "2px 2px 10px hsla(0, 0%, 0%, 0.30)",
    width: "250px",
    height: "270px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    marginBottom: "50px",
    cursor: "pointer",
}

const img = {
    backgroundColor: "white",
    width: "100%",
    minHeight: "150px",
}

const p_info = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
}

const p_name = {
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "5px",
}

const p_price = {
    fontSize: "20px",
    textAlign: "center",
}
