from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/index")
@app.route("/")
def index():
    return "Hello, world!"

@app.route("/test", defaults={"name":None})
@app.route("/test/<name>")
def test(name):
    if name:
        return "Olá, %s!" % name
    else:
        return "Olá, usuário!"

@app.route("/user", defaults={"name":None})
@app.route("/user/<name>")
def user(name):
    return render_template("index.html",user=name)

if __name__ == "__main__":
    app.run(debug=True)
