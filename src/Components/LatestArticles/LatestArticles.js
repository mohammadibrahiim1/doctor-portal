import React from "react";

const articles = [
  {
    id: 1,
    article_title: "Open letter to the residents of Ellsworth, Maine",
    published_data: "18 August 2023",
    image: "https://i.ibb.co/yXyNkq3/Photo-3.png",
  },
  {
    id: 2,
    article_title: "What is a normal phenotype for aging mice?    ",
    published_data: "18 August 2023",

    image: "https://i.ibb.co/fxnYbYd/Photo-4.png",
  },
  {
    id: 1,
    article_title: "It was popularised inner the with the release of containing.",
    published_data: "18 August 2023",
    image: "https://i.ibb.co/khVv6kf/Photo-5.png",
  },
  {
    id: 1,
    article_title: "The Versatile Mouse Model for Rare Disease Research",
    published_data: "18 August 2023",
    image: "https://i.ibb.co/VpC4df7/Photo-6.png",
  },
];

const LatestArticles = () => {
  return (
    <div>
      <div className="pt-[104px] pb-[224px]">
        <div className="flex justify-between items-center">
          <div>
            <button className="lato text-center">News Update</button>
            <h1 className="text-[#1C1C1C] text-[1.875rem] font-sans font-semibold  py-5">Latest Healthcare Articles</h1>
          </div>
          <button className="btn bg-[#FFF] hover:bg-[#FFF] hover:border-[#DFDFDF] border-[#DFDFDF] text-[#0152A8] px-[1.938rem] py-[1.063rem] font-sans rounded-none ">
            Read All News
          </button>
        </div>

        <div className="grid grid-cols-2 justify-center items-center gap-[1.625rem] pt-[2.938rem]">
          {articles.map((article) => (
            <>
              <div>
                <div className="card  h-[147px]  card-side rounded-none bg-base-100 ">
                  <figure>
                    <img className="h-[147px]" src={article.image} alt="Movie" />
                  </figure>
                  <div className="card-body w-[335px] ">
                    <h2 className="card-title lato border-[#CECECE] text-gray-400 font-normal w-[261px] ">
                      {article.published_data}
                    </h2>
                    <p className="text-[#1C1C1C] font-semibold text-[1.25rem] font-sans">{article.article_title}</p>
                    <div className="card-actions justify-end"> </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestArticles;
