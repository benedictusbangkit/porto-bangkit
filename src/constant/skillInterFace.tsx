export interface Skill {
  id: number;
  attributes: {
    techLogo: any;
    techName: string;
    level: string;
  }
}

export interface SkillListProps {
  skill: Skill[];
}
