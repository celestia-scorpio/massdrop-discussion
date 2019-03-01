import React, { Component } from "react";
import "./stylesheet/style.css";
import "./stylesheet/iconFonts.css";
import "./stylesheet/index.css";

export class Search extends Component {
  render() {
    return (
      <div class="col-4">
        <div class="discussion_search ">
          <input
            type="text"
            name="search"
            id="discussion_search_field"
            placeholder="Search this discussion"
            autocomplete="off"
            class="discussion_search_field form_text_field"
            value=""
          />
          <label class="site_search_icon_label">
            <i class="site_searchbar_icon icon icon-search-3" />
          </label>
        </div>
      </div>
    );
  }
}

export default Search;
