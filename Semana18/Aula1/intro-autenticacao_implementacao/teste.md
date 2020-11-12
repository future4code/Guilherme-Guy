### EXERCICIO 1: 

a. Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?

Resposta: ``` Concordo, senhas em string geram mais opções (letras, numeroes e simbolos) e numeros não (apenas numeros) ```

b. A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.

Reposta: 
```
import { v4 } from "uuid";

export function generateId(): string {
    return v4();
  }
``` 

### EXERCICIO 2: 

b)  Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.

```
CREATE TABLE User (
		id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
```


### EXERCICIO 3: 

a. O que a linha as string faz? Por que precisamos usar ela ali? 

Resposta:   ``` Pra garantir que tá recebendo uma string ```

b.
