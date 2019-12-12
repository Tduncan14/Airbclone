import React ,{Component} from 'react';
import Activity from './Activity';
import './Activity.css';



class Activities extends Component {



    render(){
       console.log(this.props.activities,"hey")

        return(
            <div>
                <h1>Activities</h1>
            </div>
        )
    }
}



export default Activities;