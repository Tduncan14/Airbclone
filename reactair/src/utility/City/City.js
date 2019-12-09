import React,{Component} from 'react';
import './city.css';



class City  extends Component {








  render(){

   console.log(this.props.city,'city component')

   const { cityName,image,price} = this.props.city;
    return(
        <div>
            <h1>City</h1>
        </div>
    )
  }
}


export default City