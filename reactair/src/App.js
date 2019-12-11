import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Navbar from './utility/Navbar/Navbar';




class App extends Component {









render(){



  return(
    <Router>
      {/* <Header/> */}
      {/* <Navbar /> */}
  
      <Route path="/" component={Navbar} />
      <Route exact path="/" component={Home} />

    </Router>
  )
}





}


export default App