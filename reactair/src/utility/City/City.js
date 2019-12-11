import React,{Component} from 'react';
import './city.css';



class City  extends Component {








  render(){

   console.log(this.props.city,'city component')

   const { cityName,image,price,id} = this.props.city;
    return(
      <div className="city col s12">
   
          <div className="image">
              <img src={image} alt="cities" />
          </div>
          <div className="city-name">{cityName}</div>
          <div className="price">${price}/night average</div>
     
  </div>
    )
  }
}


export default City