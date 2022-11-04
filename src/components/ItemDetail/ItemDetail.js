import "./ItemDetail.css"
import { ItemCount } from '../ItemCount/ItemCount';
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";


export const ItemDetail = ({ item }) => {
    const { agregarProducto } = useContext(CartContext);

    const addProduct = (quantity) => {
        agregarProducto(item, quantity);
    }



  
    return (
        <>
            <div>
                <h1 className="detailTitle">{item.title}</h1>
                <p className="detailTitle">{item.author}</p>
                <img className="detailPic" src={item.imagen}></img>
                <div className="detailCont">
                    <h4 className="detailSub">Precio</h4>
                    <p className="detailText">$ {item.price}</p>
                </div>
                <div className="detailCont">
                    <h4 className="detailSub">Sinopsis</h4>
                    <p className="detailText">{item.description}</p>
                    <ItemCount stock={20} initial={1} onAdd={addProduct} />
                </div>
            </div>

        </>
    )
}