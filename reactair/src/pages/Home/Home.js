import React ,{Component} from 'react';
import './home.css'
import SearchBox from './Searchbox';
import axios from 'axios'



class Home extends Component {



   componentDidMount(){



   }

 render(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="home col s12">
                    <div className="upper-fold">
                        <SearchBox/>
                    </div>
                </div>
            </div>
       
        </div>
     )
    }
 }




export default Home;