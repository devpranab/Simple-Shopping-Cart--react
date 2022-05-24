import React from 'react';
import { Button } from 'react-bootstrap';
import {FaCartPlus} from 'react-icons/fa'

const Books = props => {
    //console.log(props.book);
    //destructure
    const {name, instructor, price, image} = props.book;
    return (
        <div className='book'>
          <div>
            <img src={image} alt=""/>
            </div>
            <h3>Book name: {name}</h3>
            <h4>Instructor: {instructor}</h4>
            <h5>Price: $ {price} /-</h5>
            <Button className='enrollBtn' variant="warning" onClick={() => props.handleButton(props.book)}>Enroll Now
            <FaCartPlus/>
            </Button>
        </div>
    );
};

export default Books;