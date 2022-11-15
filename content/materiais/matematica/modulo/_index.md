+++
archetype = "chapter"
title = "Módulo"
tags = ["intermediario"]
weight = 23

+++

Diversos problemas em juízes online (e competições) costumam pedir a resposta módulo algum primo alto (bastante comum $$10^9$$ + 7). O motivo disso é evitar overflow. Por exemplo: finja que você tem o seguinte problema: 

Imprimir o resultado de 3^`x` (0 <= `x` <= 100), por exemplo. Esse resultado claramente excede 2^64 (limite de long long), então não faz muito sentido pedir o resultado por si só (na verdade, alguns problemas realmente pedem coisas do tipo, nesses casos, o recomendado é usar python, que não tem overflow). 

Então pedem o resultado módulo 10^9 + 7, ou algum primo muito alto, para que não force as pessoas a usarem uma linguagem ou outra.

O motivo de ser um número alto é minimizar a chance de seu programa a computar a resposta errada (e por sorte ser igual em módulo a resposta correta) e o juíz aceitá-la.

O motivo de ser um número primo é que adicionam algumas propriedades a mais que podemos usar para calcular a resposta, como o inverso multiplicativo, mas não abordaremos isso aqui.

As seguintes propriedades valem no cálculo do módulo: 

`(a + b) % c = ((a % c) + (b % c)) % c`

`(a * b) % c = ((a % c) * (b % c)) % c`

O que isso quer dizer é que se a resposta está sendo computada por meio de adições e multiplicações, e no final você precisa tirar o módulo dela, você pode tirar módulo em todas as operações intermediárias que isso não afetará a resposta.

Então, por exemplo:

```cpp
long long exp(int p) {
  if(p == 0)
    return 1;
  return 3ll * exp(p-1);
}

int main() {
  int mod = 1e9+7;
  int n;
  scanf("%d",&n);
  printf("%lld\n", exp(n) % mod);
}

```

O código acima gera overflow, a resposta vai estourar o limite de long long (já terá se tornado negativa) quando tirarmos o mod. No entanto, conceitualmente, ele está correto.

Então, usando as propriedades vistas em cima, podemos fazer:

```cpp
int mod = 1e9+7;

long long exp(int p) {
  if(p == 0)
    return 1;
  return (3ll * exp(p-1)) % mod;
}

int main() {
  int n;
  scanf("%d",&n);
  printf("%lld\n", exp(n));
}

```

De forma que o código acima imprime (3^n) % (1000000007), sem causar overflow.

