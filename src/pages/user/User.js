import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import API from "api";
import { actionGET } from "actions";
import { FETCH_USER_INFO } from "./actions";

class User extends Component {
  componentDidMount() {
    this._getUserId();
  }

  _getUserId = () => {
    this.props.actionGET(FETCH_USER_INFO, API.GET.getUserInfo);
  };

  render() {
    const { userId } = this.props;
    return <section className="user">This is {userId}.</section>;
  }
}

User.propTypes = {
  userId: PropTypes.string,
  actionGET: PropTypes.func
};

function mapStateToProps({ kpi, globalSetting }) {
  return {
    allKpis: kpi.allKpis,
    domainData: kpi.domainData,
    metricData: kpi.metricData,
    userId: kpi.userId,
    year: globalSetting.year
  };
}

export default connect(mapStateToProps, { actionGET })(User);
