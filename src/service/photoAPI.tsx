import { useEffect, useState} from 'react';
import axios from 'axios';
import About from '../routes/home/about';
import Banner from '../routes/home/banner';
import { Photo } from '../constant/photoInterFace';

const PhotoAPI= () => {
  const [data, setData] = useState<Photo[]>([]);
  const PhotoURL = import.meta.env.VITE_PHOTO_URL

  useEffect(() => {
    const PhotoData = async () => {
      try {
        const response = await axios.get(PhotoURL)
        const fetchedData: Photo[] = response.data.data.map((item: any) => ({
          id: item.id,
          attributes: {
            about: item.attributes.about.data.attributes.formats.small.url,
            banner: item.attributes.banner.data.attributes.formats.medium.url,
            file: item.attributes.file.data.attributes.url
          },
        }));
        setData(fetchedData)
      } catch (error) {
        console.error(error)
      }
    };
    PhotoData();
  }, []);

  return (
    <>
      <Banner photo={data}/>
      <About photo={data}/>
      
    </>
  );
};

export default PhotoAPI;