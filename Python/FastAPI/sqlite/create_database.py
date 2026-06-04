# create_db.py

import sqlite3

conn = sqlite3.connect("database.db")
cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL
)
""")

cursor.execute("""
INSERT INTO users (name, email)
VALUES
('Rodolfo', 'rodolfo@email.com'),
('Maria', 'maria@email.com')
""")

conn.commit()
conn.close()