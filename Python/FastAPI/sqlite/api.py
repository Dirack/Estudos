# main.py

from fastapi import FastAPI
import sqlite3

app = FastAPI()

DATABASE = "database.db"


@app.get("/users")
def get_users():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row

    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users")

    users = [dict(row) for row in cursor.fetchall()]

    conn.close()

    return users