+++
archetype = "chapter"
title = "Números Primos"
tags = ["intermediario"]
weight = 25
+++

Em particular, sabendo a quantidade de divisores de cada número, podemos varrer esse vetor vendo quais números são primos (tem 2 divisores).

```cpp
vector<int> primos_ate_n(int N) {
  vector<int> primos;
  for(int x = 1; x < N; x++) {
    if(qnt_div[x] == 2)
      primos.push_back(x);
  }
  return primos;
}
```

## Crivo de erastótenes

A abordagem acima tem uma complexidade aceitável, e passaria no tempo para a maioria dos problemas. No entanto, existe um algoritmo com uma ideia semelhante, mas que com algumas observações baixa essa complexidade de `O(n * log n)` para `O(n * log( log n))`. O log já abaixa muito um número, se aplicamos ele novamente, abaixamos mais ainda, ou seja, isso é quase linear.

A ideia usada é marcar inicialmente todos os números entre 1 e `N` como possiveis primos. Passando em ordem crescente e quando encontramos um primo marcamos os múltiplos do primo como não primos.

### Visualização

![Crivo](https://i.pinimg.com/originals/24/69/79/246979fd8d7bdf29a95cdb2e08cd2e89.gif)

### Implementação

```c++
vector<int> primos_ate_n(int N) {
  vector<int> marcacao(N, 1); // 1 = possivel primo, 0 = com certeza não primo
  vector<int> primos;
  for(int x = 2; x < N; x++) if(marcacao[x] == 1) {
    primos.push_back(x);
    for(int m = x+x; m < N; m += x) {
      marcacao[m] = 0; // aqui descobrimos que m não é primo
    }
  }
  return primos;
}
```