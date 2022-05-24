import React,{useState} from 'react';
import Navigation from './Navigation';
import Books from './Books';
import booksData from '../data/booksData';
import Cart from './Cart';
import Footer from './Footer';

const Home = () => {
    const [book, setBook] = useState(booksData);
    //console.log(book)
    const [cart, setCart] = useState([]);

  // handleButton function start
   const handleButton = book => {
       const newCart = [...cart, book];
       setCart(newCart);
  }
  // handleButton function end

    return (
        <div>
        <Navigation />
        <div className='container'>
        <div className='row'>
          <div className='col-9 containerShop'>
              {
                  book.map(book =>(
                      <Books book={book} handleButton={handleButton}/>
                  ))
              }

          </div>
          <div className='col-3 containerCart'>
              <Cart cart={cart}/>

          </div> 
        </div>
        </div>
        <Footer />
    </div>
    );
};

export default Home;