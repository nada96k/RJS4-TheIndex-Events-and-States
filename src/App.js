import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  state = {
    currentAuthor: null
  };

  selectAuthor = author => {
    this.setState({ currentAuthor: author });
  };

  resetAuthor = () => {
    this.setState({ currentAuthor: null });
  };

  render() {
    if (this.state.currentAuthor == null) {
      return (
        <div id="app" className="container-fluid">
          <div className="row">
            <div className="col-2">
              <Sidebar resetAuthor={this.resetAuthor} />
            </div>
            <div className="content col-10">
              <AuthorsList authors={authors} selectAuthor={this.selectAuthor} />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div id="app" className="container-fluid">
          <div className="row">
            <div className="col-2">
              <Sidebar resetAuthor={this.resetAuthor} />
            </div>
            <div className="content col-10">
              <AuthorDetail author={this.state.currentAuthor} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
