import React from 'react';
import './home.css'
import SearchBox from './Searchbox';




const Home = () => {






    return(
        <div className="container-fluid">
            <div className="row">
                <div className="home col s12">
                    <div className="upper-fold">
                        <SearchBox/>
                    </div>
                </div>
            </div>
       
        </div>
     )
 }




export default Home;