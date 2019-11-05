import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    //console.log(this.imageRef);
    /*не отобразится height, потому что пытаемся получить данные до
того, как загрузится картинка
    console.log(this.imageRef.current.clientHeight);*/
    // add event listener
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    //console.log(this.imageRef.current.clientHeight);
    let height = this.imageRef.current.clientHeight;
    // 150 - высота ряда из ImageList.css
    let spans = Math.ceil(height / 10 + 1);

    /*this.setState({ spans: spans });
     можно объединить spans, т.к. одинаковые ключи и значение*/
    this.setState({ spans });
  };

  render() {
    let { alt_description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          /*alt={this.props.image.alt_description}
          src={this.props.image.urls.regular}*/
          alt={alt_description}
          src={urls.regular}
          // добавим react ref
          ref={this.imageRef}
        />
      </div>
    );
  }
}

export default ImageCard;
