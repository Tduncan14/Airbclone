import React,{Component} from 'react';
import City from './City';


class Cities extends Component {






    render(){
        
    const reCities = this.props.cities.map(
        (city,i) =>{
            return <div className="col s3"><City city={city} key={i}/> 
            </div> 
        })
   


       return( <div>
          {reCities}
        </div>
       )
    }



}

export default Cities