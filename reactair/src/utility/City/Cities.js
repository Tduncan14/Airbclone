import React,{Component} from 'react';
import City from './City';
import SlickSlider from '../Slider/Slider';


class Cities extends Component {






    render(){
        
    const cities = this.props.cities.map(
        (city,i) =>{
            return <div  key={i}className="col s3"><City city={city} key={i}/> 
            </div> 
        })
   


       return( <div className="cities-wrapper">
            <h1 className="main-header-text">{this.props.header}</h1>
            <SlickSlider elements={cities} />
        </div>)
    }



}

export default Cities