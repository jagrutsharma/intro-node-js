const {findUser, deleteUser} = require('./users')
const assert = require('chai').assert
// expect is from jest, do not import from chai.

// write some tests
describe('users_test', () => {
	describe('users_test - find user', () => {
		it('find user - valid id', async () => {
			try {
				const res = await findUser(1)
				expect(res.id).toBe(1)
				expect(res.email).toBe('readycoder1@gmail.com')
			} catch (error) {
				assert(false, 'exception should not be thrown while trying to find user 1')
			}
		})

		it('find user - invalid id', async () => {
			try {
				await findUser(100)
				assert(false, 'exception should be thrown for invalid user');
			} catch (error) {
				assert(error.message === 'No user with id \"100\"')
			}
		})
	})

	describe('users_test - delete user', () => {
		it('delete user - valid id', async () => {
			try {
				const res = await deleteUser(1)
				expect(res.id).toBe(1)
			} catch (error) {
				assert(false, 'exception should not be thrown while trying to delete user 1')
			}
		})

		it('delete user - invalid id', async () => {
			try {
				await deleteUser(100)
				assert(false, 'exception should be thrown for trying to delete invalid user');
			} catch (error) {
				assert(error.message === 'No user with id \"100\"')
			}
		})
	})
})