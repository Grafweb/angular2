export interface Page {
  title_meta: string;
  description_meta: string;
  keywords_meta: string;
  title: string;
  content: string;
}

export class PageData {
  public title_meta: string;
    public description_meta: string;
    public keywords_meta: string;
    public title: string;
    public content: string;
  // constructor(
  //   public title_meta: string,
  //   public description_meta: string,
  //   public keywords_meta: string,
  //   public title: string,
  //   public content: string
  // ) {  }
}