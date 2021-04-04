import React from "react";


class JokeCon extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    
    render(){
        return (
           <>
           {this.props.joke && 
            <div className="box3">
                 
                    <div className="jokeContainer">
                     {this.props.joke} 
                    </div>
               
            </div>
           }
          </>        
            
        
        );
    }
}

export default JokeCon;