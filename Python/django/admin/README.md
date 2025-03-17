# Página de administrador

Ao regitrar os seus models em 'admin.py', você pode extender estes models com a classe ModelAdmin
para utilizar opções de customização básicas do painel de administrador do django.

```py
@admin.register(Produto)
class ProdutoAdmin(admin.ModelAdmin):
    list_display = ('name','preco','categoria','desc') # Colunas exibidas na listagem da página
    list_filter = ('categoria',) # Filtros
    list_per_page = 5 # Paginação
    list_max_show_all = 20 # máximo da paginação
    list_display_links = ('name',) # Link para clicar e editar os campos
    list_editable = ('preco','categoria') # Colunas editáveis
    search_fields = ('name',) # Colunas para a pesquisa
```
