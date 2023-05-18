export interface Post{
  title:string,
  content:string,
  id?:string
}
export class PostResponseModel {
  [key:string]: RootResponseModel;
}

export class RootResponseModel {
  content!: string;
  title!: string;
  id?:string
}
