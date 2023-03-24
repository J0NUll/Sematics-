const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    it('should login with invalid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('wwwddwdwdwdwd', 'wdwdadadadwdwad')

        await expect(LoginPage).toBeExisting()

        await expect(LoginPage).toHaveTextContaining

        ('This is a invalid entry for Username and Password')
    })
})


