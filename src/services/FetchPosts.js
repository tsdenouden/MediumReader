import XMLParser from 'react-xml-parser';

const FetchPosts = (author) => {
    const RSS_URL = `https://medium.com/feed/@${author}`;

    return fetch(RSS_URL)
        .then(rss => rss.text())
        .then(rss_text => {
            let rss_feed = new XMLParser().parseFromString(rss_text);
            rss_feed = rss_feed.children[0].children;

            // get posts from feed
            let new_posts = [];
            rss_feed
                .filter(element => element.name === 'item')
                .forEach(post => {
                    let attributes = post.children;
                    let new_post = {
                        title: attributes[0]?.value.replace('>', ''),
                        content: attributes[attributes.length-1]?.value
                    };
                    new_posts.push(new_post);
                })
            return new_posts;
        })
        .catch(err => {
            return err;
        })
}

export default FetchPosts;