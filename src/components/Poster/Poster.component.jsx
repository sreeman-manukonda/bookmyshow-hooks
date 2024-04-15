import React from "react";

const Poster = (props) => {
  return(
    <>
     <div className="flex flex-col items-start gap-1">
       <div className="h-80">
        <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.title} className="w-full h-full rounded-xl" />
       </div>
       <h3
       className={`text-lg ${
         props.isDark ? "text-white" : "text-gray-700"
       }`}>{props.title}</h3>
       <p
       className={`text-lg ${
         props.isDark ? "text-white" : "text-gray-700"
       }`}>{props.subtitle}</p>
     </div>
    </>
  );
};

export default Poster;
