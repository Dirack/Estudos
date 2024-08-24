from flask import Blueprint

helloworld_bp = Blueprint("helloworld",__name__,template_folder="templates")

@helloworld_bp.route("/")
def index():
    return "Hello, world!", 200