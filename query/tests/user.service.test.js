const { login } = require('../src/application/services/user.service')

describe('User', () => {
    let id

    it('Login', async () => {
        const email = 'alfed.a@email.com'
        const password = 'someKindOfMyPassword'

        const loginData = await login(email, password)
        
        expect(loginData).toBeTruthy()
        expect(loginData.id).toBeTruthy()
        expect(loginData.firstName).toBeTruthy()
        expect(loginData.lastName).toBeTruthy()
        expect(loginData.email).toBeTruthy()
    })

})