var React         = require('react');
var ReactDOM      = require('react-dom');
var Choice        = require('./modules/Choice');
var UserSelection = require('./modules/UserSelection');
var Results       = require('./modules/Results');

require('bootstrap/dist/css/bootstrap.min.css');
require('./custom-styles.css');


var App = React.createClass({

  getInitialState: function () {
    return {
      result: 'Press a button to begin playing.',
      userChoice: null,
      compChoice: null,
      scores: {
        user: 0,
        comp: 0
      }
    };
  },

  /*
    playGame:

    User choice is the text associated with a Choice component.
    Pass it into the function and the application's state will be
    updated based on userChoice v.s. computer choice.

    ...TODO: This function is gigantic and needs to be refactored!
    Some error handling would be nice as well.
  */

  playGame: function (userChoice) {

    var choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
    var compChoice = choices[Math.floor(Math.random() * 5)];

    if (userChoice === 'Rock') {

      if (compChoice === 'Scissors') {
        this.setState({result: 'Rock crushes Scissors! You win!', userChoice: 'Rock', compChoice: compChoice });
      } else if (compChoice === 'Lizard') {
        this.setState({result: 'Rock crushes Lizard! You win!', userChoice: 'Rock', compChoice: compChoice });
      } else if (compChoice === 'Paper') {
        this.setState({result: 'Paper covers Rock! You lose!', userChoice: 'Rock', compChoice: compChoice });
      } else if (compChoice === 'Spock') {
        this.setState({result: 'Spock vaporizes Rock! You lose!', userChoice: 'Rock', compChoice: compChoice });
      } else {
        this.setState({result: 'Tie game!', userChoice: 'Rock', compChoice: compChoice });
      }

    } else if (userChoice === 'Paper') {

      if (compChoice === 'Rock') {
        this.setState({result: 'Paper covers rock! You win!', userChoice: 'Paper', compChoice: compChoice });
      } else if (compChoice === 'Spock') {
        this.setState({result: 'Paper disproves Spock! You win!', userChoice: 'Paper', compChoice: compChoice });
      } else if (compChoice === 'Scissors') {
        this.setState({result: 'Scissors cuts paper! You lose!', userChoice: 'Paper', compChoice: compChoice });
      } else if (compChoice === 'Lizard') {
        this.setState({result: 'Lizard eats paper! You lose!', userChoice: 'Paper', compChoice: compChoice });
      } else {
        this.setState({result: 'Tie game!', userChoice: 'Paper', compChoice: compChoice });
      }

    } else if (userChoice === 'Scissors') {

      if (compChoice === 'Paper') {
        this.setState({result: 'Scissors cuts paper! You win!', userChoice: 'Scissors', compChoice: compChoice });
      } else if (compChoice === 'Lizard') {
        this.setState({result: 'Scissors decapitates lizard! You win!', userChoice: 'Scissors', compChoice: compChoice });
      } else if (compChoice === 'Rock') {
        this.setState({result: 'Rock crushes scissors! You lose!', userChoice: 'Scissors', compChoice: compChoice });
      } else if (compChoice === 'Spock') {
        this.setState({result: 'Spock crushes scissors! You lose!', userChoice: 'Scissors', compChoice: compChoice });
      } else {
        this.setState({result: 'Tie game!', userChoice: 'Scissors', compChoice: compChoice });
      }

    } else if (userChoice === 'Lizard') {

      if (compChoice === 'Paper') {
        this.setState({result: 'Lizard eats paper! You win!', userChoice: 'Lizard', compChoice: compChoice });
      } else if (compChoice === 'Spock') {
        this.setState({result: 'Lizard poisons Spock! You win!', userChoice: 'Lizard', compChoice: compChoice });
      } else if (compChoice === 'Rock') {
        this.setState({result: 'Rock crushes lizard! You lose!', userChoice: 'Lizard', compChoice: compChoice });
      } else if (compChoice === 'Scissors') {
        this.setState({result: 'Scissors decapitates lizard! You lose!', userChoice: 'Lizard', compChoice: compChoice });
      } else {
        this.setState({result: 'Tie game!', userChoice: 'Lizard', compChoice: compChoice });
      } 

    } else if (userChoice === 'Spock') {

      if (compChoice === 'Rock') {
        this.setState({result: 'Spock vaporizes rock! You win!', userChoice: 'Spock', compChoice: compChoice });
      } else if (compChoice === 'Scissors') {
        this.setState({result: 'Spock crushes scissors! You win!', userChoice: 'Spock', compChoice: compChoice });
      } else if (compChoice === 'Paper') {
        this.setState({result: 'Paper disproves Spock! You lose!', userChoice: 'Spock', compChoice: compChoice });
      } else if (compChoice === 'Lizard') {
        this.setState({result: 'Lizard poisons Spock! You lose!', userChoice: 'Spock', compChoice: compChoice });
      } else {
        this.setState({result: 'Tie game!', userChoice: 'Spock', compChoice: compChoice });
      }
    }

  },

  render: function () {
    return (
      <div className="container text-center">
        <h1>Rock, Paper, Scissors, Lizard, Spock!</h1>
        <Results gameInfo={this.state} />
        <UserSelection playGame={this.playGame} />
      </div>
    );
  }
});


ReactDOM.render(<App />, document.getElementsByClassName('app-container')[0]);
