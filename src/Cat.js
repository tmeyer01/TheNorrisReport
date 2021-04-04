import React from "react";


class Cat extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    
    render(){
        return (
           
           
        <div className="box5">    
            <h2>A round house of cuteness!</h2>
            <p>When your done laughing at the fact about Norris, click the button below to have chuck show you a cute kitten</p>
            <button type="button" onClick={this.props.handleCatClick}>Click for cats</button>
            
            <div className="catContainer">
                <img src={this.props.cat}/>
            </div>
        </div>     
           
            
        
        );
    }
}

export default Cat;