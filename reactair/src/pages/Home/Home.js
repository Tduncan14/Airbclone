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
            cities:[],
            asia:[],
            europe:[],
            exotic:[]
        }
    }


    async componentDidMount(){

   const europe = axios.get(`${apiCall}/cities/europe`)

   const asia = axios.get(`${apiCall}/cities/asia`)

   const exotic = axios.get(`${apiCall}/cities/exotic`)

    const recommend = axios.get(`${apiCall}/cities/recommended`)


    const cityPromise = [];

    cityPromise.push(recommend);
    cityPromise.push(europe);
    cityPromise.push(asia);
    cityPromise.push(exotic)
   
    

    Promise.all(cityPromise)
.then(values => { 
  console.log(values);
})
.catch(error => { 
  console.error(error.message)
});


 
   }

 render(){
     console.log(this.state.cities.length,'state')

     if(this.state.cities.length === 0 || this.state.cities == false){

        return <Spinner />
     }



    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="home col s12">
                    <div className="upper-fold">
                        <SearchBox/>
                    </div>
                </div>
            </div>
       
        </div>
        <div className="container-fluid lower-fold">
            <div className="row">
        <div className ="col s12">
        {<Cities cities={this.state.cities} 
         header="Recommended Cities for you"/>}
       </div>
            </div>
        </div>
        </>
     )
    }
 }




export default Home;