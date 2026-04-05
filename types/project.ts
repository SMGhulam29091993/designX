export interface IProject {
  id: string;
  userId: string;
  name: string;
  theme?: string;
  thumbnail?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IFrame {
  id: string;
  title: string;
  htmlContent: string;
  projectId: string;
  createdAt?: Date;
  updatedAt?: Date;
}
