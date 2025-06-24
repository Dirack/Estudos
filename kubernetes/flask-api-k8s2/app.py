from flask import Flask, jsonify
import os

app = Flask(__name__)

@app.route("/hello")
def hello():
    message = os.getenv("GREETING_MESSAGE","hello")
    return message

@app.route("/status")
def status():
    return jsonify({"status":"ok"})

if __name__ == "__main__":
    app.run(debug=True,host="0.0.0.0")