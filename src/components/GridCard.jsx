import { useEffect, useState } from "react";
import { Card } from "./Card";

export const GridCard = () => {
  const [photoData, setImages] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch("https://picsum.photos/v2/list?limit=8");
      const data = await res.json();
      setImages(data);
    };

    fetchImages();
  }, []);
  //56:04
  return (
    <div className="lg:mt-20 flex flex-wrap justify-center space-x-6">
      {photoData.length > 0 ? (
        photoData.map((photo) => (
          <Card
            key={photo.id}
            img={photo.download_url}
            title={photo.author}
            user={photo.author.split(" ").join("_")}
          />
        ))
      ) : (
        <p className="text-lg font-bold">Loading Photos...</p>
      )}
    </div>
  );
};
