import React from "react";

class SearchBar extends React.Component {
  //CONTROLLED
  state = { term: "" };

  /* ОШИБКА, потому что this не обращается к объекту лекция 84
  onFormSubmit(event) {
    event.preventDefault();

    console.log(this.state.term);
  }
*/
  // добавление стрелочной функции решает проблему
  onFormSubmit = event => {
    event.preventDefault();

    //console.log(this.state.term);
    //передадим пропс из App через this - func component в class component
    this.props.usersSubmit(this.state.term);
  };

  /* альтернативный метод onSubmit
  <form onSubmit={event => this.onFormSubmit(event)} className="ui form">
  <form onSubmit={this.onFormSubmit} className="ui form">
*/
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={event => this.setState({ term: event.target.value })}
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
