import React ,{Component} from 'react';
import './home.css'
import SearchBox from './Searchbox';
import axios from 'axios'

const apiCall='https://airbnb-api.robertbunch.dev'


class Home extends Component {

''

    async componentDidMount(){

    const recommend =  await axios.get(`${apiCall}/cities/recommended`)

    console.log(recommend.data)
  

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