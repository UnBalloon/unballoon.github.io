+++
title = "Pilha"
archetype = "chapter"
tags = ["iniciante"]
weight = 7
+++

A **pilha** é uma estrutura que, como o nome sugere, permite inserção e remoção apenas do "topo". Isto significa que, ao remover um elemento da pilha, o elemento a ser removido é o último que foi inserido. Também é conhecido como ***LIFO (last-in first-out)***.

![Pilha](/images/pilha.png)

## Métodos:

- ```push``` - Insere um elemento na pilha.
- ```pop``` - Remove o elemento do topo da pilha.
- ```top``` - Retorna o elemento do topo da pilha.
- ```size``` - Retorna o tamanho da pilha.
- ```empty``` - Retorna true se estiver vazia, se não, retorna falso.

## Exemplo

- Programa simples que vai inserir elementos na pilha e depois conforme for removendo, printa cada elemento

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    stack<int> pilha; // construtor, entre <> deve ser inserido o tipo de dado que será armazenado
    pilha.push(2); // o metodo push insere o elemento no topo da pilha
    pilha.push(7);
    pilha.push(8);
    pilha.push(4);

    cout << pilha.size() << endl; // tamanho da pilha

    // enquanto não estiver vazia, remove o elemento do topo e printa ele
    while(!pilha.empty()){
        int elemento = pilha.top();
        cout<<elemento<<" ";

        pilha.pop();
    }

    return 0;
}
```

Saída

```
4 8 7 2
```


