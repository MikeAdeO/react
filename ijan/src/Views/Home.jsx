import React from 'react'
import Header from '../Components/Header';
import HeroBanner from '../Components/HeroBanner';
import Body from '../Components/Body';
import Footer from '../Components/Footer';
import Events from '../Components/react_events/Events';
import SignUp from '../Components/react_events/SignUp';
import Logical from '../Components/react_events/Logical';
import Ternary from '../Components/react_events/Ternary';
import Switch from '../Components/react_events/Switch';
import Enum from '../Components/react_events/Enum';

const Home = () => {
  const motors = ["Ford", "BMW", "TOYOTA", "AUDI", "BENZ"];
  return (
    <div>
        {/* <Header />
        <HeroBanner />
        <Body />
        <Footer /> */}
        {/* <Events /> */}
        {/* <SignUp isLoggedIn={true} /> */}
        {/* <Logical cars={motors}/> */}
        {/* <Ternary isGoal={true}/> */}
        {/* <Switch text="Ayo"/> */}
        
    </div>
  )
}

export default Home