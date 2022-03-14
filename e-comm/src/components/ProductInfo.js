import {useState} from "react"

function ProductInfo(){

   const [count, setCount] = useState(0)
    
    return(
        <div className="prodduct">
            <header className="b-name orange">SNEAKER COMPANY</header>
            <div>
            <h1>Fall Limited Edition Sneakers</h1>
            <p className="prod-features">These low-profile sneakers are your perfect casual wear companion.
                Featuring a durable rubber outer sole, they'll withstand everything
                this weather can offer.
            </p>
            <p className="money">$125.00 <span className="orange money-fifty">50%</span></p>
            <p className="money-onetwofive">$250.00</p>
            <div>
                <button className="button-cart first-b hover-gen" onClick={()=>{setCount(count - 1)}}>-</button>
                <input className="input button-cart" value={count} type="text"></input>
                <button className="button-cart second-b hover-gen" onClick={()=>{setCount(count + 1)}}>+</button>
                
                <button className="cart hover-gen">Add to Cart</button>
            </div>
            </div>
            
        </div>
    )

}

export default ProductInfo;