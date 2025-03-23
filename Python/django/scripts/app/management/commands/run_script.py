from django.core.management.base import BaseCommand

class Command(BaseCommand):

    help = 'Run a script using django!'

    def handle(self, *args, **kwargs):

        print(self.help)