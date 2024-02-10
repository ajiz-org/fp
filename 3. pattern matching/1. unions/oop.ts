class User {
  constructor(readonly id: number, readonly name: string) {
  }
}

const users = [new User(1, "Ali"), new User(2, "Salah")]

class NotFound extends Error {
  constructor() {
    super("User Not Found");
  }

}

class UserApi {
  getUserById(id: number) {
    const user = users.find(u => u.id == id)
    if (!user) return new NotFound()
    return user
  }
}


const main = (id: number) => {
  const api = new UserApi()
  const response = api.getUserById(id)
  if (response instanceof User) {
    console.log("Hi", response.name)
  } else {
    const  _ =response
    console.log("Error: User Not Found")
  }
}

main(4)

export { }