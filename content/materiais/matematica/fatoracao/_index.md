+++
archetype = "chapter"
title = "Fatoração"
tags = ["intermediario"]
weight = 26
+++

Aprendemos na escola que todo número é composto por fatores primos, existindo uma única fatoração pra cada número.

Uma primeira abordagem possível seria passar por todos os números e ir dividindo sempre que possível.

```c++
// retorna vetor de pair<primo, expoente> da fatoração
// fatora(36) = [{2, 2}, {3, 2}] ou seja, 36 = 2^2 + 3^2
vector<pair<long long, int>> fatora(long long n) {
  vector<pair<long long, int>> ans;
  for(long long p = 2; p <= n; p++) {
    if(n % p == 0){
      int expoente = 0;
      while(n % p == 0) {
        n /= p;
        expoente++;
      }
      ans.emplace_back(p, expoente);
    }
  }
  return ans;
}
```

A primeira vista,como queremos decompor em fatores primos, parece que temos que testar se `p` é primo. Entretanto passamos por `p` de forma crescente e sempre que podemos dividimos `n` por `p` então a condição `(n % p == 0)` só será verdade para `p` primos.  

Isso ocorre porque todos os fatores primos de um número são menores ou iguais a ele próprio, então quando chegamos em um número, é impossível que ele divida o número e não seja primo, pois se não for, os números primos que o compoem deveriam ter sido contabilizados numa iteração anterior.

Apesar do código acima rodar bem para vários exemplos, no pior caso `n` é primo e o código é executado em `O(n)`.

Podemos melhorar a complexidade com uma simples observação. É possivel ter **apenas** um primo maior que a `sqrt(n)`, por exemplo, 10 tem 5 como fator e `5 > sqrt(10)`, mas é impossível ter dois primos maiores que a raiz. Se tivermos `a > sqrt(n)` e `b > sqrt(n)`, quando multiplicamos temos que `a * b > sqrt(n) * sqrt(n)` e `a * b > n`.

```c++
vector<pair<long long, int>> fatora(long long n) {
  vector<pair<long long, int>> ans;
  for(long long p = 2; p*p <= n; p++) { // comparação que evita o uso de doubles, p <= sqrt(n) é o mesmo que p*p <= n
    if(n % p == 0) {
      int expoente = 0;
      while(n % p == 0) {
        n /= p;
        expoente++;
      }
      ans.emplace_back(p, expoente);
    }
  }
  if(n > 1) ans.emplace_back(n, 1);
  return ans;
}
```

## Fatoração em O(lg n) para números até N

É possível fatorar números ate um limite `N` em `O(lg n)` após preprocessamento `O(n log( log n))`. O que fazemos é uma pequena modificação no código do crivo, para que enquanto fazemos o crivo, preenchamos um vetor auxiliar `lp`, aonde `lp[x]` representa o maior número primo que divide `x`.

```c++
vector<int> lp(N, -1);

for(int x = 2; x < N; x++)
  if(lp[x] == -1) { // se x nao foi marcado antes, é primo
    for(int m = x; m < N; m += x) // todos os multiplos de i
      lp[m] = x;
  }
```

Tendo este vetor podemos fatorar um numero `x` com o seguinte procedimento.

```c++
vector<pair<int, int>> fatora(int x) {
  map<int, int> expoentes;
  while(x > 1) {
    expoentes[ lp[x] ]++; // aumentamos o expoente do primo lp[x] em 1 na resposta
    x /= lp[x];
  }
  vector<pair<int, int>> ans;
  for(pair<int, int> p : expoentes)
    ans.emplace_back(p);
  return ans;
}
```

A complexidade do procedimento acima é `O(quantidade de fatores)`, que é limitado por `O(lg n)`, da para ver que no pior caso todos os fatores são 2(menor primo) e a complexidade é o `k` de `2^k = n`.

## Número de divisores dada uma fatoração

Vimos que todo inteiro N pode ser escrito de forma única como multiplicação de números primos. Assim, 

{{< math align="center" >}}
$$N = {p_1}^{e_1}.{p_2}^{e_2}.{p_3}^{e_3}.{p_4}^{e_4}.{p_5}^{e_5}.{p_6}^{e_6} ... $$
{{< /math >}} 

onde p<sub>i</sub> é primo e 0 e<sub>i</sub> &gt; 0.

Todo divisor de N só pode ter primos que aparecem na fatoração de N e expoente no máximo o do expoente no N. Por exemplo:
{{< math align="center" >}}
$$36 = 2^2.3^2$$
{{< /math >}} 

{{< math align="left" >}}
$$1 = 2^0.3^0$$
{{< /math >}} 

{{< math align="left" >}}
$$2 = 2^1.3^0$$
{{< /math >}} 

{{< math align="left" >}}
$$3 = 2^0.3^1$$
{{< /math >}} 

{{< math align="left" >}}
$$4 = 2^2.3^0$$
{{< /math >}} 

{{< math align="left" >}}
$$6 = 2^1.3^1$$
{{< /math >}} 

{{< math align="left" >}}
$$9 = 2^0.3^2$$
{{< /math >}} 

{{< math align="left" >}}
$$12 = 2^2.3^1$$
{{< /math >}} 

{{< math align="left" >}}
$$18 = 2^1.3^2$$
{{< /math >}} 

{{< math align="left" >}}
$$36 = 2^2.3^2$$
{{< /math >}} 

Para construir um divisor podemos escolher dentre (e<sub>i</sub>+1) possibilidades para o primo p<sub>i</sub>. O número total de divisores é a multiplicação desses termos. Assim 36 tem (2+1)\*(2+1) = 9 divisores.

Embora esta ideia não melhore a complexidade para encontrar o número de divisores em comparação com as ideias anteriores, ela pode ser uma ferramenta útil para analisar problemas. Por exemplo, os números com exatamente 9 divisores são da forma 

{{< math align="left" >}}
$${p_1}^8={p_1}^2.{p_2}^2$$
{{< /math >}} 

Como por exemplo:

{{< math align="left" >}}
$$256 = 2^8$$
{{< /math >}} 

{{< math align="left" >}}
$$6561 = 3^8$$
{{< /math >}}

{{< math align="left" >}}
$$36 = 2^2.3^2$$
{{< /math >}} 

{{< math align="left" >}}
$$100 = 2^2.5^2$$
{{< /math >}} 

{{< math align="left" >}}
$$255 = 3^2.5^2$$
{{< /math >}} 

etc...