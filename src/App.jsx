import React from "react";
import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    text: "",
    reverse: "",
    result: "",
  };

  textHandler = (e) => {
    e.preventDefault();
    this.setState({
      text: e.target.value,
    });

    if (this.state.text.length === 1) {
      this.setState({
        result: "",
        reverse: "",
      });
    }
  };

  textComparisonHandler = (e) => {
    e.preventDefault();
    let originalText = this.state.text.toLowerCase().split("");
    let reversedText = this.state.text.toLowerCase().split("").reverse();
    if (JSON.stringify(originalText) === JSON.stringify(reversedText)) {
      this.setState({
        result: "The text is a Palindrome.",
        reverse: reversedText,
      });
    } else {
      this.setState({
        result: "The text is NOT a Palindrome.",
        reverse: reversedText,
      });
    }
  };

  reloadWindow = () => {
    window.location.reload();
  };
  render() {
    return (
      <div className="app-wrapper">
        <h2>Palindrome Checker</h2>
        <div className="inputs">
          <form onSubmit={this.textComparisonHandler}>
            <div>
              <input
                type="text"
                id="text-input"
                onChange={this.textHandler}
                placeholder="Input your text..."
              />
            </div>
            <button
              type="submit"
              id="check"
              onClick={this.textComparisonHandler}
            >
              Check
            </button>
            <button id="refresh" onClick={this.reloadWindow}>
              Refresh
            </button>
          </form>
          <div className="result-field">
            <h3>
              {this.state.text} &rarr; {this.state.reverse}
            </h3>
            <p className="result-txt">{this.state.result}</p>
          </div>
        </div>
        <footer>
          <p>&copy;: Vijay KC, BCH React & Node 2022</p>
          <a
            href="https://github.com/kcvijay/palindrome_check_React"
            target="_blank noreferor"
          >
            View at GitHub
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
