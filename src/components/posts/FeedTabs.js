var FeedTabs = React.createClass({

    _handleTabSelection: function (tab) {
        this.props.handleTabSelection(tab);
    },

    _getSelectedTabClass: function (name) {
        return this.props.selectedTab === name ? 'selected' : '';
    },

    render: function () {
        return (
            <div className="feedTabs">
                <div
                    className="tab"
                    onClick={this._handleTabSelection.bind(null, 'all')}>
                    <span className={this._getSelectedTabClass('all')}>All post</span>
                </div>
                <div
                    className="tab"
                    onClick={this._handleTabSelection.bind(null, 'favorite')}>
                    <span className={this._getSelectedTabClass('favorite')}>Starred posts</span>
                </div>
                <div className="tab"
                    onClick={this._handleTabSelection.bind(null, 'reading')}>
                    <span className={this._getSelectedTabClass('reading')}>Reading lists</span>
                </div>
            </div>
        )
    }
});

module.exports = FeedTabs;