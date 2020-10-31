import React, { Component } from "react";
import Axios from "axios";
import Movie from "./../../../components/Movie";
import { connect } from "react-redux";
import { actListMovieApi } from "./../ListMoviePage/modules/action";
import Loader from "./../../../components/Loader";

class ListMoviePage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     listMovie: [],
  //     loading: false,
  //   };
  // }

  componentDidMount() {
    // this.setState({
    //   loading: true,
    // });
    // this.props.listMovieRequest();
    // Axios({
    //   url:
    //     "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP11",
    //   method: "GET",
    // })
    //   .then((result) => {
    //     // this.setState({
    //     //   listMovie: result.data,
    //     //   loading: false,
    //     // });
    //     this.props.listMovieSuccess(result.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     this.props.listMovieFailed(err);
    //   });

    this.props.listMovieApi();
  }

  renderHTML = () => {
    const { listMovie } = this.props;
    if (listMovie && listMovie.length > 0) {
      return listMovie.map((movie) => {
        return <Movie key={movie.maPhim} movie={movie} />;
      });
    }
  };

  render() {
    const { loading } = this.props;
    if (loading) return <Loader />;
    return (
      <div className="container">
        <h1>ListMoviePage</h1>
        <div className="row">{this.renderHTML()}</div>
        {/* {this.renderHTML()} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.listMovieReducer.loading,
    listMovie: state.listMovieReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    listMovieApi: () => {
      dispatch(actListMovieApi());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage);
