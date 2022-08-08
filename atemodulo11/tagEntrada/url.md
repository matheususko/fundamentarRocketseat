# URL

<input type="url" />

- espera que o usuário digite uma url
- Irá validar se o valor digitado é uma url

# Atributos

- placeholder
- Readonly / disabled
- value

- required

- minlength / maxlength
    * O mínimo e/ou máximo valor que o campo irá conter

- size
    * Valor numéric indicando quantos caracteres esse campo deveria ocnter, modificando o tamanho do campo para o usário

- pattern
    * Uso de expressão regular para validar o campo
    * exemplo: o usuário só poderá colocar domínio .com.br
        * pattern=".*\.com\.br/.*"

- list
    * o id de uma tag <datalist> que está no mesmo documento
    * <datalist> irá conter uma lista de valores pré definidos a fim de sugerir ao usuário, quais valores estão disponíveis
        * Os valores do <datalist> que não forem compatíveis com o campo, não serão apresentados como sugestão

- spellcheck
    * Habilitar a verificação ortográfica para este input