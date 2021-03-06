import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Components, registerComponent, withMessages, withCurrentUser } from 'meteor/vulcan:core';
import { intlShape } from 'meteor/vulcan:i18n';
import { Posts } from '../../modules/posts/index.js';
import Users from 'meteor/vulcan:users';
import { withRouter } from 'react-router-dom';

class PostsEditForm extends PureComponent {
  renderAdminArea() {
    if (Users.canCreate({ collection: Posts, document: this.props.post, user: this.props.currentUser })) {
      return (
        <div className="posts-edit-form-admin">
          <div className="posts-edit-form-id">ID: {this.props.post._id}</div>
          <Components.PostsStats post={this.props.post} />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="posts-edit-form">
        {Users.isAdmin(this.props.currentUser) ? this.renderAdminArea() : null}
        <Components.SmartForm
          collection={Posts}
          documentId={this.props.post._id}
          successCallback={post => {
            this.props.closeModal();
            this.props.flash({ id: 'posts.edit_success', properties: { title: post.title }, type: 'success' });
          }}
          mutationFragmentName="PostPage"
          removeSuccessCallback={({ documentId, documentTitle }) => {
            // post edit form is being included from a single post, redirect to index
            // note: this.props.params is in the worst case an empty obj (from react-router)
            if (this.props.params._id) {
              this.props.history.push('/');
            }

            this.props.flash({ id: 'posts.delete_success', properties: { title: documentTitle }, type: 'success' });
            // todo: handle events in collection callbacks
            // this.context.events.track("post deleted", {_id: documentId});
          }}
          showRemove={true}
        />
      </div>
    );
  }
}

PostsEditForm.propTypes = {
  closeModal: PropTypes.func,
  flash: PropTypes.func,
  post: PropTypes.object.isRequired,
};

PostsEditForm.contextTypes = {
  intl: intlShape,
};

registerComponent({
  name: 'PostsEditForm',
  component: PostsEditForm,
  hocs: [withMessages, withRouter, withCurrentUser],
});
