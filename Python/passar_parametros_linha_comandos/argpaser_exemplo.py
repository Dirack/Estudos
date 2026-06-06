import sys
import argparse


def main():
    parser = argparse.ArgumentParser(description='Descricao')
    parser.add_argument('-nome', required=True)
    parser.add_argument('--idade', required=True)
    parser.add_argument('--pais', required=True)
    
    args = parser.parse_args()

    print("Nome = {}".format(args.nome))
    print("Idade = {}".format(args.idade))
    print("País = {}".format(args.pais))

    return 0


if __name__ == '__main__':
    sys.exit(main())


