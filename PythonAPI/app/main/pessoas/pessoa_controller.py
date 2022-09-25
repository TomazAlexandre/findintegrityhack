from flask_restplus import Resource, Namespace, fields
from flask import request

from PythonAPI.app.main.pessoas.pessoa_db import PessoaDb


api = Namespace('Pessoa',description='Manutenção dados de pessoa')
#definição de modelo que será validado ao receber post
modelo = api.model('PessoaModel', {
    'id': fields.Integer,
    'nome': fields.String,
    'endereco': fields.String
})

@api.route('/')
class PessoaController(Resource):
    @api.response(200, "Busca realizada com sucesso") #documentação para tipo de respostas
    def get(self):
        return PessoaDb.obter(), 200
    @api.expect(modelo) #espera modelo ao criar nova pessoa
    def post(self):
        return PessoaDb.adicionar(request.json), 201