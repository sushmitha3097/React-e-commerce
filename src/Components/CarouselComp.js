import React from 'react'
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Carousel.module.css'

function CarouselComp() {
    return (
        <div>
            <Container>

            <Carousel className='ml-50' variant='dark'>
                <Carousel.Item>
                    <img
                        className={`d-block w-100 ${styles.imgs}`}
                        src="/image/carousel1.png"
                        alt="First slide"
                        />
                    {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={`d-block w-100 ${styles.imgs}`}
                        src="/image/carousel4.png"
                        alt="Second slide"
                        />

                    {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={`d-block w-100  ${styles.imgs}`}
                        src="/image/carousel3.png"
                        alt="Third slide"
                        />

                    {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </Container>
        </div>
    )
}

export default CarouselComp