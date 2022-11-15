+++
archetype = "chapter"
title = "Divisores"
tags = ["intermediario"]
weight = 24

+++

Um problema recorrente é o de encontrar divisores de um número positivo. A maneira mais simples de resolvê-lo seria passar por todos os números e testar se o resto da divisão é 0, ou seja, se é divisível.

```c++
vector<long long> all_divisors(long long n) {
  vector<long long> ans;
  for(long long i = 1; i <= n; i++)
    if(n % i == 0)
      ans.push_back(i);
  return ans;
}
```

é fácil ver que a complexidade do código acima é `O(n)`, podemos fazer melhor que isso com algumas observações.

Se `a` é um divisor `n` então o resto da divisão de `n` por `a` é 0 assim `b = n/a` é um inteiro. Sabemos então que `a*b = n`, ou seja, `a = n/b` e assim `b` também é um divisor de `n`. Se fixarmos que `a <= b`, qual o valor máximo de `a`? Como `a` é no máximo `b`, consideremos o caso em que `a = b` temos que `a*a = n`, ou seja, `a = sqrt(n)`.

Agora é possivel modificar o código passando por todos os valores possíveis de `a` e computar o respectivo `b` para encontrar todos os divisores.

```c++
vector<long long> all_divisors(long long n) {
  vector<long long> ans;
  for(long long a = 1; a*a <= n; a++) { // comparação que evita o uso de doubles, a <= sqrt(n) é o mesmo que a*a <= n, ja que a e n sao positivos
    if(n % a == 0) {
      long long b = n / a;
      ans.push_back(a);
      ans.push_back(b);
    }
  }
  sort(ans.begin(), ans.end()); // frescura para retornar os divisores ordenados como na primeira implementação
  return ans;
}
```

Só há um problema com a implementação acima. Assumimos que `a <= b`, caso `a = b` inserimos o divisor 2 vezes na resposta, por exemplo, para 36 podemos ter `a = 6` e `b = 6`. Assim a versão final do código fica:

```c++
vector<long long> all_divisors(long long n) {
  vector<long long> ans;
  for(long long a = 1; a*a <= n; a++) { // comparação que evita o uso de doubles, a <= sqrt(n) é o mesmo que a*a <= n
    if(n % a == 0) {
      long long b = n / a;
      ans.push_back(a);
      if(a != b) ans.push_back(b);
    }
  }
  sort(ans.begin(), ans.end()); // frescura para retornar os divisores ordenados como na primeira implementação
  return ans;
}
```

com complexidade `O(sqrt(n))`.

### Observações
Um número primo tem somente dois divisores positivos, assim podemos checar se um numero `x` é primo usando `all_divisors(x).size() == 2` ou modificando um pouco a rotina e ter uma melhor constante na complexidade
```c++
vector<long long> is_prime(long long n) {
  if(n == 1) return 0;
  for(long long a = 2; a*a <= n; a++) { // comparação que evita o uso de doubles, a <= sqrt(n) é o mesmo que a*a <= n
    if(n % a == 0){
      return 0;
    }
  }
  return 1;
}
```

## Passar por todos os múltiplos de x até N
Consideramos multiplos de `x` os números: `x, 2*x, 3*x, 4*x, ...` ou, escrevendo de outra forma, `x, x+x, x+x+x, x+x+x+x, ...`

Caso queiramos fazer algo com todos os múltiplos de `x` até um limite `N` podemos usar a simples rotina
```c++
for(int m = x; m < N; m += x) { // m é sempre multiplo de x
  // code
}
```
Que é executada em `O(N/x)`.

## Passar por todos os múltiplos de todos os números até N

Se passarmos por todos os números `x` entre 1 e `N` e para cada um deles achar todos os múltiplos `m`.

O código ficaria algo como

```c++
for(int x = 1; x < N; x++) {
  for(int m = x; m < N; m += x) { // m é sempre multiplo de x
    // code
  }
}
```

O código acima parece ser executado em `O(N^2)`, mas podemos definir uma cota bem menor, com algumas observações. O código é executado em `N/1 + N/2 + ... + N/(N-1) + N/N` passos. Podemos botar o `N` em evidencia `N*(1/1 + 1/2 + 1/3 + ... + 1/(N-1) + 1/N)`. A soma dentro dos parenteses é menor que a área abaixo da curva da função `1/x`, a integral é `ln(x)`(mas relaxa que não precisa lembrar das coisas de cálculo 1). Portanto `O(N*(1/1 + 1/2 + 1/3 + ... + 1/(N-1) + 1/N)) = O(N*lg N)`.

Podemos resolver vários problemas usando isso pois `x` será divisor de `m` e assim para todo `m` também passaremos por todos os divisores deles. 

## Contando os divisores de vários números

Por exemplo, usando essa abordagem, poderíamos usar esses 2 laços aninhados para gerar um vetor `div` que informa quantos divisores todos os números até `n` tem.

Perceba que esses dois laços executam em `O(n * log n)`, enquanto repetir o algoritmo de contar os divisores de cada número individualmente teria complexidade `sqrt(1) + sqrt(2) + ... + sqrt(n)` = O(n * sqrt(n)), ou seja, tem complexidade melhor.

A abordagem abaixo funciona porque sempre que chegamos em um número `m` no laço mais interno, significa que temos um divisor a mais. 

Na primeira iteração passamos por todos os números, já que começamos e 1 e estamos incrementando de 1 em 1, todos os números são divisíveis por 1, então todos ganham um divisor a mais no vetor.

Na segunda iteração, passamos apenas pelos números múltiplos de 2, em todos os números que chegarmos, significa que esse número é divisível por 2 (ou seja, sabemos que ele tem um divisor a mais). E repetimos esse raciocínio para todos os números. 


```c++
vector<int> computa_divisores(int N) {
vector<int> qnt_div(N, 0);
  for(int x = 1; x < N; x++) {
    for(int m = x; m < N; m += x) {
      qnt_div[m]++; // aqui descobrimos que x é divisor de m
    }
  }
  return qnt_div;
}
```