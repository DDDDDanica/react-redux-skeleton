import React, { Component } from "react";
import PropTypes from "prop-types";
import DropdownInterface from "dropdown-interface";

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this._searchInputFN = elm => (this._searchInput = elm);
  }

  state = {
    inputValue: this.props.defaultValue
  };

  componentDidMount() {
    this._createInterface();
  }

  componentWillUnmount() {
    this._destroyInterface();
  }

  _destroyInterface = () => {
    typeof this.interface !== "undefined" && this.interface.destroy();
    this.interface = undefined;
  };

  _createInterface = () => {
    const { items } = this.props;
    this.interface = new DropdownInterface({
      items: items.map(item => ({ label: item, value: item })),
      parent: this._searchInput,
      onItemSelected: this._onItemSelected.bind(this)
    });
  };

  _onItemSelected = selected => {
    this.setState(
      {
        inputValue: selected.value,
        arrowDown: true
      },
      () => {
        this.props.handleItemSelected(
          this.props.category,
          this.state.inputValue
        );
      }
    );
  };

  _handleKeyDown = event => {
    this.interface.handleKeyDown(event);
  };

  _handleClickInput = () => {
    this.interface.toggle();
  };

  render() {
    const { inputValue } = this.state;
    const { defaultValue } = this.props;

    return (
      <div className="wrapper relative dropdown flex-column">
        <input
          readOnly
          ref={this._searchInputFN}
          value={inputValue}
          className="inputParent absolute sm-body"
          placeholder={defaultValue}
          onClick={this._handleClickInput}
          onKeyDown={this._handleKeyDown}
        />
      </div>
    );
  }
}

Dropdown.defaultProps = {
  handleMouseDown: () => {},
  handleItemSelected: () => {}
};

Dropdown.propTypes = {
  items: PropTypes.array,
  category: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  handleItemSelected: PropTypes.func
};
