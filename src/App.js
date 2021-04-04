import React from "react";
import axios from 'axios';

import Cat from './Cat';
import Joke from './Joke.js';
import JokeCon from './JokeCon.js';
import JokeRate from './JokeRate';
import Nav from './Nav.js';
import PersInfo from './PersInfo.js';


class App extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            joke:"",
            jokeType: "",
            categories: [],
            category: "",
            cat:"",
            comment:"",
            rating:10,
        };
        
        this.handleChooseCategory = this.handleChooseCategory.bind(this);
        this.handleChooseJokeType = this.handleChooseJokeType.bind(this);
        this.handleCatClick = this.handleCatClick.bind(this);
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
     handleChooseCategory(event){
      
        this.setState({
            category: event.target.value,
        });
    }
   
    handleUserNameChange(event){
        
        this.setState({
            userName: event.target.value,
        });
        
    }
    
    handleEmailChange(event){
        
        this.setState({
            email: event.target.value
        });
    }
   
    
    handleChooseJokeType(event){
        
        this.setState({
            jokeType: event.target.value,
        });
    }
    
    handleCatClick(){
        axios.get('/cat')
        
        .then(res=>{
            
            this.setState({
                cat:res.data.file
            });
        });
    }
    
   
    
    handleCommentChange(event){
        
        this.setState({
            comment: event.target.value
        });
    }
    
    handleSubmit(event){
        
        event.preventDefault();
        axios.post('/comments', {
            userName: this.state.userName,
            email: this.state.email,
            comment: this.state.comment,
            rating: this.state.rating,
            category: this.state.category,
            joke:this.state.joke
        }).then(({data})=>{
            console.log(data);
            if(data.errors){
                alert("Be sure to fill in your name, a valid email address, and what you thought about this joke. Then submit!");
            } else {
               alert("Succefully submitted form! Click Joke Comments in the navigation bar to see what you and others have thought!"); 
            }
        });
        
        
    }
    
    
    
    componentDidMount(){
        axios.get('https://api.chucknorris.io/jokes/categories')
        
        .then(res=>{
            // console.log(res.data);
            
            this.setState({
               categories:res.data});
        });

    }
    
    componentDidUpdate(prevProps, prevState) {
        const{jokeType, category} = this.state;
        
        if((jokeType && jokeType !== prevState.jokeType) || (category && category !== prevState.category)){
           const baseUrl = "/joke";
           const jokeUrl = jokeType === "jokeByCat"? `${baseUrl}?category=${category}`:baseUrl;
           
            axios.get(jokeUrl)
            
            
            .then(res=>{
                console.log(res.data);
                this.setState({
                    joke:res.data.value
                });
                
            });
        }
    }    
    

    
    render(){
        return <>
       
        <Nav/>
        <div className="grid-container">        
            
            <PersInfo 
                handleUserNameChange={this.handleUserNameChange} 
                handleEmailChange={this.handleEmailChange}
            />
            
            <Joke 
                jokeType={this.state.jokeType} 
                joke={this.state.joke} 
                category={this.state.category} 
                categories={this.state.categories} 
                handleChooseCategory={this.handleChooseCategory} 
                handleChooseJokeType={this.handleChooseJokeType}
            />
            
            <JokeCon joke={this.state.joke}/>
            
            <JokeRate 
                handleCommentChange={this.handleCommentChange} 
                handleSubmit={this.handleSubmit}
            />
            
            <Cat cat={this.state.cat} handleCatClick={this.handleCatClick}/>
            
        </div>       
             
        </>;
    }
}

export default App;
