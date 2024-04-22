import {Link} from 'react-router-dom';
import './home.css';
import Design from '../design/Design';
// import Design from '../design/Design';
export function Home(){
    return(
        <div className="row p-3">
            <div className="jewelery col">
                  <div className='main-title'>
                    JEWELERY
                  </div>
                  <div>
                    <Link className='btn btn-light' to="jewelery"> Shop <span className='bi bi-arrow-right' ></span> </Link>
                  </div>
            </div>
         
            <div className="Men-fashion col">
                 <div className='main-title'>
                    MEN FASHION
                  </div>
                  <div>
                    <Link className='btn btn-light' to="men's clothing"> Shop <span className='bi bi-arrow-right' ></span> </Link>
                  </div>
      
            </div>
            <div className="Women-fashion col">
            <div className='main-title'>
                    WOMEN FASHION
                  </div>
                  <div>
                    <Link className='btn btn-light' to="women's clothing"> Shop <span className='bi bi-arrow-right' ></span> </Link>
                  </div>
            </div>
            <div className='row mt-4 gap-2' >
              {/* <Design/> */}
              <Design category = {"women's clothing"}  />
              <Design category = {"electronics"}    /> 
              <Design category = {"men's clothing"}    />
            </div>
            <div className='mt-4 '>
              <img src="../images/Banner.jpg" alt="" style={{width:"100%", marginLeft:"-9px"}} />
            </div>
        </div>
    )
}