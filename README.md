# SASS 
- Sass é uma linguagem de script de pré-processador que é interpretada ou compilada em Cascading Style Sheets (CSS). 
- Referência: https://sass-lang.com/
  
## Introdução a pré-processadores
- São ferramentas utilizadas para aumentar a produtividade no desenvolvimento CSS, mantentendo a compatibilidade entre as versões do CSS nos navegadores.

* [SASS](https://sass-lang.com/)
* [Stylus](https://stylus-lang.com/)
* [Less](https://lesscss.org/)
* [PostCSS](https://postcss.org/)

## Preprocessamento
- Processo de interpretação intermediário
- Antes do processamento do navegador
- Prevenção de erros
- Organização
- Reaproveitamento

## Variáveis
- Facilitam a customização e reaproveitamento
- Para criar uma variavel basta colocar o cifrão($) e em seguida um nome para a variavel. Exemplo: `$align`

`sass ./scss/style.scss ./css/style.css` A partir do arquivo scss ira gerar um arquivo css na pasta indicada

## Identação / Hierarquia
- Estruturação de componentes
- Herança
- Evita sobreposição

## Partials
- Modularizar o código
- Snippets

# SASS II

## Modules
- `sass ./scss/style.scss ./css/style.css --watch` para ficar obervando toda vez que o arquivo scss estiver sendo alterado e alterar o css

## BEM CSS
- Block
- Element
- Modifier

- Padrão do projeto / Design Paterns

### Exemplo: 
`b__e--m`
- .cars__title
- .cars__list
- .cars__item
- .cars__item--destack
- .cars__button
- .cars__img-container