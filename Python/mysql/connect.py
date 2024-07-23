import mysql.connector

config = {
  'user': 'root',
  'password': '',
  'host': '127.0.0.1',
  'database': 'estudo',
  'raise_on_warnings': True
}

try:
    cnx = mysql.connector.connect(**config)
    print("Connection successful")
except mysql.connector.Error as err:
    print(f"Error: {err}")
finally:
    if cnx.is_connected():
        cnx.close()
