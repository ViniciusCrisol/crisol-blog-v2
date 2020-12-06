interface IPost {
  _meta: { uid: string }
  title: string
  content: Array
  created_at: Date
  category: string
  description: { text: string }
}
