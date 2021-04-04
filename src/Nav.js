import React from "react";


class Nav extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    
    render(){
        return (
            <nav>
                <div className="logo">
                The Norris report
                </div>
                <ul className="nav-links">
                    
                    <li><a href="/comments">Joke Comments</a></li>
                </ul>
            </nav>      
        
            
        
        )
    }
}

export default Nav;