from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/validar-cupom', methods=['POST'])
def validar():
    dados = request.get_json()
    cupom = dados.get('cupom', '').strip().upper()

    if cupom == 'DESCONTO10':
        return jsonify({"valido": True, "mensagem":"Cupom de 10% aplicado"})
    else:
        return jsonify({"valido": False, "mensagem":"Cupom invalido"})

if __name__ == '__main__':
    app.run(debug=True, port=5000)