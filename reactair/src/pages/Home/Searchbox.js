import React,{Component} from 'react';
import './search.css'

class SearchBox extends Component {

      constructor(props){
          super(props)


          this.state={
            
            where:'',
            checkIn:'',
            checkOut:'',
            guests:0
          }
      }


     changeWhere = (event) =>{

      this.setState({
          where:event.target.value
   
      })



      }

      changeIn = (event) => {

        this.setState({
            checkIn:event.target.value
        })

    
      }

      changeOut = (event) => {

        this.setState({
            checkOut:event.target.value
        })
      }

      changeGuests = (event) =>{

        this.setState({
           guests:event.target.value
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
                  <div className="form-label">
                      Where
                  </div>
                  <div className="input-field" id="where" >
                  <input className="browser-default" onChange={this.changeWhere} placeholder="Anywhere" value={this.state.where} type="text" />

                  </div>
                </div>

                <div className="col m6">
                  <div className="form-label">
                      CHECK-IN
                  </div>
                  <div className="input-field" id="check-in" >
                  <input className="browser-default" onChange={this.changeIn} placeholder="Anywhere" value={this.state.checkIn} type="date" />

                  </div>
                </div>

                <div className="col m6">
                  <div className="form-label">
                      CHECK-IN
                  </div>
                  <div className="input-field" id="check-out" >
                  <input className="browser-default" onChange={this.changeOut} placeholder="Anyw" value={this.state.checkOut} type="date" />

                  </div>
                </div>

                <div className="col m12">
                    <div className ="form-label">Guest</div>

                    <div className="input-field" id="where">
                        <input className="browser-default" onChange={this.changeGuests}
                        type="number"
                        placeholder="number of guests" />
                    </div>
                    
                    <div className="col m12 submit-btn">
                       <div className="input-field" id="submit-btn">
                         <input className="btn-large waves-effect waves-light red accent-2" type="submit"/>
                       </div>
                    </div>
                </div>
            
            
            </form>
           </div>
        </div>
    )
 }


}


export default SearchBox;