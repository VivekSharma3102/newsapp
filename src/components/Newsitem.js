import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    // here we take props :>
    let { description, title, imageUrl, newsUrl, author, date,source } = this.props;

    return (
      <>
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:"1",left:"80%"}}>
            {source}
          </span> 
          <img
            src={imageUrl}
            style={{ height: "200px" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body ">
            <h5 className="card-title">
              {title}
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-dark">
              Read more
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Newsitem;
