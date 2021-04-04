# The Norris Report
Users enter their name and email address. Then pick how they would like to recieve a Chuck Norris Joke, by category or at Random.
They are then asked to pick a rating for the joke on a scale of 1-10 (Thats a joke as you can only pick 10's as Chuck Norris only gets 10's). 
After that users enter a brief discription of what they thought about the Joke.  All jokes come from a Chuck Norris API, so full discoluser there might be some terrible ones.  After users clicks submit thoughts, all information is stored to a database. Users can view all of these by clicking Joke Comments in the navigation bar. Users also have option to see a random cute cat photo :) 

![Screen Shot 2021-04-04 at 10 45 37 AM](https://user-images.githubusercontent.com/79067458/113517420-b60bd980-9534-11eb-8bd5-c45403c503bf.png)

---

## Dependencies used
- [@babel/core](https://github.com/babel/babel/tree/master/packages/babel-core)
- [@babel/preset-env](https://github.com/babel/babel-preset-env)
- [@babel/preset-react](https://github.com/babel/babel/tree/master/packages/babel-preset-react)
- [axios](https://github.com/axios/axios)
- [babel-loader](https://github.com/babel/babel-loader)
- [css-loader](https://github.com/webpack-contrib/css-loader)
- [dotenv](https://github.com/motdotla/dotenv)
- [ejs](https://github.com/mde/ejs)
- [express](https://github.com/expressjs/express)
- [express-validator](https://github.com/express-validator/express-validator)
- [mongoose](https://github.com/Automattic/mongoose)
- [mongoose-find-or-create](https://www.npmjs.com/package/mongoose-find-or-create) Used for posting comments, searches for existing email or name, If not found it creates. Used as I thought it made for cleaner code 
- [nodemon](https://github.com/remy/nodemon)
- [react](https://github.com/facebook/react)
- [react-dom](https://github.com/facebook/react/tree/master/packages/react-dom)
- [style-loader](https://github.com/webpack-contrib/style-loader)
- [webpack](https://github.com/webpack/webpack)
- [webpack-cli](https://github.com/webpack/webpack-cli)

### API's used 
[chucknorris.io](https://api.chucknorris.io/ "a free JSON API for hand curated Chuck Norris facts") A free JSON API hand curated by Chuck Norris facts. 

[Random Cat](https://aws.random.cat/view/1510) A random cat API 

