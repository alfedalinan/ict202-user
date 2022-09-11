const server = require('../src')

describe('User E2E', () => {
    
    it('Login E2E', async () => {
        const input = {
            email: 'alfed.a@email.com',
            password: 'someKindOfMyPassword'
        }
        
        const result = await server.executeOperation({
            query: `
                query {
                    loginUser(
                        email: "${input.email}",
                        password: "${input.password}"
                    ) {
                        id
                        firstName
                        lastName
                        email
                        role
                    }
                }
            `
        })

        expect(result).toBeTruthy()
        expect(result.data.loginUser.id).toBeTruthy()
        expect(result.data.loginUser.firstName).toBeTruthy()
        expect(result.data.loginUser.lastName).toBeTruthy()
        expect(result.data.loginUser.email).toBeTruthy()
    })

})