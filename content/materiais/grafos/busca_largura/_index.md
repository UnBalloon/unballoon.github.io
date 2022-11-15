+++
archetype = "chapter"
title = "Busca em Largura"
tags = ["iniciante"]
weight = 18
+++

Podemos chamá-la também de **BFS (Breadth-First Search)**.

Uma das formas de percorrer um grafo é fazer um percorrimento em largura. Começamos a explorar os vértices do grafo a partir de um certo vértice `a`. E a ordem que vamos navegando entre os vértices é de forma que os mais próximos a `a` sempre serão visitados antes. Então, primeiro `a` será visitado, depois os vértices que são adjacentes a `a`(distância 1), depois os vértices que estão a duas arestas de distância, e assim por diante. Como os vértices mais próximos são sempre visitados antes, esse algoritmo serve para, por exemplo, dizer qual a distância mínima entre dois vértices no grafo.

Esse comportamento é implementado usando-se uma fila. Primeiro insere-se na fila o vértice inicial, e começa-se a desenfileirar da fila enquando houver algum nodo. Quando um vértice `a` é desenfileirado, enfileram-se todos os vértice adjacentes a `a` que não foram visitados. Caso não marquemos os visitados, e o grafo tiver ciclos, nosso programa não terminará.

![BFS](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Breadth-First-Search-Algorithm.gif/250px-Breadth-First-Search-Algorithm.gif)

O algoritmo abaixo é uma BFS que simplesmente percorre o grafo.

```cpp
const int MAX_SIZE = 1e5;

// globais
// inicializa visited como false
bool visited[MAX_SIZE];
vector<int> graph[MAX_SIZE];

void bfs(int start){
    
    queue<int> q;
    q.push(start);

    visited[start] = true;
    while(!q.empty()){//Enquanto não estiver vazia
        // Retire o vértice da frente
        int u = q.front();
        q.pop();
        for(int w: graph[u]){ // Para cada vértice adjacente a u
            if(!visited[w]){
                q.push(w);
                visited[w] = true;
            }
        }
    }
}
```
A complexidade desse código é `O(n+m)`, temos no máximo n vértices enfileirados, e no loop interno, cada iteração é considerar uma aresta, como não estamos voltando no grafo, não passaremos por uma aresta mais que duas vezes naquele loop. Então, em todas as chamadas, aquele loop iterará no pior caso m vezes.
