import { useEffect, useState } from "react";
import { Photo } from "./model/photo";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Catalog = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get<Photo[]>("https://jsonplaceholder.typicode.com/photos")
      .then((res) => setPhotos(res.data.filter((photo) => photo.id < 11)));
  }, []);

  return (
    <div>
      <h1>Catalog</h1>
      <div>
        {photos.map((photo) => {
          return (
            <>
              <Link key={photo.id} to={`${photo.id}`}>
                <img
                  src={photo.thumbnailUrl}
                  alt={photo.title}
                  key={photo.id}
                  height={100}
                />
              </Link>

              {/* <img
                onClick={() => navigate(`${photo.id}`)}
                src={photo.thumbnailUrl}
                alt={photo.title}
                key={photo.id}
                height={100}
              /> */}
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Catalog;
