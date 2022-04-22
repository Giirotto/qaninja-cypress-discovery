// --- npx cypress open --- (abrir interface gráfica do cypress)

import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('Register', () => {

    // beforeEach(function () {
    //     cy.fixture('deliver').then((d) => {
    //         this.deliver = d
    //     })
    // })

    it('Registration for delivery people', function () {

        var deliver = signupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)

    })

    it('Invalid legal document', function () {

        var deliver = signupFactory.deliver()

        deliver.cpf = '000000141xx'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        signup.alertMessageShouldBe('Oops! CPF inválido')

    })

    it('Invalid email', function () {

        var deliver = signupFactory.deliver()

        deliver.email = 'raffa.com.br'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        signup.alertMessageShouldBe('Oops! Email com formato inválido.')

    })


    context('Required fields', function () {

        const messages = [
            { filed: 'name', output: 'É necessário informar o nome' },
            { filed: 'cpf', output: 'É necessário informar o CPF' },
            { filed: 'email', output: 'É necessário informar o email' },
            { filed: 'postalcode', output: 'É necessário informar o CEP' },
            { filed: 'number', output: 'É necessário informar o número do endereço' },
            { filed: 'delivery_method', output: 'Selecione o método de entrega' },
            { filed: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function () {
            signup.go()
            signup.submit()
        })

        messages.forEach(function (msg) {
            it(`${msg.filed} is required`, function () {
                signup.alertMessageShouldBe(msg.output)
            })

        })

    })
})


//      Expressões Regulares        //
// input[parametro^=...] = começa com
// input[parametro$=...] = termina com
// input[parametro*=...] = contem