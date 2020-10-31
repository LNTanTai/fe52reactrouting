import React, { Component } from "react";
import { actDetailPageApi } from "./modules/action";
import { connect } from "react-redux";

class DetailPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getDetailMovie(id);
  }
  render() {
    return (
      <div>
        <h1>Detail Page</h1>
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//     loading: state.listMovieReducer.loading,
//     listMovie: state.listMovieReducer.data,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    getDetailMovie: (id) => {
      dispatch(actDetailPageApi(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(DetailPage);
