import React from "react";

class SearchBar extends React.Component {
  //CONTROLLED
  state = { term: "" };

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }

  /* uncontrolled
  onInputChange(event) {
    console.log(event.target.value);
  }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
  */
}

export default SearchBar;
