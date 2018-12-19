import React, { Component } from "react";
import Dot from "./dot";

class Hot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }
  render() {
    const { style, imgUrl, onClick } = this.props;
    const { dataSource } = this.state;
    return (
      <div style={{ ...style }} className="hot-wrapper">
        <div className="hot-content" ref='hot'>
          <img src={imgUrl} alt="热点图" />
          {dataSource &&
            dataSource.map((v, i) => {
              return (
                <Dot
                  key={i}
                  value={v}
                  onClick={onClick}
                />
              );
            })}
        </div>
      </div>
    );
  }
  componentDidMount() {
    const { imgUrl } = this.props;
    this.getIndexData(imgUrl);
    window.onresize = () => {
      this.getIndexData(imgUrl);
    };
  }
  getIndexData(url) {
    let img = new Image();
    img.src = url;
    img.onload = () => {
      try {
        const { clientWidth, clientHeight } = this.refs.hot;
        const hot = this.refs.hot;
        const { dataSource } = this.props;
        if (hot !== undefined && hot !== null) {
          const ary = dataSource.map((v, i) => {
            return {
              ...v,
              picX: (parseInt(v.picX) * clientWidth) / img.width,
              picY: (parseInt(v.picY) * clientHeight) / img.height,
            };
          });
          this.setState({ dataSource: ary });
        }
        img = null;
      } catch (err) {
        console.log(err);
      }
    };
  }
}

export default Hot;
