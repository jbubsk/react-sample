var PostSide = React.createClass({
    _reverseText: function (value) {
        return value.split('').reverse();
    },

    render: function () {
        if (!this.props.post) {
            content = '';
        } else {
            /* Non meaningful content for post */

            var postContent = "Tutorial Edit on GitHub" +
                "We'll be building a simple but realistic comments box that you can drop into a blog" +
                ", a basic version of the realtime comments offered by Disqus, LiveFyre or Facebook comments." +

                this.props.post.author +

                "A view of all of the comments" +
                "A form to submit a comment" +
                this.props.post.author +
                "It'll also have a few neat features:" +

                "Optimistic commenting: comments appear in the list before they're saved on the server so it feels fast." +
                this.props.post.author +
                "Markdown formatting: users can use Markdown to format their text." +
                "Want to skip all this and just see the source?" +
                this.props.post.authorSite +

                "Running a server " +
                "While it's not necessary to get started with this tutorial, later on we'll be adding " +
                this.props.post.author +
                "with and want to create your own server, please do. For the rest of you who might want to focus on learning about" +
                " React without having to worry about the server-side aspects, we have written simple servers in a number of languages - " +
                this.props.post.authorSite +
                "JavaScript (using Node.js), Python, Ruby, Go, and PHP. These are all available on GitHub. You can view " +
                "the source or download a zip file to get started.";

            postContent += this._reverseText(postContent);
            postContent += postContent;
            postContent += this._reverseText(postContent);

            var content =
                <div>
                    <div className="postDetails">
                        <div className="authorAvatar">
                            <img src={this.props.post.authorAvaUrl}/>
                        </div>

                        <div className="authorDetails">
                            <div className="detailsRow">
                                <span className="title">Author:</span>
                                <span className="value">{this.props.post.author}</span>
                            </div>
                            <div className="detailsRow">
                                <span className="title">Age:</span>
                                <span className="value">{this.props.post.age}</span>
                            </div>
                            <div className="detailsRow">
                                <span className="title">Posts:</span>
                                <span className="value">{this.props.post.posts}</span>
                            </div>
                            <div className="detailsRow">
                                <span className="title">Site:</span>
                                <span className="value">{this.props.post.authorSite}</span>
                            </div>
                        </div>
                        <div className="clear"></div>
                    </div>
                    <div className="postContent">
                        <div>
                            <h3>{this.props.post.postTitle}</h3>
                        </div>
                        <div>{postContent}</div>
                    </div>
                    <div className="clear"></div>
                </div>;
        }

        return (
            <div className="postSide">
                {content}
            </div>
        )
    }
});
module.exports = PostSide;