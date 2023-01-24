import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {  List, HeartFill, UiChecksGrid, BoxSeamFill, BoxArrowLeft, PersonCircle } from 'react-bootstrap-icons';
// import * as icons from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import {  useNavigate , useLocation, Link} from 'react-router-dom';
import styles from './OffCanvas.module.css'
import { UserContext } from '../Home';
import { CounterContext } from '../Home';

function OffCanvas(props) {
    // const {count,setcount}=props
    // const [count,setcount] = React.useContext(UserContext);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();
    const location = useLocation();

    const handleChange = (e) => {
        console.log(`${e.target.value}`);
        if([e.target.value] == 1)
            navigate('/Men');
        else if([e.target.value] == 2)
            navigate('/Women');
        else if([e.target.value] == 3)
            navigate('/Kids');

    }

    const handleLogout = (e) => {
        navigate('../ ');
    }
    return (
        <>

            <List size={30} onClick={handleShow} className={styles.menuIcon}></List>


            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton className={styles.title}>
                    <Offcanvas.Title>
                        <div >
                        <h3><PersonCircle /><span className={styles.icon}>Hello,<br /> <span className={styles.profile}>{location.state.name}</span></span> </h3>
                        </div>

                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <UiChecksGrid  size={25}/>
                    <Form.Select aria-label="Default select example" className={`${styles.icon} ${styles.category}`} size="lg" onChange={handleChange}>
                        <option hidden>Categories</option>
                        <option value="1">Men</option>
                        <option value="2">Women</option>
                     <option value='3'>Kids</option>
                        
                    </Form.Select>
                    <hr />
                    <div>
                        <h5><BoxSeamFill /><span className={styles.icon}>Orders</span></h5>
                    </div>
                    <hr />
                    <div>
                        <h5><HeartFill color='red'/><span className={styles.icon}>Wishlist</span> </h5>
                        
                    </div>
                    <hr />
                    <div>
                        <h5 onClick={handleLogout}><BoxArrowLeft size={24} /><span className={styles.icon}>Logout</span></h5>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default OffCanvas