import { useEffect, useState} from 'react';
import axios from 'axios';
import SkillCard from '../component/skillCard';
import {Skill} from '../service/skillInterFace';

const SkillsAPI= () => {
  const [data, setData] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const SkillURL = import.meta.env.VITE_BASE_URL

  useEffect(() => {
    const SkillData = async () => {
      try {
        const response = await axios.get(SkillURL)
        const fetchedData: Skill[] = response.data.data.map((item: any) => ({
          id: item.id,
          attributes: {
            techName: item.attributes.techName,
            level: item.attributes.level,
            techLogo: item.attributes.techLogo.data.attributes.formats.thumbnail.url,
          },
        }));
        setData(fetchedData)
      } catch (error) {
        console.error(error)
      }
    };

    SkillData();
  }, []);

  return (
    <>
      <SkillCard skill={data}/>,
    </>
  );
};

export default SkillsAPI;