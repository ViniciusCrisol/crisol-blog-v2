interface IPost {
  node: {
    _meta: { uid: string };
    title: string;
    color: string;
    created_at: Date;
    category: string;
    description: { text: string };
  };
}
