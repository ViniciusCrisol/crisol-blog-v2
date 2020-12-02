interface IPost {
  node: {
    _meta: { uid: string };
    title: string;
    created_at: string;
    categories: string;
    thumbnail: {
      url: string;
    };
    color: string;
    description: { text: string };
  };
}
