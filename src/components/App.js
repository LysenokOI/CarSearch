import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID 78215cfae8283e79a2c5f45027e11d0bb9bb3701f3b28675be97fe685c0d9949"
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "1vh" }}>
        <SearchBar usersSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
