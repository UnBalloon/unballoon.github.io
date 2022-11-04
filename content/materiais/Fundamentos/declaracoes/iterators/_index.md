+++
archetype = "chapter"
title = "Iterators"
weight = 6
tags = ["iniciante"]
+++

Iterators são tipos específicos de ponteiros que referenciam
endereçoos de memória de objetos e contêiners STL.

## Exemplo 1

```cpp
#include <bits/stdc++.h>
using namespace std;

int main(){

    vector<int> v = {1, 2, 3, 4, 5};
    vector<int>::iterator ptr;

    cout<<"Elementos do Vetor"<<endl;

    for(ptr = v.begin(); ptr != v.end(); ptr++){
        cout<<(*ptr)<<endl;
    }

    return 0;
}
```

{{% notice style="tip" %}}
Você pode usar o **auto** no lugar de ```vector<int>::iterator```, para facilitar
{{% /notice %}}

## Exemplo 2

```cpp
#include <bits/stdc++.h>
using namespace std;

int main(){
    vector<int> ar = { 1, 2, 3, 4, 5 };
      
    // Declaring iterators to a vector
    vector<int>::iterator ptr = ar.begin();
    vector<int>::iterator ftr = ar.end();
     
     
    // Using next() to return new iterator
    // points to 4
    auto it = next(ptr, 3);
      
    // Using prev() to return new iterator
    // points to 3
    auto it1 = prev(ftr, 3);
      
    // Displaying iterator position
    cout << "The position of new iterator using next() is : ";
    cout << *it << " ";
    cout << endl;
      
    // Displaying iterator position
    cout << "The position of new iterator using prev()  is : ";
    cout << *it1 << " ";
    cout << endl;

    // The position of new iterator using next() is : 4 
    // The position of new iterator using prev()  is : 3 
}
```
