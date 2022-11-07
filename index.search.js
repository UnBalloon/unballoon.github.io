var relearn_search_index=[{content:`O que é Complexidade? Em linhas gerais, a complexidade de tempo de um algoritmo é o quanto as variáveis de entrada impactam no seu tempo de execução.
Para se referir a complexidade de um algoritmo, se usa a notação Big O, denotada por O(N). A notação Big O tem o seguinte significado: No pior caso da execução deste algoritmo, o número de operações realizado será proporcional a N, e por simplicidade, eliminamos constantes e fatores não dominantes. A quantidade de operações que os computadores atuais executam em um segundo é por volta de 10^8, portanto podemos estimar o tempo de execução de um programa usando análise de complexidade. Basta fazer o cálculo de complexidade e dividir por 10^8, e a resposta será aproximadamente o tempo de execução em segundos. Esse mesmo conceito se extende a memória utilizada por um programa, podemos fazer o cálculo de complexidade e dividir o resultado por 10^6, e saberemos quantos MegaBytes serão utilizados pelo programa no pior caso.
Exemplos:
printf("Hello World\\n"); Esse código tem complexidade O(1) (também chamado de complexidade constante), porque nenhuma variável de entrada impacta no seu tempo de execução. A complexidade de memória também é O(1).
Loops int n; scanf("%d",\u0026n); for(int i = 0; i \u003c n; i++){ printf("%d\\n",i); } Esse código tem complexidade O(n), pois o seu tempo tempo de execução cresce linearmente dependendo da variável n. A memória necessária não depende de nenhuma variável de entrada então é O(1).
int n; scanf("%d",\u0026n); for(int i = 0; i \u003c 10*n; i++){ printf("%d\\n",i); } Esse código também tem complexidade O(n), porque eliminamos os fatores constantes para manter a simplicidade. Complexidade de memória O(1).
int n,m; scanf("%d %d",\u0026n,\u0026m); for(int i = 0; i \u003c n; i++){ printf("%d\\n",i); } for(int i = 0; i \u003c m; i++){ printf("%d\\n",i); } Muitas vezes, a complexidade depende de mais de uma variável de entrada. Como não temos nenhuma informação sobre o significado das variáveis, a complexidade é O(n+m). Se soubéssemos por exemplo que m fosse sempre muito maior que m, poderíamos dizer O(m). Mais uma vez a memória utilizada não depende de nenhuma variável de entrada.
Multiplicação de matrizes O código abaixo computa C = A * B, onde A é uma matriz n por p e B é uma matriz p por m.
for(int i = 0; i \u003c n; i++){ for(int j = 0; j \u003c m; j++){ C[i][j] = 0; for(int k = 0; k \u003c p; k++){ C[i][j] += A[i][k] * B[k][j]; } } }	Como os fors estão aninhados a complexidade do código é a multiplicação das complexidades de cada for, sendo então, O(n*m*p). A multiplicação produz a matriz C como resultado, que tem dimenções n por m, Como é necessário alocar esse espaço, a complexidade de memória é O(n*m).
Ordenação Um problema bastante estudado é o de ordenação. Existem vários algoritmos resolvem o problema eficientemente, não será mostrado um desses. O código a seguir ordena um vetor v de tamanho n.
for(int i = 0; i \u003c n; i++){ for(int j = i; j \u003c n; j++){ if(v[i] \u003e v[j]){ tmp = v[i]; v[i] = v[j]; v[j] = tmp; } } } A quantidade de vezes que o segundo loop executa depende do i, então é um pouco mais difícil de analisar a complexidade.
Ao longo das iterações do primeiro loop, a quantidade de iterações do segundo é n + (n-1) + (n-2) + (n-3) + ... + 1, ou seja, é soma de PA e podemos resolver para O((n+1)*n/2). Em análise de complexidade só nos importamos com quando as variáveis são muito grandes(tendem a infinito), de um modo bem bruto infinito e infinito/2 dá no mesmo, então podemos escrever a complexidade como O((n+1)*n). Novamente quando pensamos em números bem altos n e n+1 se tornam praticamente a mesma coisa e podemos concluir que a complexidade é O(n^2).
Portanto podemos dizer que a complexidade do código acima é O((n+1)*n/2), O((n+1)*n) ou O(n^2). Mas geralmente optamos pela forma mais simples que é O(n^2).
A intuição sobre a complexidade de memória pode acabar te enganando nesse exemplo. O motivo é o seguinte: o código apenas troca os valores de lugar dentro do vetor, não sendo necessário alocar um novo vetor com a resposta(Ao contrário da multiplicação de matrizes), então a complexidade de memória é O(1).
Recursão Também é possível analisar a complexidade de funções recursivas.
Exponenciação int slow_exp(int base, int e){ if(e == 0) return 1; return base * slow_exp(base,e-1); } Nessa função, em cada chamada, o expoente decresce em um, atingindo o caso base quando se iguala a 0. Então são feitas O(n) chamadas. Quando avaliamos complexidade de memória de funções recursivas, temos que levar em conta a pilha de execução também. São empilhadas n chamadas na pilha, então a complexidade de memória é O(n).
Exponenciação rápida int fast_exp(int base, int e){ if(e == 0) return 1; if(e % 2) return base * fast_exp(base * base,e/2); else return fast_exp(base * base, e/2); } Essa é uma função que também computa uma exponenciação. É um bom exemplo de como problemas abordados de forma diferente ou usando propriedades matemáticas podem ser resolvidos de forma mas eficiente. Em cada chamada na recursão, o expoente é dividido por 2, atingindo o caso base quando se iguala a 0. É fácil ver que o número 2^k levaria k chamadas para atingir o caso base, isso ocorre porque log2 (2^k) = k, então a complexidade é O(log N). A complexidade de memória é justificada da mesma forma que no caso anterior, a memória utilizada será o número de chamadas recursivas, então, O(log n).
Fibonacci int fibonacci(int n){ if(n == 0) return 0; if(n == 1) return 1; return fibonacci(n-1) + fibonacci(n-2); } A famosa função de fibonacci. Essa função recursiva é bem bonita de se ver declarada, mas não é nada eficiente.
Pense que queremos Calcular Fibonacci(7)
Essa a árvore formada pelas chamadas recursivas, olhe quantas vezes recomputamos as mesmas coisas. A complexidade dessa função é O(2^n), pois para cada chamada de fibonacci recursiva, fazemos outras duas, e acabamos recomputando várias vezes as mesmas coisas. Implemente essa função em sua máquina e faça uma chamada de fibonacci(40), já deve ser possível sentir o tempo que o programa leva para processar isso.
A complexidade de memória dessa função pode ser um pouco mais complicada de analisar vamos por partes. No total, serão feitos O(2^n) chamadas recursivas, e todas elas precisaram de um espaço na pilha de execução, no entanto, as 2^n chamadas não coexistirão na pilha de execução. Olhando bem atentamente e seguindo o fluxo das chamadas recursivas, é possível ver que no máximo um ‘ramo’ da árvore estará na pilha por vez, o ramo mais longo tem comprimento n portanto, complexidade de memória O(n).
VideoAulas Complementares https://www.youtube.com/watch?v=YoZPTyGL2IQ (12 min.)
https://www.youtube.com/watch?v=moPtwq_cVH8 (51 min. MIT)
`,description:"",tags:["iniciante"],title:"Complexidade",uri:"/materiais/fundamentos/complexidade/"},{content:"Tudo o que você precisa saber sobre C++ Subpáginas Complexidade Entrada/Saída Declarações ",description:"",tags:null,title:"Fundamentos do C++",uri:"/materiais/fundamentos/"},{content:"Conteúdos de Programação Competitiva Subpáginas Fundamentos do C++ Algoritmos ",description:"",tags:null,title:"Materiais",uri:"/materiais/"},{content:"",description:"",tags:null,title:"Algoritmos",uri:"/materiais/algoritmos/"},{content:`Entrada O objeto “cin” representa o stream de entrada no C++. Ele realiza a leitura de um sequência de dados, sem espaços e sem tabulações, vindas do teclado. Para coletar estes dados armazenados, usa-se o “operador de extração” que “extrai” dados do stream.
Lendo um Input A primeira linha terá N que é a quantidade de números a serem lidos.
A segunda linha será os N números.
input: 4 1 5 2 3 #include \u003cbits/stdc++.h\u003e using namespace std; int main(){ int n; cin\u003e\u003en; for(int i=0; i\u003cn; i++){ int numero; cin\u003e\u003enumero; } return 0; } Saída O objeto “cout” representa o stream de saída no C++. Este stream é uma espécie de sequência (fluxo) de dados a serem impressos na tela. Para realizar a impressão, usa-se o “operador de inserção” que “insere” dados dentro do stream.
Printando o famoso “Hello World”
#include \u003cbits/stdc++.h\u003e using namespace std; int main(){ cout\u003c\u003c"Hello World"\u003c\u003cendl; return 0; } Informação O “endl” é usado para fazer quebra de linha, porém, pode ser mais lento que o “\\n”.
Casas Decimais Para printar as casas decimais, precisamos usar o “fixed” que é uma função do C++ usada para formatar a saída, juntamente com o “setprecision”, que diz quantas casas será printada.
#include \u003cbits/stdc++.h\u003e using namespace std; int main(){ double pi = 3.141592653; cout\u003c\u003cfixed; cout\u003c\u003csetprecision(4); cout\u003c\u003cpi\u003c\u003cendl; // 3.1415 return 0; } Fast Cin Informação O printf e o scanf do C são mais rápidos do que o cin e o cout do C++.
Isso ocorre porque o C++ usa a sincronização do output, ou seja, enquanto ele está lendo o input, o programa pode responder ao mesmo tempo.
A resolução para isso, é desabilitar a sincronização no C++:
ios_base::sync_with_stdio(false); cin.tie(NULL); Exemplo #include \u003cbits/stdc++.h\u003e using namespace std; int main(){ ios_base::sync_with_stdio(false); cin.tie(NULL); return 0; } `,description:"",tags:["iniciante"],title:"Entrada/Saída",uri:"/materiais/fundamentos/input-output/"},{content:"Subpáginas Strings Vector Pairs Iterators ",description:"",tags:null,title:"Declarações",uri:"/materiais/fundamentos/declaracoes/"},{content:`No C++ representa uma sequência de caracteres
Podemos declarar uma string como:
string nomevar; string nomevar = constante; string nomevar = char ∗ variavel; string nomevar(char ∗ variavel); string nomevar(tamanho, constante char); Concatenação Podemos usar o operador “+” para concatenar duas strings
#include \u003cbits/stdc++.h\u003e using namespace std; int main(){ string a = "abc"; string b = "def"; string c = a + b; cout\u003c\u003cc\u003c\u003cendl; // abcdef return 0; } Transformando um inteiro em string Podemos transformar um inteiro em uma string usando a função “to_string()”
#include \u003cbits/stdc++.h\u003e using namespace std; int main(){ int x = 123; string s = to_string(x); cout\u003c\u003cs\u003c\u003cendl; return 0; } `,description:"",tags:["iniciante"],title:"Strings",uri:"/materiais/fundamentos/declaracoes/string/"},{content:`Vector pode ser entendido como uma estruturas de dados similar a um array de tamanho expansível.
A diferença principal entre vector e array é a alocação: no array adota-se alocação estática, enquanto que no vector a alocaçãao é dinâmica.
Inicializar #include \u003cbits/stdc++.h\u003e using namespace std; int main(){ // inicializando vetores vazios vector\u003cdouble\u003e vd; vector\u003cpair\u003cint,double\u003e\u003e vid; vector\u003cstring\u003e vs; vector\u003cint\u003e v; // vector\u003cint\u003e v(tamanho, valor) vector\u003cint\u003e v(4, 0); // {0, 0, 0, 0} vetor de 4 posições com valor 0 vector\u003cint\u003e v(4); // {0, 0, 0, 0} por default, inicializa como 0 v.push_back(5); // Adiciona o elemento 5 // v = {0, 0, 0, 0, 5} v.pop_back(); // v = {0, 0, 0, 0} } Iterar #include \u003cbits/stdc++.h\u003e using namespace std; int main(){ vector\u003cint\u003e v = {1, 2, 3, 4, 5}; // printa um elemento em cada linha for(int i=0; i\u003cv.size(); i++){ cout\u003c\u003c v[i] \u003c\u003c endl; } } Informação O método size() retorna a quantidade de elementos existentes em um vector. Complexidade: O(1)
Ordenar Complexidade O(log(N))
#include \u003cbits/stdc++.h\u003e using namespace std; int main(){ vector\u003cint\u003e v = {3, 4, 1, 2, 5}; sort(v.begin(), v.end()); // ordena o vetor // v = {1, 2, 3, 4, 5} } Inverter Complexidade O(N)
#include \u003cbits/stdc++.h\u003e using namespace std; int main(){ vector\u003cint\u003e v = {1, 2, 3, 4, 5}; reverse(v.begin(), v.end()); // v = {5, 4, 3, 2, 1} } Vector de Pair #include \u003cbits/stdc++.h\u003e using namespace std; int main(){ vector\u003cpair\u003cint,int\u003e\u003e v = {{1, 2}, {3, 4}, {5, 6}}; // v[0].first = 1 // v[0].second = 2 } `,description:"",tags:["iniciante"],title:"Vector",uri:"/materiais/fundamentos/declaracoes/vector/"},{content:` Um “pair” é um contêiner que consiste de dois tipos de dados ou objetos.
Declaramos um pair como:
pair\u003ctipodado1, tipodado2\u003e variavel; Podemos inicializá-lo usando o make_pair ou diretamente:
variavel = make_pair(dado1, dado2); variavel = {dado1, dado2}; O primeiro elemento é acessado usando o “first” e o segundo usando “second” variavel.first; variavel.second; Exemplo 1: Um Pair que armazena 2 inteiros #include \u003cbits/stdc++.h\u003e using namespace std; int main(){ pair\u003cint, int\u003e pii; pii = {5, 10}; cout\u003c\u003c pii.first \u003c\u003c " " \u003c\u003c pii.second\u003c\u003c"\\n"; // 5 10 return 0; } Exemplo 2: Um Pair que armazena 1 inteiro e 1 double #include \u003cbits/stdc++.h\u003e using namespace std; int main(){ pair\u003cint, double\u003e pii; pii = {2, 1.5365}; cout\u003c\u003c pii.first \u003c\u003c " " \u003c\u003c pii.second\u003c\u003c"\\n"; // 2 1.5365 return 0; } Comparando Variáveis: #include \u003cbits/stdc++.h\u003e using namespace std; int main(){ pair\u003cint, int\u003e v1, v2; v1 = {3, 1}; v2 = {2, 2}; if(v1 \u003e v2) cout\u003c\u003c "v1 é maior que v2"; else cout\u003c\u003c "v1 é menor ou igual a v2"; return 0; } `,description:"",tags:["iniciante"],title:"Pairs",uri:"/materiais/fundamentos/declaracoes/pair/"},{content:`Iterators são tipos específicos de ponteiros que referenciam endereçoos de memória de objetos e contêiners STL.
Exemplo 1 #include \u003cbits/stdc++.h\u003e using namespace std; int main(){ vector\u003cint\u003e v = {1, 2, 3, 4, 5}; vector\u003cint\u003e::iterator ptr; cout\u003c\u003c"Elementos do Vetor"\u003c\u003cendl; for(ptr = v.begin(); ptr != v.end(); ptr++){ cout\u003c\u003c(*ptr)\u003c\u003cendl; } return 0; } Dica Você pode usar o auto no lugar de vector\u003cint\u003e::iterator, para facilitar
Exemplo 2 #include \u003cbits/stdc++.h\u003e using namespace std; int main(){ vector\u003cint\u003e ar = { 1, 2, 3, 4, 5 }; // Declaring iterators to a vector vector\u003cint\u003e::iterator ptr = ar.begin(); vector\u003cint\u003e::iterator ftr = ar.end(); // Using next() to return new iterator // points to 4 auto it = next(ptr, 3); // Using prev() to return new iterator // points to 3 auto it1 = prev(ftr, 3); // Displaying iterator position cout \u003c\u003c "The position of new iterator using next() is : "; cout \u003c\u003c *it \u003c\u003c " "; cout \u003c\u003c endl; // Displaying iterator position cout \u003c\u003c "The position of new iterator using prev() is : "; cout \u003c\u003c *it1 \u003c\u003c " "; cout \u003c\u003c endl; // The position of new iterator using next() is : 4 // The position of new iterator using prev() is : 3 } `,description:"",tags:["iniciante"],title:"Iterators",uri:"/materiais/fundamentos/declaracoes/iterators/"},{content:"",description:"",tags:null,title:"Categories",uri:"/categories/"},{content:"",description:"",tags:null,title:"iniciante",uri:"/tags/iniciante/"},{content:"",description:"",tags:null,title:"Tags",uri:"/tags/"},{content:"O Grupo de programação competitiva mais top do Centro-Oeste Subpáginas Materiais ",description:"",tags:null,title:"UnBalloon",uri:"/"}]