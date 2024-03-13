import React, { Component } from "react";

export class NewsItem extends Component {
  constructor() {
    super();
    console.log("hello ");
  }
  render() {
    let { title, Description, imageUrl, newsUrl, author, date ,source} = this.props;

    return (
      <div className="my-3">
        <div className="card" >
          <div><span className="badge rounded-pill bg-danger" style={{isplay:'flex',right:'0',position:'absolute'}}>
                {source}</span></div>

          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {title}
            </h5>
            <p className="card-text">{Description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on date{" "}
                {new Date(date).toGMTString()}

              </small>
            </p>

            <a href={newsUrl} className="btn btn-sm btn-dark" target="blank">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
