import { Cast, Enum, Match } from "./type"

const cast = (x => x) as Cast

export const match: Match = option => options => {
  const [type, param] = cast(option, options)
  return options[type](param)
}


type User = { id: number, name: string }
const users: User[] = [{ id: 1, name: "Ali" }, { id: 2, name: "Salah" }]

type UserGetResult = Enum<{ success: User, error: string, exception: string }>

const getUserById = (id: number): UserGetResult => {
  const user = users.find(u => u.id == id)
  if (!user) return ['error', 'Not Found']
  return ['success', user]
}

const main = (id: number) => {
  const output = match(getUserById(id))({
    success: user => `Hi, ${user.name}`,
    error: message => `Error: ${message}`,
    exception: ex => `zzzz`
  })
  console.log(output)
}

main(4)