const { create, update, remove } = require('../src/application/services/user.service')

describe('User', () => {
    let id

    it('Create', async () => {
        const data = {
            firstName: 'Alfed',
            lastName: 'A',
            email: 'alfed.a@email.com',
            password: 'someKindOfMyPassword',
            role: 1
        }

        const created = await create(data)
        id = created.id

        expect(created).toBeTruthy()
        expect(created.hasOwnProperty('id')).toBeTruthy()
    })

    it('Update', async () => {
        const data = {
            firstName: 'Alfeds',
            lastName: 'Al',
            email: 'alfed.a@email.com',
            password: 'someKindOfMyPassword',
            role: 1
        }

        const updated = await update(id, data)

        expect(updated).toBeTruthy()
        expect(updated.firstName).toEqual(data.firstName)
        expect(updated.lastName).toEqual(data.lastName)
    })

    it('Delete', async () => {
        const deleted = await remove(id)

        expect(deleted).toBeTruthy()
    })

})