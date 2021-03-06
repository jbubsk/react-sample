var PostCard = require('./PostCard'),
    FeedTabs = require('./FeedTabs'),
    FeedSide;

FeedSide = React.createClass({

    componentWillMount: function () {
        var posts = this.props.posts;

        this.setState({
            posts: posts
        });
    },

    render: function () {
        var posts,
            props = this.props;

        if (this.props.posts.length > 0) {
            posts = this.props.posts.map(function (post) {
                return (
                    <PostCard
                        post={post}
                        key={post.id}
                        handleCardSelection={props.handleCardSelection}
                        onChangeInList={props.handleChangeInList}
                        selected={props.selectedPost.id === post.id}
                    />
                );
            });
        } else {
            if (props.selectedTab === 'favorite') {
                posts = <div className="emptyList">
                    <p>Ups...</p>
                    <span>You have no starred posts</span>
                </div>
            }
            if (props.selectedTab === 'reading') {
                posts = <div className="emptyList">
                    <p>Ups...</p>
                    <span>You have no posts in reading list</span>
                </div>
            }
        }
        return (
            <div className="feedSide">
                <FeedTabs
                    selectedTab={props.selectedTab}
                    handleTabSelection={props.handleTabSelection}
                />
                <div className="cardsWrapper">
                    {posts}
                </div>
            </div>
        )
    }
});

module.exports = FeedSide;
