import React ,{Component} from 'react';
import Activity from './Activity';
import './Activity.css';



class Activities extends Component {



    render(){

    //    console.log(this.props.activities,"hey")

    const activities = this.props.activities;

     
   const act = activities.map((act,index) =>{
        return(
            <div className="col s2" key={index}>
             <Activity activity={act}/>
            </div>
        )
    }
    )



        return(
            <div className="activities">
             {act}
            </div>
        )
    }
}



export default Activities;