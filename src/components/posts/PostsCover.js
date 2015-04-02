var HeaderBar = require('./HeaderBar'),
    FeedSide = require('./FeedSide'),
    PostSide = require('./PostSide'),
    PostsCover;

PostsCover = React.createClass({

    getInitialState: function () {
        var props = this.props;

        return {
            selectedPost: props.posts[0],
            selectedTab: 'all',
            posts: props.posts
        }
    },

    _getPostById: function (id) {
        var result, i = 0, length = this.props.posts.length;

        for (i; i < length; i++) {
            if (this.props.posts[i].id === id) {
                result = this.props.posts[i];
                break;
            }
        }
        return result;
    },
    _filterPost: function (tab, post) {
        if (tab === 'all') {
            return post;
        } else if (tab === 'favorite' && post.inFavoriteList) {
            return post;
        } else if (tab === 'reading' && post.inReadingList) {
            return post;
        }
    },
    _handleChangeInList: function (params) {
        var posts = [], result,
            self = this,
            tab = this.state.selectedTab;

        posts = this.props.posts.filter(function (post) {
            if (params.id === post.id) {
                if (params.type === 'favorite') {
                    post.inFavoriteList = params.value;
                } else {
                    post.inReadingList = params.value;
                }
            }

            result = self._filterPost(tab, post);
            if (result) {
                return result;
            }
        });

        this.setState({
            posts: posts
        });
    },
    _handleChangeCardSelection: function (id) {
        var selectedPost = this._getPostById(id);
        this.setState({
            selectedPost: selectedPost
        });
    },
    _handleChangeTabSelection: function (tab) {
        var posts = [], result, self = this,
            selectedPost;

        posts = this.props.posts.filter(function (post) {
            result = self._filterPost(tab, post);
            if (result) {
                return result;
            }
        });
        selectedPost = this._getPostById(posts.length > 0 ? posts[0].id : 0);
        this.setState({
            selectedTab: tab,
            selectedPost: selectedPost,
            posts: posts
        });
    },

    render: function () {

        return (
            <div id="page">
                <HeaderBar/>
                <div className="pageContent">
                    <div className="pageWrapper">
                        <FeedSide
                            posts={this.state.posts}
                            selectedTab={this.state.selectedTab}
                            selectedPost={this.state.selectedPost}
                            handleCardSelection={this._handleChangeCardSelection}
                            handleTabSelection={this._handleChangeTabSelection}
                            handleChangeInList={this._handleChangeInList}
                        />
                        <PostSide
                            post={this.state.selectedPost}
                        />
                        <div className="clear"></div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = PostsCover;
