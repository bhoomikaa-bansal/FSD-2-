from flask import Flask, jsonify
import requests

app = Flask(__name__)

# 🔴 Replace with your actual Render URLs
CUSTOMER_URL = "https://two3bda70070-fsd-experiment11-1.onrender.com"
ORDER_URL = "https://two3bda70070-fsd-experiment11-2.onrender.com"

@app.route("/")
def home():
    return "API Gateway Running"

@app.route("/customers")
def customers():
    res = requests.get(f"{CUSTOMER_URL}/customers")
    return jsonify(res.json())

@app.route("/orders")
def orders():
    res = requests.get(f"{ORDER_URL}/orders")
    return jsonify(res.json())