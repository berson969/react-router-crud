import React from 'react';
import {PostType} from "../models";
import calculateTimeInterval from "../functions/calculateTimeInterval.ts";

export const ViewPost: React.FC<{post: PostType}> = ({ post }) => {
    const { content, created } = post;

    return (
        <div className="p-4 font-bold">
            <div className="flex justify-between p-2">
                <div className="flex">
                    <i className="px-4 text-5xl bi bi-emoji-laughing"></i>
                    <div className=" flex flex-col justify-start">
                        <h3 className="text-blue-500 text-left">Ilnaz Gilyazov</h3>
                        <div className="flex">
                            <h4 className="text-left text-sm">Основатель группы</h4>
                            <p className="px-2">•</p>
                            <div className="text-sm font-yeseva font-normal">{calculateTimeInterval(created)}</div>
                        </div>
                    </div>
                </div>
                <i className="bi bi-chevron-compact-down text-2xl"></i>
            </div>
            <div className="relative">
                <div className="text-3xl text-left font-dejavu p-4 ">{content}</div>
                <div className="absolute left-0 bottom-0 w-full h-px bg-gray-300"></div>
            </div>

            <div className="relative">
                <div className="flex text-sm justify-around m-4">
                    <span>
                        <i className="bi bi-hand-thumbs-up-fill p-2"></i>
                        Нравиться
                    </span>
                    <span>
                        <i className="bi bi-chat-right-dots-fill p-2"></i>
                        Комментировать
                    </span>
                </div>
                <div className="absolute left-0 -bottom-3 w-full h-px bg-gray-300"></div>
            </div>
        </div>
    );
};
