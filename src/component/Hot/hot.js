import React, { Component } from "react";
import Dot from "./dot";

class Hot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            handleData: []
        };
    }
    render() {
        const { style, imgUrl, onClick } = this.props;
        const { handleData } = this.state;
        return (
            <div style={{ ...style }} className="hot-wrapper" ref='hot'>
                <div className="hot-content">
                    <img src={imgUrl} alt="热点图" ref='hotImg' />
                    {handleData &&
                        handleData.map((v, i) => {
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
        setTimeout(() => {
            this.renderPointXY();
        }, 16);
        // window.onresize = () => {
        //     this.renderPointXY();
        // };
    }
    computedImgWH() {
        const { imgInfo } = this.props;
        const { imageWidth, imageHeight } = imgInfo;
        const { clientWidth, clientHeight } = this.refs.hot;
        let scaleWidth, scaleHeight;
        if (imageHeight / imageWidth < clientHeight / clientWidth) {
            scaleWidth = clientWidth;
            scaleHeight = (clientWidth * imageHeight) / imageWidth;
        } else {
            scaleHeight = clientHeight;
            scaleWidth = (clientHeight * imageWidth) / imageHeight;
        }
        this.refs.hotImg.style.width = scaleWidth + 'px';
        this.refs.hotImg.style.height = scaleHeight + 'px';
        return { scaleWidth, scaleHeight };
    }
    renderPointXY() {
        const { dataSource ,imgInfo} = this.props;
        const { scaleWidth, scaleHeight } = this.computedImgWH();
        const ary = dataSource.map((v, i) => {
            return {
                ...v,
                picX: (parseInt(v.picX) * scaleWidth) / imgInfo.imageWidth,
                picY: (parseInt(v.picY) * scaleHeight) / imgInfo.imageHeight,
            };
        });
        this.setState({ handleData: ary });
    }
}

export default Hot;
