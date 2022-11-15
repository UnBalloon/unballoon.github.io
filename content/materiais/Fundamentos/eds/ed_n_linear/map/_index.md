+++
title = "Map"
archetype = "chapter"
tags = ["iniciante"]
weight = 10
+++

O **map** é uma estrutura interessante pois permite *"mapear"* chaves à valores, e dado uma chave encontrar o seu valor rapidamente (complexidade depende da implementação). Por exemplo, podemos fazer um map com strings de chave e int de valor, sendo possível recuperar o valor inteiro associado a aquela string rapidamente.

Deve-se ter cuidado com o uso de map pois ele é implementado em c++ como um set de pairs, isto é, vai ter complexidade *O(log n)* para inserir e modificar dados.

{{% notice style="info" %}}
Existe também o **unordered_map**, que é uma estrutura que usa hash. No pior caso é linear, mas em média tem complexidade constante. O seu funcionamento é similar ao do map, com a diferença de que seus elementos não estão ordenados.
{{% /notice %}}

## Métodos

- ```insert({key, element})``` - Insere uma chave e um valor no map
- ```erase()``` - Remove uma key ou um iterator
- ```find(element)``` - Retorna um iterator da posição do element
- ```count``` - Retorna a quantidade de elementos de uma chave específica
- ```size``` - Retorna o tamanho do map
- ```clear``` - Limpa todo o conteúdo do Map
- ```begin``` - Retorna um iterator para o início do map
- ```end``` - Retorna um iterator para o final do map

## Inicialização

```cpp
#include <bits/stdc++.h>
using namespace std;

int main(){
    // map chave, valor de inteiros

    map<int, int> m; // Inicialização de map vazio
    
    map<int, int> m = {{2, 3}, {4, 6}}; // Inicialização de map com valor 

    m[7] = 3
    m[7] ++; // 4
}
```

## Iteração

```cpp
#include <bits/stdc++.h>
using namespace std;

int main(){
    // iterando por métodos iterator

    map<int, int> m = {{2, 3}, {4, 6}};


    // Printa a chave e o valor em cada linha
    for(auto it = m.begin(); it != m.end(); it++){
        cout<< it.first <<" "<< it.second<< endl;
    }

    // tambem pode ser escrito como:
    for(auto it: m){
        cout<< it.first << " "<< it.second<< endl;
    }
}
```

Saída

```
2 3
4 6
```

## Apagando elemento

```cpp
#include <bits/stdc++.h>
using namespace std;

int main(){
    // iterando por métodos iterator
    map<int, int> m = {{2, 3}, {4, 6}}
    
    m.erase(m.find(2));
    m.erase(4);
}
```

{{% notice style="info" %}}
Da primeira maneira, ele apaga em tempo constante, pois está passando um iterator.
Da segunda maneira, ele apaga em log(N), pois ele faz uma busca no elemento.
{{% /notice %}}

## Verificar um elemento

```cpp
#include <bits/stdc++.h>
using namespace std;

int main(){
    // iterando por métodos iterator
    map<int, int> m = {{2, 3}, {4, 6}}

    if( m.count(2) > 0 ){ // existe uma chave {2}
        cout<< "Elemento existe";
    }else{
        cout<< "Elemento não existe";
    }
}
```

Saída

```
Elemento existe
```
