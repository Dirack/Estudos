from django.core.management.base import BaseCommand

class Command(BaseCommand):
    help = 'teste'

    def add_arguments(self, parser):
        parser.add_argument(
            '--volume',
            required=True,
            help='Nome do volume'
        )

        parser.add_argument(
            '--path',
            required=True,
            help='Caminho'
        )

    def handle(self, *args, **options):
        volume = options['volume']
        path = options['path']

        print(f"{volume} {path}")
