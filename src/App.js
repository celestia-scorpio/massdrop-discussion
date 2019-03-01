import React, { Component } from "react";
import "./App.css";
import Comment from "./components/Comment.jsx";
import Search from "./components/Search.jsx";
import SortBy from "./components/SortBy.jsx";
import Discussions from "./components/Discussions.jsx";
import Reply from "./components/Reply.jsx";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discussions: []
    };

    this.getDiscussions = this.getDiscussions.bind(this);
  }

  componentDidMount() {
    // let productName = window.location.href.split('/')[4]
    // console.log('URL path>>>>>>>>.    ', productName)
    const itemId = window.location.href.split("/")[4];
    this.getDiscussions(itemId);
  }
  // http://ec2-3-88-137-68.compute-1.amazonaws.com/api/products/${itemId}/discussions
  getDiscussions(itemId) {
    axios
      .get(`/api/products/${itemId}/discussions`)
      
      .then(res => {
        // console.log(res);
        this.setState({ discussions: res.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div class="container">
        <Comment />
        <div class="container-search">
          <div class="row row-search">
            <Search />
            <SortBy />
          </div>
        </div>
        <div class="discussion_content">
          <div class="discussion">
            <div class="infinite_scroller">
              <div class="discussionTop">
                <div class="outer_col">
                  <div
                    class="card card--conversation no_padding col"
                    name="conversation_card_column">
                    <div class="conversation conversation--empty">
                      <Discussions discussions={this.state.discussions} />
                       <Reply />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
