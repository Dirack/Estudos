import sqlite3

create_table_sql_statement = 'CREATE TABLE IF NOT EXISTS books(title TEXT, author TEXT)'
insert_into_table_sql_statement = "INSERT INTO books VALUES ('If Tomorrow Comes', 'Sidney Sheldon'), ('The Lincoln Lawyer', 'Michael Connelly')"
select_from_table_sql_statement = 'SELECT * FROM books'


class Database:
    def __init__(self, path: str):
        self.path = path

    def __enter__(self):
        self.connection = sqlite3.connect(self.path)
        self.cursor = self.connection.cursor()
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        if exc_type is not None:
            print(f'an error occurred: {exc_val}')


def main():
    with Database(':memory:') as db:
        db.cursor.execute(create_table_sql_statement)
        db.connection.commit()

        db.cursor.execute(insert_into_table_sql_statement)
        db.connection.commit()

        db.cursor.execute(select_from_table_sql_statement)

        print(db.cursor.fetchall())


if __name__ == '__main__':
    main()

# [('If Tomorrow Comes', 'Sidney Sheldon'), ('The Lincoln Lawyer', 'Michael Connelly')]
