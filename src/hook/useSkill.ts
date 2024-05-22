import { useEffect, useState} from 'react';
import axios from 'axios';
import { skills } from '../component/skillCard';

const useSkill= (section:string) => {
  const baseURL = import.meta.env.VITE_BASE_URL
  const [data, setData] = useState<skills[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const Skill = async () => {
      try {
        const { data: response } = await axios.get(baseURL+section);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error)
      }
    };

    Skill();
  }, []);

  return {
    data,
    loading,
  };
};

export default useSkill;