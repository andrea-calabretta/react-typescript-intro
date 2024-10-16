import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Photo } from "./model/photo";

const PhotoDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [photo, setPhoto] = useState<Photo | null>(null);
  console.log(id);

  useEffect(() => {
    axios
      .get<Photo>(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((res) => setPhoto(res.data));
  }, [id]);

  return (
    <div>
      <h1>Photo: {photo?.title}</h1>
      <div>{photo?.url}</div>
      <a href={photo?.url} target="_blank">
        <img src={photo?.thumbnailUrl} alt={photo?.title} />
      </a>
    </div>
  );
};

export default PhotoDetails;
