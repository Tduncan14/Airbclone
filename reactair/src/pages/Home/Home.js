import React ,{Component} from 'react';
import './home.css'
import SearchBox from './Searchbox';
import axios from 'axios'
import Spinner from '../../utility/Spinner/Spinner';
import Cities from '../../utility/City/Cities';
const apiCall='https://airbnb-api.robertbunch.dev'


class Home extends Component {

    constructor(props){
        super(props)

        this.state ={
            cities:[]
        }
    }


    async componentDidMount(){

    const recommend =  await axios.get(`${apiCall}/cities/recommended`)

    console.log(recommend.data)
   
    this.setState({
        cities:recommend.data
    })

   }

 render(){
     console.log(this.state.cities,'state')

     if(this.state.cities.length === 0){

        return <Spinner />
     }



    return(
        <div className="container-fluid">
            <div className="row">
                <div className="home col s12">
                    <div className="upper-fold">
                        <SearchBox/>
                    </div>
                </div>
                <div className ="col s-12">
                <Cities cities={this.state.cities} />
               </div>
            </div>
       
        </div>
     )
    }
 }




export default Home;