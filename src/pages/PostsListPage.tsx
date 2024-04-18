import React from 'react';
import {Link} from "react-router-dom";
import "../index.css"

import { ViewPost } from "../components/ViewPost.tsx";
import CommentInput from "../components/CommentInput.tsx";
import {usePosts} from "../provider/PostsContext.tsx";


const PostsListPage: React.FC = () => {
	const { posts, fetchPosts } = usePosts();
	fetchPosts();
	const sortedPosts = [...posts].sort((a, b) => b.created - a.created);

	return (
		<div className="container mx-auto mt-20 bg-gray-100 p-4">
			<h2 className="text-4xl font-bold mb-5">Список постов</h2>
			<div className="flex justify-end p-2 m-4 bg-white">
				<Link to="/posts/new">
					<button className="bg-blue-500 rounded-lg text-white py-2 px-4 hover:bg-blue-600">
						Создать пост
					</button>
				</Link>
			</div>
			<ul className="">
				{posts && sortedPosts.map(post => (
					<li
						key={post.id}
						className="bg-white rounded-md m-4"
					>
						<Link to={`/posts/${post.id}`}>
							<ViewPost post={post} />
							<CommentInput />
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PostsListPage;
