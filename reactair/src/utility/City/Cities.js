import React,{Component} from 'react';
import City from './City';
import SlickSlider from '../Slider/Slider';


class Cities extends Component {






    render(){
        
    const cities = this.props.cities.map(
        (city,i) =>{
            return <div className="col s3"><City city={city} key={i}/> 
            </div> 
        })
   


       return( <div>
          <SlickSlider elements={cities}/>
        </div>
       )
    }



}

export default Cities