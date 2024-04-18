import React from 'react';

const CommentInput: React.FC  = () => {
    return (
        <div className="flex">
            <i className="flex w-11 px-4 text-3xl bi bi-emoji-laughing items-center"></i>
            <div className="flex-1 relative mx-5">
                <input
                    type="text"
                    placeholder="Напишите комментарий..."
                    className="w-full bg-gray-100 border-2 border-gray-300 m-2 px-2 py-1 rounded-full font-normal placeholder:font-normal placeholder:text-sm"
                />
                <div className="absolute right-3 bottom-3 flex gap-4">
                    <i className="bi bi-emoji-smile"></i>
                    <i className="bi bi-camera"></i>
                    <i className="bi bi-filetype-gif"></i>
                    <i className="bi bi-xbox"></i>
                </div>
            </div>

        </div>
    );
};

export default CommentInput;
