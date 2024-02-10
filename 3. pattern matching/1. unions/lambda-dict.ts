type User = { id: number, name: string }
const users: User[] = [{ id: 1, name: "Ali" }, { id: 2, name: "Salah" }]

type Result<R, E> = <V>(handlers: { success: (x: R) => V, failure: (y: E) => V }) => V

type Error = { message: string }

type GetUserById = (id: number) => Result<User, Error>

const getUserById: GetUserById = id => ({ failure, success }) => {
  const user = users.find(u => u.id == id)
  if (!user) return failure({ message: "User Not Found" })
  return success(user)
}

const main = () => {
  const output = getUserById(4)({
    success: user => `Hi, ${user.name}`,
    failure: error => `Error: ${error.message}`,
  })
  console.log(output)
}

main()

export { }