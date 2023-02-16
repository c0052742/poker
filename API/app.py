# TODO: either fix flask_pymongo or rewrite so that pymongo works
from flask import Flask, request, jsonify
import pymongo
from flask_pymongo import PyMongo
app = Flask(__name__)

# details about the mongoDB
conn_str = "mongodb+srv://wikipedijus:aScVfgR8J9bPOKgj@cluster0.vrqqdhw.mongodb.net/?retryWrites=true&w=majority"
client = pymongo.MongoClient(conn_str, serverSelectionTimeoutMS=5000)
try:
    print(client.server_info())
except Exception:
    print("Unable to connect to the server.")

# Setting up DB

app.config['MONGO_URI'] = "mongodb+srv://wikipedijus:aScVfgR8J9bPOKgj@cluster0.vrqqdhw.mongodb.net/?retryWrites=true&w=majority"
mongo = PyMongo(app)


@app.route('/register', methods=['POST'])
def create_user():
    user = {
        'name': request.json['name'],
        'password': request.json['password'],
        'email': request.json['email'],
        'postcode': request.json['postcode']
    }
    result = mongo.db.users.insert_one(user)
    return jsonify({'id': str(result.inserted_id)})


@app.route('/users', methods=['GET', 'POST'])
def stat():
    # posting stats to the DB
    if request.methods == 'POST':
        stats = {
            'name': request.json['name'],
            'date': request.json['date'],
            'place': request.json['place'],
            'won': request.json['won'],
            'amountWon': request.json['amountWon'],
            'buyin': request.json['buyin']
        }
        result = mongo.db.users.insert_one(stats)
        return jsonify({'id': str(result.inserted_id)})
    else:
        stats = mongo.db.users.find()
        output = []
        for stat in stats:
            output.append({'name': stat['name'],
                           'date': stat['date'],
                           'place': stat['place'],
                           'won': stat['won'],
                           'amountWon': stat['amountWon'],
                           'buyin': stat['buyin']})
        return jsonify({'result': output})
