import React, { Component } from "react";
import getInfo from "../Services/getInfo";
import "./style.css";
import Info from "./Info";
import { CirclesWithBar } from "react-loader-spinner";
export default class IpInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null,
      isLoading: true,
    };
  }
  componentDidMount() {
    getInfo().then((data) => {
      this.setState({ info: data, isLoading: false });
    });
  }
  render() {
    const isLoading = this.state.isLoading;
    return (
      <>
        {isLoading ? (
          <CirclesWithBar
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            outerCircleColor=""
            innerCircleColor=""
            barColor=""
            ariaLabel="circles-with-bar-loading"
          />
        ) : (
          <Info data={this.state.info} />
        )}
      </>
    );
  }
}
