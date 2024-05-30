import { useEffect, useState } from "react"
import Card from "./Card";
import Loader from './Loader'
function CardWrapper() {

    const [data, setdata] = useState([])
    
    const fetchData = async() =>{
        try{
            const API_ENDPOINT = "https://fakestoreapi.com/products";
            const response = await fetch(API_ENDPOINT);
            const result = await response.json()
            setdata(result)
        }
        catch(e) {
            console.log(e);
        }
        
    }
    useEffect(() => {
        fetchData();
    }, [])
    
    return (
        <div className="wrapper w-full bg-gray-200 flex flex-wrap justify-evenly p-12 gap-10">
            {data.length === 0? <Loader/>: 
            data.map(product=> {
                return(
                    <Card key={product.id} details = {product}/>
                )
            })}
        </div>
    )
}
export default CardWrapper;