export interface Project {
    id: number;
    attributes: {
      project_name: string;
      project_desc: string;
      tech_stack: any;
      link: string;
      github: string;
      image: any;
    }
  }
  
  export interface ProjectListProps {
    project: Project[];
  }
  