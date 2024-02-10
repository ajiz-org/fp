class User {
  constructor(readonly id: number, readonly name: string) {
  }
}

const users = [new User(1, "Ali"), new User(2, "Salah")]

class UserApi {
  getUserById(id: number) {
    const user = users.find(u => u.id == id)
    if (!user) return new Error("User Not Found")
    return user
  }
}


const main = () => {
  const api = new UserApi()
  const user = api.getUserById(4)
  if (user instanceof User) {
    console.log("Hi", user.name)
  } else {
    console.log("Error: ", user.message)
  }
}

main()

export { }