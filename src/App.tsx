import './App.css'
import './index.css';
import PostsListPage from "./pages/PostsListPage.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreatePostPage from "./pages/CreatePostPage.tsx";
import ViewPostPage from "./pages/ViewPostPage.tsx";
import EditPostPage from "./pages/EditPostPage.tsx";
import {PostsProvider} from "./provider/PostsContext.tsx";
import {useEffect, useState} from "react";
import {PostType} from "./models";
import axios, {AxiosResponse} from "axios";

function App() {
    const [posts, setPosts] = useState<PostType[]>([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response: AxiosResponse<PostType[]> = await axios.get(`${import.meta.env.VITE_BASE_URL}/posts`);
            setPosts(response.data);
        } catch (error) {
            console.error('Ошибка при загрузке списка постов:', error);
        }
    };

    return (
      <PostsProvider posts={posts}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PostsListPage />} />
                <Route path="/posts" element={<PostsListPage />} />
                <Route path="/posts/new" element={<CreatePostPage />} />
                <Route path="/posts/:id" element={<ViewPostPage />} />
                <Route path="/posts/:id/edit" element={<EditPostPage />} />
            </Routes>

        </BrowserRouter>
      </PostsProvider>
    )
}

export default App;
