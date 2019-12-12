import React ,{Component} from 'react';
import './home.css'
import SearchBox from './Searchbox';
import axios from 'axios'
import Spinner from '../../utility/Spinner/Spinner';
import Cities from '../../utility/City/Cities';
import Activities from '../../utility/Activity/Activities';

const apiCall='https://airbnb-api.robertbunch.dev'


class Home extends Component {

    constructor(props){
        super(props)

        this.state ={
            cities:[],
            asia:{},
            europe:{},
            exotic:{},
            activities:[],
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
.then(city => { 
    const cities = city[0].data
    const europe = city[1].data
    const asia = city[2].data
    const exotic = city[3].data

  console.log(cities,'cities');


  this.setState({
      cities,
      europe,
      asia,
      exotic

  })
})
.catch(error => { 
  console.error(error.message)
});

    const activity = `${apiCall}/activities/today`;

    const actcall = await axios.get(activity);

    this.setState({
        activities:actcall.data
    })
 
   }

 render(){
     console.log(this.state.activities,"activities")

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

       <div className="col s12">
           <Activities activities ={this.state.activities} />
       </div>
       <div className ="col s12">
        {<Cities cities={this.state.europe.cities} 
        header={this.state.europe.header}
         />}
       </div>
       <div className ="col s12">
        {<Cities cities={this.state.asia.cities}
          header={this.state.asia.header} 
       />}
       </div>
       <div className ="col s12">
        {<Cities cities={this.state.exotic.cities}
           header={this.state.exotic.header}
        />}
       </div>
            </div>
        </div>
        </>
     )
    }
 }




export default Home;