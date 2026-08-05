import React from "react";

interface ImageProps {
  src: string;
}

const Image = ({ src }: ImageProps) => {
  return (
    <img
      src={src}
      className="w-full h-80 center object-cover rounded-sm shadow-md"
      alt=""
    />
  );
};

export default Image;
