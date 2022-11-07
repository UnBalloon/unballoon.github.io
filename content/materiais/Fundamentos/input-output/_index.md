+++
archetype = "chapter"
title = "Entrada/Saída"
tags = ["iniciante"]
weight = 2
+++

## Entrada

O objeto "cin" representa o stream de entrada no C++. Ele realiza a leitura de um sequência de dados, sem espaços e sem tabulações, vindas do teclado.
Para coletar estes dados armazenados, usa-se o "operador de extração" que "extrai" dados do stream.

### Lendo um Input

A primeira linha terá N que é a quantidade de números a serem lidos.

A segunda linha será os N números.
```
input:
4
1 5 2 3
```

```cpp
#include <bits/stdc++.h>
using namespace std;

int main(){

    int n;
    cin>>n;

    for(int i=0; i<n; i++){
        int numero;
        cin>>numero;
    }

    return 0;
}
```

## Saída

O objeto "cout" representa o stream de saída no C++. Este stream é uma espécie de sequência (fluxo) de dados a serem impressos na tela.
Para realizar a impressão, usa-se o "operador de inserção" que "insere" dados dentro do stream.

Printando o famoso "Hello World"

```cpp
#include <bits/stdc++.h>
using namespace std;

int main(){

    cout<<"Hello World"<<endl;

    return 0;
}

```

{{% notice style="info" %}}
O "endl" é usado para fazer quebra de linha, porém, pode ser mais lento que o "\n".
{{% /notice %}}

### Casas Decimais

Para printar as casas decimais, precisamos usar o "fixed" que é uma função do C++ usada para formatar a saída, juntamente com o "setprecision", que diz quantas casas será printada.

```cpp
#include <bits/stdc++.h>
using namespace std;

int main(){

    double pi = 3.141592653;
    cout<<fixed;
    cout<<setprecision(4);
    cout<<pi<<endl;

    // 3.1415

    return 0;
}
```

## Fast Cin

{{% notice style="info" %}}
O **printf** e o **scanf** do C são mais rápidos do que o **cin** e o **cout** do C++.
{{% /notice %}}

Isso ocorre porque o C++ usa a sincronização do output, ou seja, enquanto ele está lendo o input, o programa pode responder ao mesmo tempo.

A resolução para que o cin e o cout fique mais rápido (próximo à velocidade do scanf e do printf), é desabilitar a sincronização no C++.

Segue o exemplo:

```cpp
ios_base::sync_with_stdio(false);
cin.tie(NULL);
```

## Exemplo

```cpp
#include <bits/stdc++.h>
using namespace std;

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    return 0;
}
```


