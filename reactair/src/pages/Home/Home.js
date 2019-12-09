import React ,{Component} from 'react';
import './home.css'
import SearchBox from './Searchbox';
import axios from 'axios'
import Spinner from '../../utility/Spinner/Spinner';
import City from '../../utility/City/City';

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

     const reCities = this.state.cities.map(
     (city,i) =>{
         return <div className="col s3"><City city={city} key={i}/> 
         </div> 
     })


    return(
        <div className="container-fluid">
            <div className="row">
                <div className="home col s12">
                    <div className="upper-fold">
                        <SearchBox/>
                    </div>
                </div>
                {
                 reCities
                }
            </div>
       
        </div>
     )
    }
 }




export default Home;