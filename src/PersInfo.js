import React from "react";


class PersInfo extends React.Component{
    
   
    
    
    render(){
        return (
           
           
            <div className="box1">
                <h2>Your going to need to fill this in:</h2>
                    <form className="personalInfo">
                        <label htmlFor="userName">
                        Enter your name:
                        <input type="text" id="userName" name="userName" placeholder="Name"  onChange={this.props.handleUserNameChange}/>
                        </label>
                        <label htmlFor="email">
                        Enter your email:
                        <input type="text" id="email"  name="email" placeholder="E-mail" onChange={this.props.handleEmailChange}/>
                        </label>
                    </form>        
            </div>    

        )
    }
}

export default PersInfo;





