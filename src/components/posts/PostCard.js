var PostCard = React.createClass({

    _handleStarClick: function (e) {
        var props = this.props;

        e.stopPropagation();
        this.props.onChangeInList({
            id: props.post.id,
            type: 'favorite',
            value: !props.post.inFavoriteList
        });
    },

    _handleReadingListClick: function (e) {
        var props = this.props;

        e.stopPropagation();
        this.props.onChangeInList({
            id: props.post.id,
            type: 'reading',
            value: !props.post.inReadingList
        });
    },

    _handleCardSelection: function () {
        this.props.handleCardSelection(this.props.post.id);
    },

    render: function () {
        var classes = (this.props.selected ? 'selectedCard' : '') + ' postCard';
        return (
            <div
                className={classes}
                onClick={this._handleCardSelection}>

                <div className="picture">
                    <img src={this.props.post.postPictureUrl}/>
                </div>
                <div className="info">
                    <div className="author">
                        <span>{this.props.post.author}</span>
                    </div>
                    <div className="postTitle">
                        <span>{this.props.post.postTitle}</span>
                    </div>
                </div>

                <div className="icons">
                    <div
                        className="star"
                        onClick={this._handleStarClick}>

                        <img src={this.props.post.inFavoriteList ? 'img/star-yellow.png' : 'img/star-grey.png'}/>
                    </div>
                    <div
                        className="read-list"
                        onClick={this._handleReadingListClick}>

                        <img src={this.props.post.inReadingList ? 'img/notelist-blue.png' : 'img/notelist-grey.png'}/>
                    </div>
                </div>
                <div className="clear"></div>
            </div>
        )
    }
});

module.exports = PostCard;