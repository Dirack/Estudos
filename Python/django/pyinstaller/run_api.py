import os
import sys
import webbrowser

webbrowser.open("http://127.0.0.1:8000")

if __name__ == "__main__":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "learning_log.settings")
    from django.core.management import execute_from_command_line
    execute_from_command_line(["manage.py", "runserver", "--noreload", "127.0.0.1:8000"])
