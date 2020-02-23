import React from 'react';

const API = 'AIzaSyDjMRwQ874KEy7lvG7W5zDYtVn2znWtso8'
const channelID = 'UCuxkk3TD7cfPR08JEWVyXZA'
const result = 5;

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`

class YouTube extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          resultyt: []
        };
        this.clicked = this.clicked.bind(this);
      }
    clicked(){
      fetch(finalURL)
          .then((response) => response.json())
          .then((responseJson) => {
            const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
            this.setState({resultyt});
          })
          .catch((error) => {
            console.error(error);
          });
    }

      render(){
        console.log(this.state.resultyt);
        return(
          <div >
            <button className = "button button4" onClick={this.clicked}>Show Latest Videos</button>
              {
                this.state.resultyt.map((link, i) => {
                  console.log(link);
                  var frame = <div key={i} className="youtube"><iframe title="Hello" width="560" height="300" src={link} frameBorder="0" allowFullScreen></iframe></div>
                  return frame;
                })
              }
              {this.frame}
        </div>
        );
      }
    
}
export default YouTube