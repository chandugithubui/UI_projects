import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState,  } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";





export function Jewelery()
{
    const [jewelery, setJewelery] = useState([{id:0, title:'', price:'', image:'', description:'', category:'', rating:{rate:0, count:0}}]);

    const [cookies, setCookie, removeCookie] = useCookies('userid');

    let navigate = useNavigate();

    useEffect(()=>{
        if(cookies['userid'])
         {
            axios.get('https://fakestoreapi.com/products/category/jewelery')
            .then(response=> {
                setJewelery(response.data);
            })
         } else {
             navigate("/login");
         }

    },[]);

    return(
        <div className="d-flex flex-wrap">
            {
                jewelery.map(product=>
                <div key={product.id} className="card m-2 p-2" style={{width:'200px'}}> 
                  <img src={product.image} height="130" className="card-img-top" />
                  <div className="card-header" style={{height:'140px'}}> 
                    {product.title}
                  </div>
                    <div className="card-footer">
                        <Link to={`/details/${product.id}`}className="btn btn-dark w-100">Details</Link>
                    </div>
                </div>
                )
            }
        </div>
    )
}