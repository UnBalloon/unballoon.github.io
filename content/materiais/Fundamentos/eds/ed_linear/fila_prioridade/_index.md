+++
title = "Fila de Prioridade"
archetype = "chapter"
tags = ["iniciante"]
weight = 9
+++

Uma **fila de prioridade** tem como principal característica a *ordenação*, ela mantém o elemento do topo como sempre sendo o maior (ou o menor) elemento sempre.

Caso esteja fixado para o elemento do topo ser o maior, a fila de prioridade estará em ordem descrescente do topo para baixo. Caso contrário, a ordem será crescente.

Por padrão, ela estará fixado para o elemento do topo ser o maior, logo, estará em ordem decrescente os elementos na fila de prioridade.

As filas de prioridades são muito úteis quando precisamos que nossos elementos sempre estejam ordenados conforme vamos inserindo elementos.



## Métodos

- ```push``` - Adiciona um elemento na fila de prioridade.
- ```pop``` - Remove o elemento do topo da fila de prioridade.
- ```top``` - Retorna o valor do topo
- ```empty``` - Retorna true se a fila estiver vazia, caso contrário, retorna false
- ```size``` - Retorna o tamanho da fila de prioridade.


{{% notice style="info" %}}
A complexidade de inserção e remoção é O(log(n)), e a de olhar o topo do heap é O(1).
{{% /notice %}}

## Exemplo

```cpp
#include <bits/stdc++.h>
using namespace std;

int main(){
    priority_queue<int> q;

    q.push(9);
    q.push(5);
    q.push(6);
    q.push(1);
    q.push(8);

    cout<< q.size() <<endl;

    while(!q.empty()){
        int elemento = q.top();
        cout<<elemento<<" ";

        q.pop();
    }

    return 0;
}
```

Saída

```
9 8 6 5 1
```

## Ordenação pelo menor valor

Para ordenar pelo menor valor usamos a seguinte sintaxe na declaração:
```priority_queue <int, vector<int>, greater<int>> q```

## Exemplo 2

```cpp
#include <bits/stdc++.h>
using namespace std;

int main(){
    priority_queue <int, vector<int>, greater<int>> q;

    q.push(9);
    q.push(5);
    q.push(6);
    q.push(1);
    q.push(8);

    cout<< q.size() <<endl;

    while(!q.empty()){
        int elemento = q.top();
        cout<<elemento<<" ";

        q.pop();
    }

    return 0;
}
```

Saída

```
1 5 6 8 9
```

