import React, { useContext } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import prod from './MenProducts';
import styles from './Men.module.css'
import { useNavigate } from 'react-router-dom'
import NavComp from '../NavComp';
import { CounterContext, UserContext } from '../Home';

const Men = () => {

    return (
        <div>
            <NavComp />
            <h1 className={styles.header}>Men Categories</h1>
            <Container>
                {prod.map(item =>
                    (<List key={item.id} obj={item} />))}
            </Container>
        </div>
    )
}

export default Men

function List({ obj }) {
    const {counter1, setCounter1} = useContext(CounterContext)
    const navigate = useNavigate();
    const handleClick = (e) => {
        // console.log(obj.id);
        let id = obj.id;
        switch (id.toString()) {
            case '1':
                console.log(counter1)
                 navigate('/MenShirts')
                break;
            case '2': console.log(obj.id);
                break;
            case '3': console.log(obj.id);
                break;
            case '4': console.log(obj.id);
                break;
            case '5': console.log(obj.id);
                break;
            case '6': console.log(obj.id);
                break;
            case '7': console.log(obj.id);
                break;
            case '8': console.log(obj.id);
                break;
            case '9': console.log(obj.id);
                break;
            case '10': console.log(obj.id);
                break;
            default: console.log(obj)

        }
    }

    return (
        <div className={styles.disp}>
            <Card  bg='light' style={{ width: '16rem' }}>
                <Card.Img variant="top" height={220} src={obj.img} />
                <Card.Body>
                    <Card.Title>{obj.name}</Card.Title>
                    {/* <Card.Text>{obj.price}</Card.Text> */}
                    <Button onClick={handleClick} variant="primary">See more</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

// export default Men