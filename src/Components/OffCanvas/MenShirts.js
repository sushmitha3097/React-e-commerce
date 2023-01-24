import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MenShirtsProd from './MenShirtsProd'
import styles from './MenShirts.module.css'
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import NavComp from '../NavComp';
import { CounterContext } from '../Home';

function MenShirts() {
  
  return (
    <div >
      <NavComp />
      <Container>
        {MenShirtsProd.map(item => (
          <MenShirtsList key={item.id} item={item} />
        ))}
      </Container>
    </div>
  )
}

export default MenShirts

function MenShirtsList({ item }) {
  const [counter1, setCounter1] = useContext(CounterContext)
  const[values, setValues] = useState({
    size:'',
    quantity:''
  })
  const handleClick = e => {
    console.log(counter1);
    let id = item.id;
    // console.log(CounterContext.Consumer);
    
    switch (id.toString()) {
      case '1': {
        // console.log(id);
        // console.log(values.size);
        // console.log(values.quantity);
        
      }
        break;
      case '2': {
        // console.log(id);
        // console.log(values.size);
        // console.log(values.quantity);
      }
        break;
      case '3': console.log(id);
        break;
      case '4': console.log(id);
        break;
      case '5': console.log(id);
        break;
      case '6': console.log(id);
        break;
      case '7': console.log(id);
        break;
      case '8': console.log(id);
        break;
      case '9': console.log(id);
        break;
      case '10': console.log(id);
        break;
      default: console.log(item)

    }
  }

  return (
    <div className={styles.display1}>
      
      <Card bg='light' style={{ width: '16rem' }}>
        <Card.Img variant="top" height={220} src={item.img} />
        <Card.Body>
          <Card.Title>{item.brand}</Card.Title>
          <Card.Text>${item.price}</Card.Text>
          <div className={styles.btn}>
          <Form.Select aria-label="Default select example" size="sm" onChange={e=> setValues({...values,size: e.target.value})}>
                        <option hidden>Size</option>
                        <option value="Small">S</option>
                        <option value="Medium">M</option>
                        <option value="Large">L</option>
            </Form.Select>
            <Button variant="primary" className={styles.btn1} onClick={handleClick}>add</Button>
            <Form.Select aria-label="Default select example" size="sm" onChange={e => setValues({...values,quantity: e.target.value})}>
                        <option hidden>Qnty</option>
                        <option value="Qty-1">1</option>
                        <option value="Qty-2">2</option>
                        <option value="Qty-3">3</option>
            </Form.Select>
          </div>
          
        </Card.Body>
      </Card>
     
    </div>


  )
}

