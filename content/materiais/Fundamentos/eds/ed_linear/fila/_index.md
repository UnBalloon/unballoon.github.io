+++
title = "Fila"
archetype = "chapter"
tags = ["iniciante"]
weight = 8
+++

A **fila** segue o padrão de ***FIFO (first-in first-out)***, ao contrário da pilha, o primeiro elemento inserido será o primeiro a ser removido. Ela é muito útil para problemas que precisamos manter os elementos na ordem em que lhes foram dados.

![Fila](/images/fila.png)

## Métodos

- ```push``` - Adiciona um elemento no fim da fila.
- ```front``` - Retorna o elemento do início da fila.
- ```back``` - Retorna o elemento do final da fila.
- ```pop``` - Remove o elemento do início da fila.
- ```empty``` - Retorna true se estiver vazia, e false caso contrário.
- ```size``` - Retorna quantos elementos tem na fila.

## Exemplo

```cpp
#include <bits/stdc++.h>
using namespace std;

int main(){
    queue<int> q;

    q.push(9);
    q.push(5);
    q.push(6);
    q.push(1);
    q.push(8);

    cout<< q.size() <<endl;

    while(!q.empty()){
        int elemento = q.front();
        cout<<elemento<<" ";

        q.pop();
    }

    return 0;
}
```

Saída

```
9 5 6 1 8
```