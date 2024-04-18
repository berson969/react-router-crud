import React, {createContext, useContext, useEffect, useState} from 'react';
import {PostsContextProps, PostsProviderProps, PostType} from "../models";
import axios, {AxiosResponse} from "axios";

const PostsContext = createContext<PostsContextProps>({ posts: [], fetchPosts: () => {} });
export const PostsProvider: React.FC<PostsProviderProps> = ({ children }) => {
    const [ posts, setPosts ] = useState<PostType[]>([])

    const fetchPosts = async () => {
        try {
            const response: AxiosResponse<PostType[]> = await axios.get(`${import.meta.env.VITE_BASE_URL}/posts`);
            setPosts(response.data);
        } catch (error) {
            console.error('Ошибка при загрузке списка постов:', error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);


    return (
        <PostsContext.Provider value={{ posts, fetchPosts }}>
            {children}
        </PostsContext.Provider>
    )

}

export const usePosts = () => {
    const { posts, fetchPosts } = useContext(PostsContext);
    return { posts, fetchPosts };
};
