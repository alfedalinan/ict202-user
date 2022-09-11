const server = require('../src')

describe('User E2E', () => {
    let id
    it('Create E2E', async () => {
        const input = {
            firstName: "Alfed",
            lastName: "A",
            email: "alfed.a@gmail.com",
            password: "someKindOfPassword"
        }

        const result = await server.executeOperation({
            query: `
                mutation {
                    createUser(input: {
                        firstName: "${input.firstName}",
                        lastName: "${input.lastName}",
                        email: "${input.email}",
                        password: "${input.password}"
                    }) {
                        id
                        firstName
                        lastName
                        email
                    }
                }
            `
        })

        expect(result).toBeTruthy()
        expect(result.errors).toBeUndefined()
        expect(result.data.createUser.id).toBeTruthy()
        expect(result.data.createUser.firstName).toBeTruthy()
        expect(result.data.createUser.lastName).toBeTruthy()
        expect(result.data.createUser.email).toBeTruthy()

        id = result.data.createUser.id
    })

    it('Update E2E', async () => {
        const input = {
            firstName: "Alfeds",
            lastName: "Al",
            email: "alfed.a@gmail.com",
            password: "someKindOfPassword"
        }

        const result = await server.executeOperation({
            query: `
                mutation {
                    updateUser(
                        id: ${id},
                        input: {
                            firstName: "${input.firstName}",
                            lastName: "${input.lastName}",
                            email: "${input.lastName}",
                            password: "${input.password}"
                        }
                    ) {
                        id
                        firstName
                        lastName
                        email
                    }
                }
            `
        })
        
        expect(result).toBeTruthy()
        expect(result.errors).toBeUndefined()
        expect(result.data.updateUser.firstName).toEqual(input.firstName)
        expect(result.data.updateUser.lastName).toEqual(input.lastName)
    })

    it('Delete E2E', async () => {

        const result = await server.executeOperation({
            query: `
                mutation {
                    removeUser(id: ${id})
                }
            `
        })

        expect(result).toBeTruthy()
        expect(result.errors).toBeUndefined()
        expect(result.data.removeUser).toBeTruthy()
    })

})