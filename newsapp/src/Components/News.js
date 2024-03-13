import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";




// import NewsItem from "./Components/NewsItem";

export class News extends Component {
    // static defaultProps = {
    //   country: 'in',
    //   pageSize:5,
    //   category:'general',
    // };

  //this is used to set type of data in props
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
   capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0
    }
    document.title=`${this.capitalizeFirstLetter(this.props.category)}-NewsMonkey`;

  }
  async updateNews() {
    this.props.setProgress(0);
    const urlLink = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    const response = await fetch(urlLink);
    const result = await response.json();
    //this.props.setProgress(70);
    this.setState({
      articles: result.articles,
      totalResults: result.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    // try {
    //   let urlLink = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    //   this.setState({ loading: true });
    //   const response = await fetch(urlLink);
    //   if (!response.ok) {
    //     throw new Error(`Error! status: ${response.status}`);
    //   }
    //   // ✅ call response.json() here
    //   const result = await response.json();
    //   return this.setState({
    //     articles: result.articles,
    //     totalResults: result.totalResults,
    //     loading: false,
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
    this.updateNews();
  }

  handlePrevClick = async () => {
    // let urlLink = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=${this.props.apiKey}=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // const response = await fetch(urlLink);
    // const result = await response.json();
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: result.articles,
    //   loading: false,
    // });
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    // if (
    //   this.state.page + 1 >
    //   Math.ceil(this.state.totalResults / this.props.pageSize)
    // ) {
    // } else {
    //   let urlLink = `https://newsapi.org/v2/top-headlines?country=${
    //     this.props.country
    //   }&category=${
    //     this.props.category
    //   }&apiKey=${this.props.apiKey}=${
    //     this.state.page + 1
    //   }&pageSize=${this.props.pageSize}`;
    //   this.setState({ loading: true });
    //   const response = await fetch(urlLink);
    //   const result = await response.json();

    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: result.articles,
    //     loading: false,
    //   });
    // }
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
   fetchMoreData = async() => {
   this.setState({page:this.state.page+1})
   let urlLink = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
   this.setState({ loading: true });
   const response = await fetch(urlLink);
   const result = await response.json();
   this.setState({
     articles: this.state.articles.concat(result.articles),
     totalResults: result.totalResults
   });  };
  render() {
    return (
      <>
          <h1 className="text-center" style={{ margin: "30px 0px" }}>NewsMonkey- Top headlines {this.capitalizeFirstLetter(this.props.category)}</h1>
          
        {this.state.loading && <Spinner />} 
         <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !==this.state.totalResults }
          loader={<Spinner/>}
        >
          <div className="container">

          <div className="row">
            {
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-3">
                    <NewsItem
                      key={element.url} title={element.title ? element.title.slice(0, 45) : ""}Description={element.description?element.description.slice(0, 88): "" }
                      imageUrl={element.urlToImage ? element.urlToImage : ""} newsUrl={element.url} author={element.author} date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            {/* below line "d-flex justify-content-between" is a flix box from bootstrap*/}
            {/* <div className="container d-flex justify-content-between">
              <button
                disabled={this.state.page === 1}
                type="button"
                className="btn btn-dark"
                onClick={this.handlePrevClick}
              >
                &larr; Previous
              </button>
              <button
                disabled={this.state.page >= 5}
                type="button"
                className="btn btn-dark"
                onClick={this.handleNextClick}
              >
                Next &rarr;
              </button>
            </div> */}

            {/* //col-md-3 medium devices so it will take 4 columons there are 12 columons grade in bootstrap means , 4*3=12 */}
          </div>
        </div>
        </InfiniteScroll>

      </>
    );
  }
}

export default News;
