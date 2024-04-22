import { useState } from "react"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";


export function Login(){
    let navigate = useNavigate()
    const [userId, setUserId] = useState('');
    const [cookies,setCookie,removeCookie] = useCookies("user_Id");
    function handleChange(e){
        setUserId(e.target.value);

    }
    function handleLogin(){
        setCookie("user_Id",userId);
        navigate('/');
    }
    return(
        <div>
            <h2>User Login</h2>
            <dl>
                <dt>User Id</dt>
                <dd><input type="text" onChange={handleChange}/></dd>
                <dt>Password</dt>
                <dd><input type="password" /></dd>
            </dl>
            <button  className="btn btn-secondary" onClick={handleLogin}>Login</button>
        </div>
    )
}