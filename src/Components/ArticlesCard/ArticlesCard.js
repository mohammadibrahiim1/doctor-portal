import React from "react";
import { Link } from "react-router-dom";

const ArticlesCard = ({ article }) => {
  const { image, blog_title, _id, published_date } = article;
  return (
    <div>
      <div className="w-[360px] bg-[#F1F1F1]">
        <div className="flex flex-col items-center ">
          <img className="w-[398px] h=-[249px]" src={image} alt="" srcset="" />

          <div className=" py-[23px] px-5">
            <button className="lato">{published_date}</button>
            <Link className=" text-[#1c1c1c]  text-lg font-semibold font-sans  ">
              <div className="py-5">{blog_title}</div>
            </Link>

            <Link to={`/article/${_id}`}>
              <button className="text-lg capitalize text-info "> read more</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesCard;
