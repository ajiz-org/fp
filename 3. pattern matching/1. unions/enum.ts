import { Enum, Match } from "./type"


const match: Match = ([key, value]) => options => options[key](value)


type User = { id: number, name: string }
const users: User[] = [{ id: 1, name: "Ali" }, { id: 2, name: "Salah" }]

type UserGetResult = Enum<{ success: User, error: string }>

const getUserById = (id: number): UserGetResult => {
  const user = users.find(u => u.id == id)
  if (!user) return ['error', "User Not Found"]
  return ['success', user]
}

const main = () => {
  const cases = match(getUserById(4))
  const output = cases({
    success: user => `Hi, ${user.name}`,
    error: message => `Error: ${message}`,
  })
  console.log(output)
}

main()