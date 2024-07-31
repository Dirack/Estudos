import sys
from classes import MyException

try:
    if "linux" in sys.platform:
        raise MyException("My own exception!!!")
except MyException:
    print("You raised MyException")
else:
    print("No exception was raised!")
finally:
    print("It's over...")
