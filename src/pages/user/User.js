import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import API from "api";
import { actionGET } from "actions";
import { FETCH_USER_INFO } from "./actions";

export class User extends Component {
  componentDidMount() {
    this._getUserId();
  }

  _getUserId = () => {
    this.props.actionGET(FETCH_USER_INFO, API.GET.getUserInfo);
  };

  render() {
    const { year, userId } = this.props;
    return <section className="user-wrapper">Hello {userId} from {year}.</section>;
  }
}

User.propTypes = {
  year: PropTypes.string,
  userId: PropTypes.string,
  actionGET: PropTypes.func
};

function mapStateToProps({ user, globalSetting }) {
  return {
    userId: user.userId,
    year: globalSetting.year
  };
}

export default connect(mapStateToProps, { actionGET })(User);
