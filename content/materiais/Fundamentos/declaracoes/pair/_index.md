+++
archetype = "chapter"
title = "Pairs"
weight = 2
tags = ["iniciante"]
+++

- Um "pair" é um contêiner que consiste de dois tipos de dados ou objetos.


- Declaramos um pair como:

```cpp
pair<tipodado1, tipodado2> variavel;
```

Podemos inicializá-lo usando o make_pair ou diretamente:

```cpp
variavel = make_pair(dado1, dado2);

variavel = {dado1, dado2};
```

- O primeiro elemento é acessado usando o "first" e o segundo usando "second"

```cpp
variavel.first;
variavel.second;
```

## Exemplo 1:

- Um Pair que armazena 2 inteiros

```cpp
#include <bits/stdc++.h>
using namespace std;

int main(){
    pair<int, int> pii;

    pii = {5, 10};

    cout<< pii.first << " " << pii.second<<"\n";

    // 5 10

    return 0;
}
```

## Exemplo 2:

- Um Pair que armazena 1 inteiro e 1 double

```cpp
#include <bits/stdc++.h>
using namespace std;

int main(){
    pair<int, double> pii;

    pii = {2, 1.5365};

    cout<< pii.first << " " << pii.second<<"\n";

    // 2 1.5365

    return 0;
}
```

## Comparando Variáveis:

```cpp
#include <bits/stdc++.h>
using namespace std;

int main(){
    pair<int, int> v1, v2;
    v1 = {3, 1};
    v2 = {2, 2};

    if(v1 > v2) cout<< "v1 é maior que v2";
    else cout<< "v1 é menor ou igual a v2";


    return 0;
}



