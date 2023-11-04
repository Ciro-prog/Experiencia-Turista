
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

const Heart = ({id}) => {
    const [heartColor, setHeartColor] = useState("white");

    const handleLike = () => {
        setHeartColor((prev) => (prev === "#fa3e5f" ? "white" : "#fa3e5f"));
    }

    return (
        <AiFillHeart size={24} color={heartColor} onClick={(e) => {
            e.stopPropagation();
            handleLike();
        }}/>
    );
}

export default Heart;