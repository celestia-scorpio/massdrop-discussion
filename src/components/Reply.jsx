import React, { Component } from "react";
import "./stylesheet/style.css";
import "./stylesheet/iconFonts.css";
import "./stylesheet/index.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export class Reply extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAdded: false,
      comment: props.comment,
      editorHtml: "",
      isEditorShown: false,
      quillPlaceholder: "Add a reply..."
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.createComment = this.createComment.bind(this);
  }

  // handleChange(html) {
  //     this.setState({ editorHtml: html });
  // }

  // createComment() {
  //     const { comment, editorHtml } = this.state;
  //     console.log('comment', comment);
  //     this.props.submitReply(comment.comment_review_id, editorHtml);
  //axios post request  - saving components (comment from props)
  //is success - need to render without refreshing
  // e.preventDefault()
  // }

  //   <ReactQuill value={this.state.text}
  //                               onChange={this.handleChange} />
  // onClick={() => {
  //                 this.setState({ isEditorShown: false });

  render() {
    return (
      <div className="reply_pop">
        {this.state.isEditorShown ? <div>hooooooooo</div> : null}
      </div>
    );
  }
}
export default Reply;

// <div class="comment__field--reply comment__field comment__field--focused">
// <div class="row row--comment_field_main">
//     <div class="avatar__wrapper comment_field__user_avatar">
//         <img alt="" class="avatar" src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" />
//     </div>
//     <div class="flexItem comment_field_main">
//         <div class="row reply_to__user">
//             <div class="flexItem flexContainer user user--default comment__reply_owner">
//                 <div class="avatar__wrapper user__avatar">
//                     <img alt="" class="avatar" src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" />
//                 </div>
//                 <div class="flexItem">
//                     <div class="flexItem flexContainer wd_flexWrap--nowrap d_flexWrap--nowrap wt_flexWrap--nowrap nt_flexWrap--nowrap p_flexWrap--nowrap user__info--main">
//                         <div class="flexItem wd_flexGrow--0 d_flexGrow--0 wt_flexGrow--0 nt_flexGrow--0 p_flexGrow--0 username__container">
//                             <div class="username">PotatoPerson
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div class="comment__editor comment__editor--new_reply">
//             <div class="row row--comment__editor">
//                 <div class="rich_content_editor text_editor text_editor--focus rich_content_editor--focused">
//                     <ReactQuill value={this.state.text}
//                                 onChange={this.handleChange} />
//                     <div class="row row--comment_field_footer">
//                         <button type="button" disabled="" class="button button--small button--blue button--solid button--disabled">Submit</button>
//                         <button type="button" class="button button--small button--ghost button--bare">Cancel</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// </div>
