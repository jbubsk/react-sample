var PostsCover = require('./components/posts/PostsCover'),
    POSTS = require('./model/Posts');

React.render(
    <PostsCover posts={POSTS}/>,
    document.body
);