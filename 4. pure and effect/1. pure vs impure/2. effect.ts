let global = 3
const changeGlobal = () => {
    global = 4
}

const testImpure1 = () => {
    const initialState = global
    changeGlobal()
    if (global == initialState) {
        throw new Error("Unexpected")
    }
}


const getUsersCount = async () => {
    const response = await fetch('https://example.com/api/users/count')
    return (await response.json()).count
}

const addUser = async () => {
    await fetch('https://example.com/api/users', { method: 'POST', body: JSON.stringify({ name: 'some name' }) })
}

const testImpure2 = async () => {
    const initialState = await getUsersCount()
    await addUser()
    const newState = await getUsersCount()
    if (newState == initialState) {
        throw new Error("Unexpected")
    }

}

testImpure1()
testImpure2()

export { }