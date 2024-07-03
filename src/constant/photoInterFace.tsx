export interface Photo {
    id: number;
    attributes: {
      about: any;
      banner: any;
      file: any
    }
  }
  
  export interface PhotoListProps {
    photo: Photo[];
  }
  