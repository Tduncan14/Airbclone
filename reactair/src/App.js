import React,{Component} from 'react';
import {Link,BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './pages/Home/Home';
import Navbar from './utility/Navbar/Navbar';



class App extends Component {









render(){



  return(
    <Router>
      {/* <Header/> */}
      <Navbar />
      <Switch>
       <Route exact path ="/" component={Home} />
        {/* <Route path = "/" component ={Navbar} /> */}
      </Switch>
    </Router>
  )
}





}


export default App