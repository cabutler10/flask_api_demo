from flask import Flask, jsonify, request, make_response
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/somefunction',methods = ['POST', 'GET'])
def login():
   if request.method == 'POST':
      machine = request.args.get('name')
      year = request.args.get("password")
    
       #your algorithm here
      payload = 'you successfully called the backend!!'
      return make_response(jsonify(payload))
   else:
      machinesList = ['CAT-3945','CAT-3458',"CAT-4950"]
      return make_response(jsonify(machinesList))

if __name__ == "__main__":
    app.run(port=7000)
