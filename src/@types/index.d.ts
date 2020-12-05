interface IPost {
  _meta: { uid: string }
  content: Array
  title: string
  color: string
  created_at: Date
  category: string
  description: { text: string }
}
