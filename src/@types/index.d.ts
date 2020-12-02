interface IPost {
  node: {
    _meta: { uid: string };
    title: string;
    color: string;
    created_at: string;
    categories: string;
    description: { text: string };
  };
}
