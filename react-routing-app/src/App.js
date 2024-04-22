import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/home/home';
import { Jewelery } from './components/jewelery/jewelery';
import { Electronics } from './components/electronics/electronics';
import { Men } from './components/men/men';
import { Women } from './components/women/women';
import { MoreDetails } from './components/more-details/more-details';
import { Login } from './components/login/login';
import Detail from './components/details/Detail';



function App() {
  return (
    <div className='container-fluid'>
       <BrowserRouter>
       <header className='d-flex justify-content-between p-4'>
        <div className='h3'>Shopper.</div>
        <nav>
          <span className='mx-2'> <Link to='/' className='text-decoration-none'>Home</Link> </span>
          <span className='mx-2'> <Link to='electronics' className='text-decoration-none'>Electronis</Link> </span>
          <span className='mx-2'> <Link to='jewelery' className='text-decoration-none'>Jewelery</Link> </span>
          <span className='mx-2'> <Link to="men's clothing" className='text-decoration-none'>Men Fashion</Link> </span>
          <span className='mx-2'> <Link to="women's clothing" className='text-decoration-none'>Women Fashion</Link> </span>
        </nav>
        <div>
          <span className='bi bi-search mx-2'></span>
          <span className='bi bi-person mx-2'></span>
          <span className='bi bi-heart mx-2'></span>
          <span className='bi bi-cart3 mx-2'></span>
        </div>
       </header>
       <article className='bg-dark text-white p-2 text-center'>
        <span className='bi bi-lightning-fill text-warning'></span>
        <span>HAPPY HOLIDAY DEALS ON EVERYTHING</span>
        <span className='bi bi-lightning-fill text-warning'></span>
       </article>
       <main>
         <Routes>
             <Route path='/' element={<Home />} />
             <Route path='jewelery'  element={<Jewelery />} />
             <Route path='electronics'  element={<Electronics />} />
             <Route path="men's clothing"  element={<Men />} />
             <Route path="women's clothing" element={<Women />} />
             <Route path='details/:id' element={<Detail/>} >
                 <Route path='more-details/:id' element={<MoreDetails />} />
              </Route>
             <Route path='*' element={<div className='text-danger'><h3>Not Found</h3><p>Path you requested not found</p></div>} />
             <Route path='login' element={<Login />} />
         </Routes>
       </main>
       </BrowserRouter>
    </div>
  );
}

export default App;

