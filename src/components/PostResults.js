import React, { useContext } from 'react';
import PostCard from './PostCard';
import { PostContext } from './PostContext';

export default function PostResults() {
  const { posts } = useContext(PostContext);

  return (
    <div className="row">
      {posts.map((post) => (
        <React.Fragment>
          <PostCard
            key={post.title}
            title={post.title}
            description={post.description}
            details={post.details}
          />
        </React.Fragment>
      ))}
    </div>
  );
}
