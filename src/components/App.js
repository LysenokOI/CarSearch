import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./imageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    let response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    console.log(this);
    console.log(response);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "1vh" }}>
        <SearchBar usersSubmit={this.onSearchSubmit} />
        {/*Found: {this.state.images.length} images*/}
        <ImageList imagesL={this.state.images} />
      </div>
    );
  }
}

export default App;
