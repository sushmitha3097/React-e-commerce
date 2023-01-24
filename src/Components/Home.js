import React, { useState } from 'react'
import CarouselComp from './CarouselComp';
import NavComp from './NavComp';
import OffCanvas from './OffCanvas/OffCanvas';
// import { useLocation } from 'react-router-dom';
// export const UserContext = React.createContext();
export const CounterContext = React.createContext("counter")

function Home(props) {
  // const [count, setcount] = useState(0)
  const [counter1, setCounter1] = useState(10);
  return (
    <div>
      <CounterContext.Provider  value={{ counter1, setCounter1}}>
        {console.log(counter1)}
        <OffCanvas />
        <NavComp />
        <CarouselComp />
        </CounterContext.Provider>
    </div>
  )
}

export default Home
