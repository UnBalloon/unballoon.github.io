+++
archetype = "chapter"
title = "Strings"
weight = 1
tags = ["iniciante"]
+++

No C++ representa uma sequência de caracteres

Podemos declarar uma string como:

```cpp
string nomevar;
string nomevar = constante;
string nomevar = char ∗ variavel;
string nomevar(char ∗ variavel);
string nomevar(tamanho, constante char);

```

## Concatenação

Podemos usar o operador "+" para concatenar duas strings

```cpp
#include <bits/stdc++.h>
using namespace std;

int main(){

    string a = "abc";
    string b = "def";

    string c = a + b;
    cout<<c<<endl;

    // abcdef

    return 0;
}
```

## Transformando um inteiro em string

Podemos transformar um inteiro em uma string usando a função "to_string()"

```cpp
#include <bits/stdc++.h>
using namespace std;

int main(){
    int x = 123;
    string s = to_string(x);

    cout<<s<<endl;

    return 0;
}
```



