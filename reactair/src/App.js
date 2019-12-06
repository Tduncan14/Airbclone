import React,{Component} from 'react';
import {Link,BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './pages/Home/Home';
import Navbar from './utility/Navbar/Navbar';



class App extends Component {









render(){



  return(
    <Router>
      {/* <Header/> */}
      <Switch>
        <Route exact path ="/" component={Navbar} />
        <Route exact path ="/" component={Home} />
       
      </Switch>
    </Router>
  )
}





}


export default App