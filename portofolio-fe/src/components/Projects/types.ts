export interface Tag {
  label: string;
  color: string;
  textColor: string;
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  category: string;
  bg?: string;
  image: string;
  tags?: Tag[];
}
