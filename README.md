# GraphQL 

What is GraphQL?

1) new API Standard that was invented & open-sourced by Facebook
2) enables declarative data fetching ( means clinet can ask for what data it wants )
3) GraphQL server exposes single endpoint and responds to queries

A query Language for APIs

A more efficient Alternative to REST

1. Increased mobile usage create need for efficient data loading
2. Variety of different front end frameworks and platforms on the clinet side
3. Fast developmnet speed and expectation for rapid feature development

### Netflix has  Falcor

## Why GraphQL is better REST?

Generic REST Api is not compatable with rapidly changing client requirements. GraphQL provided more more flexibilty and efficiency while interacting with REST api.

### Example:

Exanple: Blog

We might need to fetch users data at different pages in an Application. Suppose it looks like
{
  name,
  dob,
  address
}

but to be frank every data from that end point might not be required in each page. This put weight on user's data plan.


### How does GraphQL works?

1) There's only one endpoint
2) The front end's gonna send an query in that endpoint with a POST request.

query {
  User(id: "er3tg439frjw") {
    name
    posts {
      title
    }
    followers(last: 3) {
      name
    }
  }
}

server will read this and send it back

the root key of a GrapfQL response is "data"

Response: 
  {
    "data": {

    }
  }

### Problem solved (1): No more Over- and Underfetching
1) Over fetching: no unnecessary data fetching is stoped
2) Undefetching: An end point doesn't send enough right information need more callings.

## Prevents Rapid Product Iterations: 

One way genral REST can avoid over and undefetching is 

providing specific end points for different views.
but, any iteratioin in the view will trigger changes in backend and this is not ideal for product iterations

1) Reduces productivity
2) User feed back cycles can't be attained fast

### Advantages:

1) Great oppertunities for instrumenting and performance monitoring
2) Strong type system to define capbilities of an API
3) Schema serves as contract betwen client and server.

## GraphQL Core concept

Schema Defination Language

### using SDL to define 2 different types

type Person {
  name: String!
  age: Int!
}

type Post {
  title: String!
}

### putting relation between two types

type Person {
  name: String!
  age: Int!
  posts: [Post!]! 
}

type Post {
  title: String!
  author: Person!
}

Peron one2many Post

## Example Query

{
  allPersons {
    name
    age
  }
}

allPerson is called `root` of the query

and every hing inside `root` is `payload`

`root` can have argument passed to it

### Data manupulation with mutation

3 kind: 
1) Creating
2) Updating
3) Deleting


Example:
  mutation {
    createPerson(name: "Bob", age: 36) {
      name
      age
    }
  }
  // fetches back name and age of created data
  *** this example helps in updating data a send it back instantly with changes

  ## As GraphQl generates new Id for Create actions

    this kind of query will be handy
    mutation {
      createPerson(name: "Bob", age: 26 ) {
        id
      }
    }

  ### 

