+++
archetype = "chapter"
title = "Busca em Profundidade"
tags = ["iniciante"]
weight = 19
+++


Outra forma de percorrer um grafo é fazer percorrimento em profundidade, também de chamado de **DFS(Depth-first search)**. O algoritmo  se chama assim porque funciona de uma forma que sempre vamos 'mergulhar' no grafo o mais fundo que pudermos. Quando não for mais possível ir mais fundo no grafo, voltamos até que seja ir mais fundo novamente, sem repetir vértices já visitados.

A implementação da DFS mais comum é recursiva, por ser mais intuitiva. Assim como o exemplo anterior, esse programa simplesmente percorre o grafo, mas na ordem que um DFS percorre.

## Visualização 

![DFS](http://upload.wikimedia.org/wikipedia/commons/7/7f/Depth-First-Search.gif)

## Implementação

```cpp
const int MAX_SIZE = 1e5;

vector<int> graph[MAX_SIZE];
bool visited[MAX_SIZE];     // globais, inicializados na main.

void dfs(int vertex){ // na main chamamos dfs(start), aonde start é o vértice que começamos o dfs
    visited[vertex] = true;

    for(int w: graph[vertex]){
        if(!visited[w]){
            dfs(w);
        }
    }    
}
```
A complexidade desse código é `O(n+m)`, temos no máximo `n` chamadas recursivas, e no loop interno às chamadas, assim como no BFS, estaremos considerando uma aresta e não passaremos nela mais de uma vez. Então no máximo `m` iterações ao longo de todas as chamadas.