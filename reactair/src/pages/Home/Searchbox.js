import React,{Component} from 'react';
import './search.css'

class SearchBox extends Component {

      constructor(props){
          super(props)


          this.state={
            
            where:''
          }
      }


     changeWhere = (event) =>{

      this.setState({
          where:event.target.value
      })



      }

 render(){

    console.log(this.state.where,"state");

    return(
        <div>
           <div className="home-search-box col m4">
            <h1>
                Book unique places to stay and things to do
            </h1>

            <form className="search-box-form">
                <div className="col m12">

                  <div className="input-field" id="where" >
                      <input onChange={this.changeWhere} 
                      placeholder="Anywhere"
                      value={this.state.where}
                      />

                  </div>
                </div>
            
            </form>
           </div>
        </div>
    )
 }


}


export default SearchBox;