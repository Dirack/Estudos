# Estudo realizar checkout de pull request localmente

[Tutorial original](https://imasters.com.br/devsecops/git-realizando-o-checkout-de-pull-requests-localmente?fbclid=IwAR1bWfJ5-si8W4g8qAFk7zsfINBhipd9WAzLAYQIlT7D_Zu8AtcVJAvDJ2Y)

Realizar uma cópia local do pull request:

```sh
git fetch origin pull/ID/head:NOMEBRANCH
```

Onde ID é o id do pull request e o NOMEBRANCH é o nome da branch local que será
criada.
