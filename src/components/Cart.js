import '../styles/Cart.css'

function Cart(){
    const monsteraPrice = 8
    const lierrePrice = 10
    const bouquetPrice = 15
    
    return(<div className="lmj-cart">
        <h2>Panier</h2>
        <ul>
            <li>Monstera : {monsteraPrice}</li>
            <li>Lierra : {lierrePrice}</li>
            <li>Bouquet de fleurs : {bouquetPrice}</li>
        </ul>
        <h4>Total : {monsteraPrice + lierrePrice + bouquetPrice}</h4>
    </div>)
}

export default Cart