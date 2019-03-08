'use strict'

const Antl = use('Antl')

class StoreUser {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required|confirmed'
    }
  }

  /*
  Caso os erros de validação não fossem tratados no ExceptionHandler

  async fails (errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
  */

  /*
  para mensagens não internacionalizadas

  get messages () {
    return {
      'username.required': 'Você precisa informar um nome de usuário',
      'username.unique': 'O nome de usuário informado já existe',
      'email.required': 'Você deve informar um endereço de email.',
      'email.email': 'O email informado está num formato inválido.',
      'email.unique': 'O email informado já existe.',
      'password.required': 'Você precisa informar uma senha'
    }
  }
  */

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = StoreUser
