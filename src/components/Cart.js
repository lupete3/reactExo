function Cart(){
    const monsteraPrice = 8
    const lierrePrice = 10
    const bouquetPrice = 15
    
    return(<div>
        <h2>Panier</h2>
        <ul>
            <li>Monstera : {monsteraPrice}</li>
            <li>Lierra : {lierrePrice}</li>
            <li>Bouquet de fleurs : {bouquetPrice}</li>
        </ul>
        <h3>Total : {monsteraPrice + lierrePrice + bouquetPrice}</h3>
    </div>)
}

export default Cart