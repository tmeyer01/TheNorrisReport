import React from "react";


class JokeRate extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    
    render(){
        return (
           
           
            <div className="box4">
            <p>From the drop down box pick a rating, then enter a brief discription of what you thought about this joke.</p>
            <label name="rating" id="rate">Rate that joke on a scale of 1 - 10 </label>
            <select name="rating" id="rate"> 
            {[10,10,10,10,10,10,10,10,10,10].map((rating,index)=><option value={rating} key={index}>{rating}</option>)}
            </select>

           
            <form onSubmit={this.props.handleSubmit}>
                <label>
                What did you think of this fact about Chuck? 
                <input className="comment"type="text" name="comment" onChange={this.props.handleCommentChange} placeholder="What did you think...."/>
                </label>
                <input type="submit" value="Submit thoughts"/>
            </form>
        </div>    
           
            
        
        );
    }
}

export default JokeRate;