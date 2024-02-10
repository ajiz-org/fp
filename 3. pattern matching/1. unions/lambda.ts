type User = { id: number, name: string }
const users: User[] = [{ id: 1, name: "Ali" }, { id: 2, name: "Salah" }]

type Or<T, V> = <R>(firstConsumer: (x: T) => R, secondConsumer: (y: V) => R) => R

type Error = { message: string }

type GetUserById = (id: number) => Or<User, Error>

const getUserById: GetUserById = id => (successHandler, failureHandler) => {
  const user = users.find(u => u.id == id)
  if (!user) return failureHandler({ message: "User Not Found" })
  const v = successHandler(user)
  return v
}

const main = () => {
  const output = getUserById(4)(
    user => `Hi, ${user.name}`,
    error => `Error: ${error.message}`,
  )
  console.log(output)
}

main()

export { }