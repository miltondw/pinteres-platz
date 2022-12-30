import React from "react";

export const Card = ({ img, title, user }) => {
  return (
    <div className="w-contain h-contain rounded-lg my-2">
      <div className="p-2">
        <figure>
          <img
            className="rounded-lg w-72 h-72 object-cover"
            src={img}
            alt="img"
          />
        </figure>
        <div className="p-2 ">
          <h4 className="text-lg">{title}</h4>
          <h5 className="text-sm">@{user}</h5>
        </div>
      </div>
    </div>
  );
};
