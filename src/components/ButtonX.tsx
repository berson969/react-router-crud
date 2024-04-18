import React from 'react';
import {useNavigate} from "react-router-dom";

const ButtonX: React.FC = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/posts")
    }

    return (
        <button onClick={handleBack} className="p-2 hover:text-gray-400">
            <i className="bi bi-x-lg"></i>
        </button>
    );
};

export default ButtonX;
