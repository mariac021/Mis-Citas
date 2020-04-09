
import React, { Component } from 'react'
import axios from 'axios'

class RandomQuote extends Component {
   constructor(props) {
      super(props)
      this.state = {
         quote: '',
         author: ''
      }
   }

   componentDidMount() {
      this.getQuote()
   }

   getQuote() { 
      let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

      axios.get(url)
         .then(res => {
            let data = res.data.quotes
            let quoteNum = Math.floor(Math.random() * data.length)
            let randomQuote = data[quoteNum]

            this.setState({
               quote: randomQuote['quote'],
               author: randomQuote['author']
            })
         })
   }

   getNewQuote = () => { //will be called on clicking the New Quote button
      this.getQuote()
   }

   render() {
      const { quote, author } = this.state //Destructuring
      return (
         <div id='wrapper'>
            <center><h1 className='title'>Frases random para tus Publicaciones</h1></center>

            <div id='quote-box'>
               <div id='text'><p>{quote}</p></div>
               <div id='author'><h5>{author}</h5></div>

               <div id='buttons'>
                  <a id='tweet-quote' href={`https://twitter.com/intent/tweet?text=${quote} ${author}`} target='_blank' title="Post this quote on twitter!">
                     <span>
                        <i className="fab fa-twitter twitter-icon 2-x" /> 
                     </span>
                  </a>
                  <button id='new-quote' className='buttons btn btn-outline-light' onClick={this.getNewQuote}>Next</button>
               </div>
            </div>
         <img src="./images/img2.gif" width="1000" height="500"/>
         </div>
      )
   }
}

export default RandomQuote