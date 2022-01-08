import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./spinner";
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  articles = [];
  constructor() {
    super();
    console.log("iam a constructor");
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      totalResults:0
    };
  }


  async updateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.api_key}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });

        // here our data is fetched from url and converted into json using await then we fetch our articles from json 
        
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
          articles: parsedData.articles,
          totalResults: parsedData.totalResults,
          loading: false
        });
  }

  fetchMoreData=async()=>{
    this.setState({ page:this.state.page+1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.api_key}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
        loading: false
    });

  }


  async componentDidMount() {
    this.updateNews()
  }

  render() {
    return (
      <>
        
          <h2 className="text-center">Top Headlines</h2>

          {/* spinner for loading = false  */}
          
          {/* {this.state.loading && <Spinner />} */}

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={ this.state.articles !== this.state.totalResults}
            loader={<Spinner/>}
          >
          <div className="container">
          <div className="row">
            {/* !this.state.loading && */}
            {this.state.articles.map((e) => {
                return (
                  <div className="col-md-4 my-3">
                    {/* here is our news item component with props */}
                    <Newsitem
                      title={e.title ? e.title.slice(0, 50) : ""}
                      description={
                        e.description ? e.description.slice(0, 50) + "..." : ""
                      }
                      imageUrl={
                        e.urlToImage
                          ? e.urlToImage
                          : "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_01/2705191/nbc-social-default.png"
                      }
                      newsUrl={e.url}
                      author={e.author}
                      date={e.publishedAt}
                      source={e.source.name}
                    />
                  </div>
                );
              })
            }

          </div>
          </div>
          </InfiniteScroll>
        
      </>
    );
  }
}

export default News;
