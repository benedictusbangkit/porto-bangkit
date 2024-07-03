import axios from "axios";
import { useState, useEffect } from "react";
import ProjectCard from "../component/projectCard";
import { Project } from "../constant/projectInterFace";


const ProjectAPI = () => {
  const [data, setData] = useState<Project[]>([]);
  const ProjectURL = import.meta.env.VITE_PROJECT_URL

  useEffect(() => {
    const ProjectData = async () => {
        try {
            const response = await axios.get(ProjectURL)
            const fetchedData: Project[] = response.data.data.map((item: any) => ({
                id: item.id,
                attributes: {
                    project_name: item.attributes.project_name,
                    project_desc: item.attributes.project_desc,
                    image: item.attributes.image.data.attributes.formats.medium.url,
                    link: item.attributes.link,
                    github: item.attributes.github,
                    tech_stack: item.attributes.tech_stack.data.map((obj: any) => ({
                      url: obj.attributes.formats.thumbnail.url
                    }))
                },
            }));
            setData(fetchedData)
        } catch (error){
            console.error(error)
        }
    };
    ProjectData();
  }, []);
  return(
    <>
        <ProjectCard project={data}/>
    </>
  )
};

export default ProjectAPI;