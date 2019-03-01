import React, { Component } from "react";
import "./stylesheet/style.css";
import "./stylesheet/iconFonts.css";
import "./stylesheet/index.css";
import Reply from "./Reply.jsx";
import moment from "moment";

export class Discussion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdded: false,
      comment: props.review,
      editorHtml: "",
      isEditorShown: false,
      quillPlaceholder: "Add a reply..."
    };
  }

  render() {
    return (
      <div>
        <div className="discussions">
          {this.props.discussions.map((discussion, key) => {
            if (discussion.parent_child === 1) {
              return (
                <div className="card_container">
                  <ul>
                    <div class="comment__wrapper comment--root comment--employee">
                      <div class="content_card comment">
                        <a class="links links--normal links--with_text links--text_only avatar__wrapper_link--root">
                          <div class="avatar__wrapper comment_owner__avatar--large">
                            <img
                              alt=""
                              class="responsive responsive_avatar"
                              src={discussion.avatar}
                            />
                          </div>
                        </a>
                        <div class="comment__main">
                          <div class="flexItem flexContainer wd_alignItems--center d_alignItems--center wt_alignItems--center nt_alignItems--center p_alignItems--center wd_flexWrap--nowrap d_flexWrap--nowrap wt_flexWrap--nowrap nt_flexWrap--nowrap p_flexWrap--nowrap row--comment_header">
                            <div class="flexItem flexContainer user user--link user--all user--employee comment__owner_details">
                              <div class="flexItem">
                                <div class="flexItem flexContainer wd_flexWrap--nowrap d_flexWrap--nowrap wt_flexWrap--nowrap nt_flexWrap--nowrap p_flexWrap--nowrap user__info--main">
                                  <div class="flexItem wd_flexGrow--0 d_flexGrow--0 wt_flexGrow--0 nt_flexGrow--0 p_flexGrow--0 username__container">
                                    <a
                                      href="/profile/richardgao"
                                      class="links links--normal links--with_text links--text_only username"
                                    >
                                      <span class="links__text">
                                        {discussion.username}
                                      </span>
                                    </a>
                                  </div>
                                  <span class="tag user__endorsements">
                                    829
                                  </span>
                                  <button
                                    type="button"
                                    class="follow_button button button--small button--blue button--bare"
                                  >
                                    <i class="icon icon-follow" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div class="comment__misc_info_actions">
                              {moment(discussion.createdAt)
                                .startOf("day")
                                .fromNow()}
                            </div>
                          </div>
                          <div class="comment__display">
                            <div class="row--comment__body comment__body">
                              <div class="rich_content__container">
                                <span class="">{discussion.body}</span>
                              </div>
                            </div>
                            <d class="row--comment__footer">
                              <footer class="comment__footer">
                                <span class="links links--action links--with_text endorsement__icon">
                                  <i className="icon material-icons material-icon--thumb_up endorsement__icon fas fa-thumbs-up" />
                                  <span class="links__text valign_with_icon">
                                    {discussion.like_count}
                                  </span>
                                </span>
                                <span
                                  class="links links--action links--with_text comment__reply"
                                  onClick={() => {
                                    this.setState({ isEditorShown: true });
                                  }}
                                >
                                  <i class="icon material-icons material-icon--reply comment__reply fas fa-reply" />
                                  <span class="links__text valign_with_icon">
                                    Reply
                                  </span>
                                </span>
                                <div class="comment__footer--right">
                                  <div class="menu social_sharing_icon__menu">
                                    <div class="menu__toggle">
                                      <span>
                                        <i class="icon material-icons material-icon--share social_sharing_icon__icon fas fa-share-alt" />
                                      </span>
                                    </div>
                                  </div>
                                  <div class="tooltip__toggle favorites__tooltip">
                                    <span class="links links--action links--with_text links--text_only favorite favorite--link favorite--bookmark">
                                      <span class="links__text">
                                        <i class="icon material-icons material-icon--bookmark_border far fa-bookmark" />
                                        <span class="valign_with_icon">
                                          Save
                                        </span>
                                      </span>
                                    </span>
                                  </div>
                                  <div class="menu comment__menu_actions">
                                    <div class="menu__toggle">
                                      <i class="icon material-icons material-icon--more_vert fas fa-ellipsis-v" />
                                    </div>
                                  </div>
                                </div>
                              </footer>
                            </d>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
              );
            } else {
              return (
                /* <div class="conversation__load_more_button">
		 <i class="icon-down-open-big icon"></i>
		 <span class="links links--blue links--with_text links--text_only">
				 <span class="links__text">Load 2 More Comments</span>
		 </span>
		 <i class="icon-down-open-big icon"></i>
 </div> */
                <div class="conversation_replies">
                  <div name="comment-628799">
                    <div class="comment__wrapper comment--reply">
                      <div class="content_card comment">
                        <div class="comment__main">
                          <div class="flexItem flexContainer wd_alignItems--center d_alignItems--center wt_alignItems--center nt_alignItems--center p_alignItems--center wd_flexWrap--nowrap d_flexWrap--nowrap wt_flexWrap--nowrap nt_flexWrap--nowrap p_flexWrap--nowrap row--comment_header comment_owner--vip">
                            <div class="flexItem flexContainer user user--link user--default comment__owner_details">
                              <a
                                href="/profile/eksuen"
                                class="links links--normal links--with_text links--text_only"
                              >
                                <div class="avatar__wrapper user__avatar">
                                  <img
                                    alt=""
                                    class="responsive responsive_avatar"
                                    src={discussion.avatar}
                                  />
                                </div>
                              </a>
                              <div class="flexItem">
                                <div class="flexItem flexContainer wd_flexWrap--nowrap d_flexWrap--nowrap wt_flexWrap--nowrap nt_flexWrap--nowrap p_flexWrap--nowrap user__info--main">
                                  <div class="flexItem wd_flexGrow--0 d_flexGrow--0 wt_flexGrow--0 nt_flexGrow--0 p_flexGrow--0 username__container">
                                    <a
                                      href="/profile/eksuen"
                                      class="links links--normal links--with_text links--text_only username"
                                    >
                                      <span class="links__text">
                                        {discussion.username}
                                      </span>
                                    </a>
                                  </div>
                                  <span class="tag user__endorsements">
                                    697
                                  </span>
                                  <button
                                    type="button"
                                    class="follow_button button button--small button--blue button--bare"
                                  >
                                    <i class="icon icon-follow" />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div class="comment__misc_info_actions">
                              {moment(discussion.createdAt)
                                .startOf("day")
                                .fromNow()}
                            </div>
                          </div>
                          <div class="comment__display">
                            <div class="row row--comment__body comment__body">
                              <div class="rich_content__container">
                                <span class="">{discussion.body}</span>
                              </div>
                            </div>
                            <div class="row row--comment__footer">
                              <footer class="comment__footer">
                                <span class="links links--action links--with_text endorsement__icon">
                                  <i class="icon material-icons material-icon--thumb_up endorsement__icon fas fa-thumbs-up" />
                                  <span class="links__text valign_with_icon">
                                    {discussion.like_count}
                                  </span>
                                </span>
                                <span class="links links--action links--with_text comment__reply">
                                  <i class="icon material-icons material-icon--reply comment__reply fas fa-reply" />
                                  <span class="links__text valign_with_icon">
                                    Reply
                                  </span>
                                </span>
                                <div class="comment__footer--right">
                                  <div class="menu social_sharing_icon__menu">
                                    <div class="menu__toggle">
                                      <span>
                                        <i class="icon material-icons material-icon--share social_sharing_icon__icon fas fa-share-alt" />
                                      </span>
                                    </div>
                                  </div>
                                  <div class="tooltip__toggle favorites__tooltip">
                                    <span class="links links--action links--with_text links--text_only favorite favorite--link favorite--bookmark">
                                      <span class="links__text">
                                        <i class="icon material-icons material-icon--bookmark_border far fa-bookmark" />
                                        <span class="valign_with_icon">
                                          Save
                                        </span>
                                      </span>
                                    </span>
                                  </div>
                                  <div class="menu comment__menu_actions">
                                    <div class="menu__toggle">
                                      <i class="icon material-icons material-icon--more_vert fas fa-ellipsis-v" />
                                    </div>
                                  </div>
                                </div>
                              </footer>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default Discussion;
