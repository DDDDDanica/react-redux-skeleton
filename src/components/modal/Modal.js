import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Modal extends Component {
  state = {
    isModalShown: this.props.isModalShown // change to false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.isModalShown !== this.props.isModalShown) {
      this.setState({
        isModalShown: nextProps.isModalShown
      });
    }
  }

  render() {
    const { isModalShown } = this.state;
    const { header, children } = this.props;

    return (
      <div className="wrapper modal fixed" data-show={isModalShown}>
        <div className="modal-bg absolute" data-show={isModalShown} />
        <div className="modal-wrapper absolute-center" data-show={isModalShown}>
          <div className="dialog">
            {header && (
              <div className="dialogHeader relative heading-1">{header}</div>
            )}
            {children && (
              <div className="dialogContent relative">{children}</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  isModalShown: PropTypes.bool,
  header: PropTypes.string,
  children: PropTypes.node
};
