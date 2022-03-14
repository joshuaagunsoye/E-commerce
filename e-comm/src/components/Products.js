import {useState} from "react"


function Products(){
    const [image, setImage] = useState(<img src="\images\image-product-1-thumbnail.jpg" alt='big-img' width="320px"/>)

    return(
        <div className="img">
            <p className="big-img imgs">{image}</p>
            <div className="thumbnail-img">
                <img className="imgs hover" onClick={()=>{setImage(<img src="\images\image-product-1-thumbnail.jpg" alt='big-img' />)}} src="\images\image-product-1-thumbnail.jpg" alt="first-view" width="100" height="100"/>
                <img className="imgs hover" onClick={()=>{setImage(<img src="\images\image-product-2-thumbnail.jpg" alt='big-img'/>)}} src="\images\image-product-2-thumbnail.jpg" alt="second-view" width="100" height="100"/>
                <img className="imgs hover" onClick={()=>{setImage(<img src="\images\image-product-3-thumbnail.jpg" alt='big-img'/>)}}src="\images\image-product-3-thumbnail.jpg" alt="third-view" width="100" height="100"/>
                <img className="imgs hover"onClick={()=>{setImage(<img src="\images\image-product-4-thumbnail.jpg" alt='big-img'/>)}}src="\images\image-product-4-thumbnail.jpg" alt="fourth-view" width="100" height="100"/>
            </div>
        </div>
    )
}

export default Products;