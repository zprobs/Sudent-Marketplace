import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export default function CartList({item,value}) {
    const{id,title,img,price,total,count,quantity} = item;
    const {increment,decrement,removeItem} = value;
    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src = {img} style={{width:'5rem', height:'5rem'}} className="img-fluid" alt="product"/>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product: </span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price: </span>
                {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>-</span>
                        <span className="btn btn-black mx-1" >{quantity}</span>
                        {(count - quantity > 0) ?
                            <span className="btn btn-black mx-1" onClick={() => increment(id)}>+</span>
                            : null
                        }
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={()=>removeItem(id)}>
                    <FontAwesomeIcon icon={faTrash}/>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong> item total : $ {total}</strong>
            </div>

        </div>
    )
}