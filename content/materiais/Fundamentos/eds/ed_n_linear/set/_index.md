+++
title = "Set"
archetype = "chapter"
tags = ["iniciante"]
weight = 11
+++

A estrutura **set** é bem parecida com o que conhecemos de conjuntos da matemática; não existem elementos repetidos e a ordem não importa.

A implementação do set, porém, é feita com uma árvore binária de busca, sendo assim permitido inserir, remover e acessar um elemento em *O(log n)*.

A vantagem do set em relação ao vector é que, caso queira inserir um elemento em um vector ordenado e preservar a ordenação, você terá que procurar o lugar que ele deve ser inserido, fazer a inserção e modificar a posição dos elementos à direita dele. Modificar todas as posições à direita tem uma complexidade ruim *O(n)*, então este algoritmo será mais eficiente com o set.

Além da vantagem de eficiência, essas operações com set são feitas com alguns simples métodos!

## Métodos

- ```insert(element)``` - Insere um elemento no Set
- ```erase()``` - Remove uma key ou um iterator
- ```find(element)``` - Retorna um iterator da posição do element
- ```count``` - Retorna a quantidade de elementos de uma chave específica
- ```size``` - Retorna o tamanho do set
- ```clear``` - Limpa todo o conteúdo do set
- ```begin``` - Retorna um iterator para o início do set
- ```end``` - Retorna um iterator para o final do set
- ```lower_bound(element)``` - Retorna um iterator para o primeiro valor >= element
- ```upper_bound(element)``` - Retorna um iterator para o primeiro valor > element

## Exemplo 1

```cpp

#include <bits/stdc++.h>
using namespace std;

int main() {
    set<int> s;

    s.insert(3); // insere elemento no set
    cout << s.size() << endl; // tamanho do set

    // para verificar se um elemento está contido no set ou nao podemos utilizar
    // o metodo find; caso nao esteja presente ele retornará o iterator para
    // o fim do set

    if(s.find(2) == s.end()) {
        cout << "O numero 2 nao esta no set" << endl;
    }
    else {
        cout << "O numero 2 esta no set" << endl;
    }

    if(s.find(3) == s.end()) {
        cout << "O numero 3 nao esta no set" << endl;
    }
    else {
        cout << "O numero 3 esta no set" << endl;
    }
    
    s.erase(3); // apaga elemento 3 do set
    
    if(s.find(3) == s.end()) {
        cout << "O numero 3 nao esta no set" << endl;
    }
    else {
        cout << "O numero 3 esta no set" << endl;
    }

    return 0;
}
```

Outro método extremamente útil é o lower_bound (e o upper_bound). O lower_bound recebe um inteiro x como argumento e retorna o menor inteiro maior ou igual a x. Caso não exista, ele retorna um iterator para o fim do set (set.end()).

## Exemplo 2

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    set<int> s;

    s.insert(3); // insere elemento no set
    s.insert(4);
    s.insert(5);
    s.insert(7);

    auto iterator1 = s.lower_bound(6);
    // se iterator eh igual a s.end() entao nao existe
    if(iterator1 != s.end()) {
        int numero = *iterator1;
        cout << "menor inteiro maior ou igual a 6 eh " << numero << endl;
    }
    else {
        cout << "nao existe inteiro numero maior ou igual a 6" << endl;
    }

    auto iterator2 = s.lower_bound(9);
    // se iterator eh igual a s.end() entao nao existe
    if(iterator2 != s.end()) {
        int numero = *iterator2;
        cout << "menor inteiro maior ou igual a 9 eh " << numero << endl;
    }
    else {
        cout << "nao existe inteiro numero maior ou igual a 9" << endl;
    }

    return 0;
}
```

{{% notice style="info" %}}
Na verdade, você pode utilizar o lower_bound para qualquer tipo que implemente a operação "<", como por exemplo o pair<int, int>.
{{% /notice %}}
