import "./ItemDetailContainer.css";
import { baseDatos } from "../../utils/firebase";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore";
import loadingGif from "../../assets/loading.gif";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    const { id } = useParams();


    const [itemDetail, setItemDetail] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProducto = async () => {
            const queryRef = doc(baseDatos, "items", id);
            const response = await getDoc(queryRef);
            const newDoc = {
                ...response.data(),
                id: response.id
            }
            setItemDetail(newDoc)
            setLoading(false);
        }
        getProducto();
    }, [id]);

    return (
        <div>
            {loading === true ? (<img className="loadingImg" src={loadingGif} alt="loading" />) : (<ItemDetail item={itemDetail}></ItemDetail>
            )}
        </div>
    )
}