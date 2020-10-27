### EXERCICIO 1

a) ALTER TABLE Actor DROP COLUMN salary;

Resposta: ```Exclui a coluna salary ```

b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6);

Resposta: ``` Alteraria o nome da coluna gender, pra sex. ```

c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255);

Resposta:  ``` Altera a quantidade de caracteres da coluna gender, pra 255. ``` 

d) Agora,  altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres

Resposta: ``` ALTER TABLE Actor CHANGE gender gender VARCHAR(100); ```


### EXERCICIO 2

a) Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003

Resposta:

```
UPDATE Actor
SET name = "Solange Frazão", birth_date = "1960-10-19"
WHERE id = "003";
```

b) Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PÃES. Então, escreva outra query para voltar ao nome anterior

Resposta: 
```
UPDATE Actor
SET name = UPPER("juliana paes")
WHERE id = "005";

UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "005";
``` 

c) Escreva uma query que atualize todas as informações do ator com o id 005     
Resposta: 

```
UPDATE Actor
SET name = "Ana Maria Braga",
salary = 800000, 
birth_date = "1940-05-04",
gender = "female"
WHERE id = "005";
``` 

d)  Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado. 

Resposta:  ``` Deu como atualizado, mas nada foi adicionado a tabela, pois não tem como atualizar algo que não existe. ```


### EXERCICIO 3

a) Escreva uma query que apague a atriz com o nome Fernanda Montenegro (não tenho mais a Fernanda Montenegro, pois foi alterado em um exercicio anterior)

Resposta: ``` DELETE FROM Actor WHERE name = "Guilherme Guy" ``` 

b)  Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00

Resposta: ``` DELETE FROM Actor WHERE salary > 1000000 AND gender = "male"; ```



### EXERCICIO 4 

a)  Escreva uma query que pegue o maior salário de todos os atores e atrizes

Resposta: ``` SELECT MAX(salary) FROM Actor; ```

b) Escreva uma query que pegue o menor salário das atrizes

Resposta: ``` SELECT MIN(salary) FROM Actor WHERE gender = "female"; ```

c) Escreva uma query que pegue a quantidade de atrizes

Resposta: ``` SELECT COUNT(*) FROM Actor WHERE gender = "female" ``` 

d) Escreva uma query que pegue a soma de todos os salários

Resposta: ``` SELECT SUM(salary) FROM Actor; ``` 


### EXERCICO 5

a) Releia a última query. Teste-a. Explique o resultado com as suas palavras

Resposta: Está query conta o número de atores e atrizes, separando por gender.

b) Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética

Resposta: ``` SELECT id, name From Actor ORDER BY name DESC; ``` 

c) Faça uma query que retorne todos os atores ordenados pelo salário

Resposta: ``` SELECT * FROM Actor ORDER BY salary DESC; ```

d) Faça uma query que retorne os atores com os três maiores salarios

Resposta: ``` SELECT * FROM Actor ORDER BY salary DESC LIMIT 3; ```

e) Faça uma query que retorne a média de salário por gênero

Resposta:  ``` SELECT AVG(salary), gender FROM Actor GROUP BY gender; ```


### EXERCICIO 6 

a)  Altere a tabela de Movie e adicione um novo parâmetro: playing_limit_date que indique a data limite em que o filme será passado no cinema. 

Resposta: ``` ALTER TABLE Movies ADD playing_limit_date DATE; ```

b)  Altere a tabela de Movie e adicione um novo parâmetro: playing_limit_date que indique a data limite em que o filme será passado no cinema. 

Resposta: ```ALTER TABLE Movies CHANGE avaliation avaliation FLOAT;```

c) Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído

Resposta: 

``` 
UPDATE Movies
SET playing_limit_date = "2020-12-12"
WHERE id = "004";

UPDATE Movies
SET playing_limit_date = "2020-10-20"
WHERE id = "003";

``` 

d) Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.

Resposta: ``` Deu como atualizado, mas nada foi adicionado a tabela, pois não tem como atualizar algo que não existe. ```

### EXERCICIO 7

a) Quantos filmes em cartaz possuem avaliações maiores do que `7.5`?

Resposta: ``` SELECT COUNT(*) FROM Movies WHERE avaliation > 7.5; ``` 

b) Qual a média das avaliações dos filmes?

Resposta: ``` SELECT AVG(avaliation) FROM Movies ``` 

c) Qual a quantidade de filmes em cartaz?

Resposta: ``` SELECT COUNT(*) FROM Movies WHERE playing_limit_date > CURDATE(); ``` 

d) Qual a quantidade de filmes que ainda irão lançar?

Resposta: ```  SELECT COUNT(*) FROM Movies WHERE launch_date < CURDATE();  ``` 

e) Qual a maior nota dos filmes?

Resposta: ``` SELECT MAX(rating) FROM Movies;  ``` 

f) Qual a menor nota dos filmes?

Resposta: ``` SELECT MIN(rating) FROM Movies;  ``` 


### EXERCICIO 8 

a) Retorne todos os filmes em ordem alfabética

Resposta: ``` SELECT * FROM Movies ORDER BY name ASC; ``` 

b)  Retorne os 5 primerios filmes em ordem descrente alfabética 

Resposta: ``` SELECT * FROM Movies ORDER BY name DESC LIMIT 5; ```

c)  Retorne os 3 filmes mais recentes em cartaz

Resposta: ``` SELECT * FROM Movie WHERE launch_date < CURDATE()  ORDER BY launch_date DESC LIMIT 3; ```

d) Retorne os 3 filmes melhor avalidos

Resposta: ``` SELECT * FROM Movies ORDER BY avaliation DESC LIMIT 3; ```