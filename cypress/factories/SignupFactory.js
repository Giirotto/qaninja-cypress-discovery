var faker = require('faker')
var cpf = require('gerador-validador-cpf')


export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
        name: `${firstName} ${lastName}`,
        cpf: cpf.generate(),
        email: faker.internet.email(firstName),
        whatsapp: '11999999999',
        address: {
            postalcode: '06455030',
            street: 'Alameda Xingu',
            number: '350',
            details: 'Justa',
            district: 'Alphaville Centro Industrial e Empresarial/Alphaville.',
            city_state: 'Barueri/SP'
        },
        delivery_method: 'Moto',
        cnh: 'cnh-digital.jpg'
        }

        return data

    }

}