interface IRepo {
  id: string;
  name: string;
  full_name: string;
  description: string;
  language: string;
  private: boolean;
}

export interface IProps {
  data: IRepo[];
}
