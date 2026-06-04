import sqlite3

conn = sqlite3.connect("database.db")

cursor = conn.cursor()

cursor.execute(
    '''
UPDATE users SET email='meuteste@gmail' WHERE name='fulano'
'''
)


conn.commit()
conn.close()