import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import prod from './WomenProducts';
import styles from './Women.module.css'
import { useLocation } from 'react-router-dom';

const Women = () => {
  const location= useLocation()
  const count = location.state.count
  return (
    <div>
      <h1>Women</h1>
      <Container>
        {
          prod.map(item => (  
          <div className={styles.disp} key={item.id}>
            <Card border='secondary' bg='light' style={{ width: '15rem' }}>
              <Card.Img variant="top" height={240} src="image/Heels.png" />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.price}</Card.Text>
                <Button variant="primary">Add to cart </Button>
              </Card.Body>
            </Card>
          </div>
          ))
        }
      </Container>
    </div>
  )
}

export default Women

// function List({ obj }) {
//   return (
//     <div className={styles.disp}>
//       <Card border='secondary' bg='light' style={{ width: '15rem' }}>
//         <Card.Img variant="top" height={240} src="image/Heels.png" />
//         <Card.Body>
//           <Card.Title>{obj.name}</Card.Title>
//           <Card.Text>{obj.price}</Card.Text>
//           <Button variant="primary">Add to cart</Button>
//         </Card.Body>
//       </Card>
//     </div>
//   )
// }
