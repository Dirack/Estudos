class Config(object):
    pass

class ProdConfig(Config):
    ENV='prod'
    DEBUG=False
    SQLALCHEMY_DATABASE_URI='sqlite:///estudo.db'

class TestConfig(Config):
    ENV='test'
    DEBUG=True
    SQLALCHEMY_DATABASE_URI='sqlite://'