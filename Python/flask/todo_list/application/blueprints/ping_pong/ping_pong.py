from flask import Blueprint, request

ping_pong_bp = Blueprint("pingpong",__name__)

@ping_pong_bp.route("/ping")
def pingpong():
    return {"message":"pong"}, 200