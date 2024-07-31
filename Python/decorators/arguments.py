def a_decorator_arguments(func):
    def wrapper(*args,**kwargs):
        print('The positional args: ', args)
        print('The keyword args: ', kwargs)
        func(*args)
    return wrapper

@a_decorator_arguments
def function_no_args():
    print('No arguments here')

function_no_args()

def a_decorator(func):
    def wrapper(arg1,arg2):
        print('My arguments are: {0}, {1}'.format(arg1,arg2))
        func(arg1,arg2)
    return wrapper

@a_decorator
def cities(c1, c2):
    print('Cities I love {0}, {1}'.format(c1,c2))

cities("Belém","Rio de Janeiro")

def uppercase_decorator(function):
    def wrapper():
        func = function()
        make_uppercase = func.upper()
        return make_uppercase

    return wrapper

def say_hi():
    return 'hello there'

decorate = uppercase_decorator(say_hi)
decorate()
