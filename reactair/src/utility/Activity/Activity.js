import React,{Component} from 'react';
import './Activity.css';


class Activity extends Component {





    render(){
        
    const {activityType,cost,id,image,rating,title,totalRatings} = this.props.activity
        return(

          <div className="activity">
            <img src={image} alt="image" />
            <div className="activity-type">
            {activityType}</div>
            <div className="title">
                {title}
            </div>
            <div className="cost">
                From ${cost}/person
            </div>
            <div className="rating">
                {rating} ({totalRatings})
            </div>
          </div> 
        )
    }
}


export default Activity;