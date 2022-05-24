import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Navigation = () => {
    return (
        <div className='navigation'>
           <Navbar dark color="dark">
               <div className='container'>
               <NavbarBrand href="/">ShopeBook</NavbarBrand>
            
               </div>

           </Navbar>
        </div>
    );
};

export default Navigation;