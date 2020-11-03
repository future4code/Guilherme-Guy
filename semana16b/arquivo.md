### EXERCICIO 1

a) Explique o que é uma chave estrangeira

Resposta: ``` É o relacionamento entre distintas tabelas de dados do banco de dados.```

b) Crie a tabela e, ao menos, uma avaliação para cada um dos filme

Resposta: 
```
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);
```

c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.

Resposta: ``` Ocorre um erro pois não é perimitido criar pra filmes que nao existem ```

d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.

Resposta: ``` ALTER TABLE Movies DROP COLUMN rating;```

e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.

Resposta: ``` DELETE FROM Movies WHERE id = "002"; Não é possível deletar. ```

### EXERCICIO 2 

a)  Explique, com as suas palavras, essa tabela

Resposta: ``` Essa tabela se relaciona com a tabela de filmes e atores pelo ID.```

b) Crie, ao menos, 6 relações nessa tabela

Resposta: ``` OK ```

c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query

Resposta:``` Deu erro pq não é possível relacionar um ator que nao existe a um filme```

d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query

Resposta:``` Não é possível apagar um id que tenhe relação com outras tabelas```

#### EXERCICIO 3

a) Explique, com suas palavras, a query acima. O que é o operador ON?

Resposta:``` O operador ON diz quais partes devem ser iguais para fazer o JOIN.```

b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.

Resposta: 
``` 
SELECT m.id, r.rate, name FROM Movies m
INNER JOIN Rating r ON m.id = r.movie_id;
```

### EXERCICIO 4

a) Escreva uma query que retorne todos os filmes e suas avaliações (com essa avaliação existindo ou não). A sua query deve retornar somente o nome, id, nota do filme e comentário

Resposta: 
```
SELECT m.id as movie_id, m.name, r.rate as rating FROM Movies m
LEFT JOIN Rating r ON m.id = r.movie_id;
```

b) Escreva uma query que retorne todas as relações de elenco, junto com as informações do filme. A sua query deve retornar o id do filme, título do filme e id do ator

Resposta: 
```
SELECT m.id as movie_id, m.name, mc.actor_id FROM Movies m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;
```

c) Escreva uma query que retorne a média das avaliações de todos os filmes agrupada em relação aos filmes (mesmo que ele não tenha sido avaliado ainda)

Resposta: 
```
SELECT AVG(r.rate), m.id, m.name FROM Movies m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY (m.id);
```


### EXERCICIO 5 

a) Explique, com suas palavras essa query. Por que há a necessidade de dois JOIN?

Resposta: ``` ``` 

b) Altere a query para que ela retorne o id e o título do filme, e o id e o nome do ator. Coloque alias para facilitar o endentimento do retorno da query

Resposta: 
``` 
SELECT m.id as movie_id, m.name, a.id as actor_id, a.name FROM Movies m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
``` 

c) . Escreva uma query que retorne a média das avaliações de todos os filmes agrupada em relação aos filmes (mesmo que ele não tenha sido avaliado ainda)

Resposta: 
``` 
SELECT 
	m.id as movie_id, 
    m.name, 
    a.id as actor_id, 
    a.name, 
    r.rate, 
    r.comment 
FROM Movies m
LEFT JOIN Rating r on r.movie_id = m.id
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
``` 

### EXERCICIO 6 






