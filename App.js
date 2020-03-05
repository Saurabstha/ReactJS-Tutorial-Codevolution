import React, { Component } from 'react';
import './App.css';
import ClickCounterTwo from './components/ClickCounterTwo.js';
import HoverCounterTwo from './components/HoverCounterTwo.js';
import User from './components/User.js';
import Counter from './components/Counter.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ClickCounterTwo/>
        <HoverCounterTwo/> */}
        {/* <User name="saurabbbbb" /> */}
        {/* <User name={ () => 'Saurav'}/> */}
        {/* <User name={ (isLoggedIn) => isLoggedIn? 'Saurav' : 'Guest'}/> */}
        {/* <User render={ (isLoggedIn) => isLoggedIn? 'Saurav' : 'Guest'}/> */}

        {/* <Counter render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
        /> */}
        <Counter>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}          
        </Counter> 

        <Counter>
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}          
        </Counter>         

        {/* <Counter render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
        /> */}
      </div>
    )
  }
}

export default App;