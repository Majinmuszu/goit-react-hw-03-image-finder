import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React, { Component } from "react";
import Loader from "react-loader-spinner";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
// import { fetchImages } from "./utils/fetch";

export default class App extends Component {
  state = {
    isLoading: false,
    keyword: "",
    images: [],
    page: 1,
    hitsFetched: "",
  };

  fetchImages(keyword, page) {
    try {
      fetch(
        `https://pixabay.com/api/?q=${keyword}&page=${page}&key=23884807-3582a3d87163efa52c00484da&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((data) => data.json())
        .then((data) => {
          this.state.page === 1
            ? this.setState({
                images: data.hits,
                page: page + 1,
                isLoading: false,
                hitsFetched: data.hits.length,
              })
            : this.setState({
                images: [...this.state.images, ...data.hits],
                page: page + 1,
                isLoading: false,
                hitsFetched: data.hits.length,
              });
          console.log(data.hits);
        })
        .finally(() => this.setState({isLoading: false}))
    } catch (error) {
      console.error(error);
    }
  }

  onSubmit = (e) => {
    const { keyword, page } = this.state;
    e.preventDefault();
    const form = e.target;
    this.fetchImages(keyword, page);
    form.reset();
    console.log(this.state.images);
  };

  onSetKeyword = (e) => {
    this.setState({images: []})
    this.setState({ page: 1 });
    this.setState({ keyword: e.target.value });
    this.setState({isLoading: true})
  };

  loadMore = (e) => {
    const { keyword, page } = this.state;
    e.preventDefault();
    this.fetchImages(keyword, page);
  };

  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.onSubmit} onSetKeyword={this.onSetKeyword} />
        <ImageGallery items={this.state.images} />
        {this.state.isLoading === true ? (
          <Loader
            className="loader"
            type="Grid"
            color="#00BFFF"
            height={300}
            width={300}
          />
        ) : (
          <></>
        )}
        {this.state.images.length < 1 ? (
          <></>
        ) : this.state.hitsFetched < 12 ? (
          <>No more results</>
        ) : (
          <Button loadMore={this.loadMore} />
        )}
      </div>
    );
  }
}
