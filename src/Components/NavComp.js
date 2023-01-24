import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React, { useContext, useState } from 'react'
import { PersonCircle, BellFill, CartFill } from 'react-bootstrap-icons';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from './NavComp.module.css'
import OffCanvas from './OffCanvas/OffCanvas';
import { UserContext } from './Home';
// import Offcanvas from 'react-bootstrap/Offcanvas';

function NavComp(props) {
  const {count,setcount}=props
  // const [count,setcount] = React.useContext(UserContext);
  


  return (
    <Navbar bg="light" expand="lg">
          
        {/* <OffCanvas /> */}
        <Navbar.Brand href="#home">
          <img src="./image/myntra-logo.png" width="105" height="40" className="d-inline-block align-top" alt="logo" />
        </Navbar.Brand>
      <Container>
        <div className={styles.rightIcons}>

        <BellFill size={30} className={styles.icons}/>
        <PersonCircle size={30} className={styles.icons}/>
        <CartFill size={30} className={styles.icons}  />  <span>{count}</span>     
        </div>

        <Form className="d-flex">
          <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
          <Button variant="outline-success">Search</Button>
        </Form> 
    
      </Container>
    </Navbar>
  );
}

export default NavComp;
