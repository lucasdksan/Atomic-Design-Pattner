# Atomic-Design-Pattner

* Anotações dos estudos sobre atomic design pattner.

```
    src|- atomic
       |  |- input
       |  |- button
       |  |- link-nav
       |
       |- molecules
       |  |- navbar-menu
       |  |- search-keyword
       |
       |- organisms
       |  |- header
       |
       |- page
       |  |-home
       |  |-kanban
       |  |-atomic
       |
       |- Templates
       |  |-main
       |
```

Exemplo retirado do vídeo _React and Atomic Design in Practice - Novatics 2017_. 
link: [YouTube](https://youtu.be/XGPRyL7TXsk).

## Descrição:

O design atômico não é um processo linear , mas sim um modelo mental para nos ajudar a pensar em nossas interfaces de usuário como um todo coeso e uma coleção de partes ao mesmo tempo . Cada um dos cinco estágios desempenha um papel fundamental na hierarquia de nossos sistemas de design de interface. Vamos mergulhar em cada estágio com um pouco mais de detalhes.

1. __Átomos__:

__Os átomos de nossas interfaces servem como os blocos de construção fundamentais que compõem todas as nossas interfaces de usuário__. Exemplos, rótulos de formulário, entradas, botões e outros que não podem ser divididos mais sem deixar de ser funcionais.

Cada átomo no mundo natural tem suas próprias propriedades únicas. Um átomo de hidrogênio contém um elétron, enquanto um átomo de hélio contém dois.

No contexto de uma biblioteca de padrões, os átomos demonstram todos os seus estilos básicos de uma só vez, o que pode ser uma referência útil para continuar voltando à medida que você desenvolve e mantém seu sistema de design.

2. __Moléculas__:

Em química, moléculas são grupos de átomos ligados entre si que assumem novas propriedades distintas. Por exemplo, as moléculas de água e as moléculas de peróxido de hidrogênio têm suas próprias propriedades únicas e se comportam de maneira bastante diferente, embora sejam compostas pelos mesmos elementos atômicos (hidrogênio e oxigênio).

Nas interfaces, __as moléculas são grupos relativamente simples de elementos da interface do usuário funcionando juntos como uma unidade__.

Quando combinados, esses átomos abstratos de repente têm um propósito. O átomo de rótulo agora define o átomo de entrada. Clicar no botão atom agora envia o formulário. O resultado é um componente simples, portátil e reutilizável que pode ser colocado em qualquer lugar onde a funcionalidade de pesquisa seja necessária.

3. __Organismos__:

Organismos são componentes de UI relativamente complexos compostos por grupos de moléculas e/ou átomos e/ou outros organismos.

A construção de moléculas para organismos mais elaborados fornece aos designers e desenvolvedores um importante senso de contexto.

4. __Modelos__:

Os modelos são objetos de nível de página que colocam componentes em um layout e articulam a estrutura de conteúdo subjacente do design.

fornece contexto para essas moléculas e organismos relativamente abstratos.

concentram na estrutura de conteúdo subjacente da página.

5. __Páginas__:

__As páginas são instâncias específicas de modelos que mostram a aparência de uma interface do usuário com conteúdo representativo real no local__.

Na prática, é necessário criar suas respectivas peças na pasta de componentes. 
Obs: Este modelo não tem necessariamente de ser seguido à risca. O mais importante é a ideia por trás disso.

```
    src|- components 
       |  |- atomic
       |  |  |- input
       |  |  |- button
       |  |  |- link-nav
       |  |
       |  |- molecules           
       |  |  |- navbar-menu
       |  |  |- search-keyword
       |  |
       |  |- organisms
       |  |  |- header
       |  |
       |  |- Templates
       |  |  |-main
       |
       |
       |- page/screens
       |  |-home
       |  |-kanban
       |  |-atomic
```