import React from "react";


class Joke extends React.Component{
   
    
    render(){
        return (
           <>
           <div className="box2">    
            <h2>How do you want the round house kicked?</h2>
                    <div className="twoChoices">
                        <label htmlFor="jokeByCat">Pick one of two:</label>
                        <input type="radio" id="jokeByCat" name="joketype" value="jokeByCat" onChange={this.props.handleChooseJokeType}/>
                        <label htmlFor="jokeByCat">Category</label>
                        <input type="radio" id="jokeByRan" name="joketype" value="jokeByRan" onChange={this.props.handleChooseJokeType}/>
                        <label htmlFor="jokeByRan">Random</label>
                    </div>
        
            {this.props.jokeType === "jokeByCat" && (
                <div className="categorySelector">
                     <label name="category" id="joke">Choose a category:</label>
                     <select name="category" id="joke"  onChange={this.props.handleChooseCategory}>
                        {this.props.categories.map(category=><option value={category} key={category}>{category}</option>)}
                     </select> 
                </div>             
            )}
        </div> 
       
        </>
        );
    }
}

export default Joke;