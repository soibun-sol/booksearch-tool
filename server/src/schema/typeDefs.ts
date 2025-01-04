const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]!
  }

  type Book {
    _bookId: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }
  
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(user: UserInput!): Auth
    saveBook(authors: [String], bookId: ID, image: String, link: String, title: String, description: String): User
    removeBook(bookId: ID!): User
  }
`;

export default typeDefs;