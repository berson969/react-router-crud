import {ReactNode} from "react";

export interface PostType {
	id: number;
	content: string;
	created: number;
}

export interface PostsProviderProps {
	children: ReactNode;
};

export interface PostsContextProps {
	posts: PostType[];
	fetchPosts: () => void;
};

export interface ButtonsComponentProps {
	nameBtn: string,
	id?: string | undefined
}

export interface ButtonsSettingProps {
	colorBtn: string,
	path: string,
	handleClick?: () => void,
	type?: "submit" | "reset" | "button"
}
