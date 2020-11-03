### EXERCICIO 1

a) Nesta tabela, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.
Resposta: VARCHAR é como se fosse uma string e DATE são pra datas. NOT NULL é para não ser possível deixar em branco. 

b) O comando SHOW é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: SHOW DATABASES e SHOW TABLES. Explique os resultados. 
Resposta: SHOW DATABASES mostra todas as databases disponívels e SHOW TABLES mostra as tabelas da database selecionada. 

c)O comando DESCRIBE pode ser usado para ver estrutura de uma tabela. Utilize o comando DESCRIBE Actor e explique os resultados.
Resposta: Mostra todos os campos da tabela. 


### EXERCICIO 2

a) Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963:
Resposta: 
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```

b)Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.
Resposta: Ocorreu um erro porque ID é uma chave primaria, não pode ter repetido. 

c) Resposta: Estão faltando os campos birth_date e gender, por isso o erro. Tem mais informações do que campos para coloca-las.

d) Resposta: Está faltando o name e como está configurado como NOT NULL, gera o erro. 

e) Resposta: Data não estava sendo passada da forma correta. 

f) Resposta: 
```
INSERT INTO Actor (id, name, salary, birth_date, gender) 
VALUES (
"006",
"Maria Casadevall",
500000,
"1985-05-08",
"famale"
);

INSERT INTO Actor (id, name, salary, birth_date, gender) 
VALUES (
"007",
"Guilherme Guy",
50000000,
"1993-11-08",
"male"
);
```



### EXERCICIO 3

a) Escreva uma query que retorne todas as informações das atrizes
Resposta: SELECT * from Actor WHERE gender="female";

b)  Escreva uma query que retorne o salário do ator com o nome Tony Ramos
Resposta: SELECT salary FROM Actor WHERE name="Tony Ramos";

c) Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.
Resposta: Não teremos retorno pois não temos generos cadastrados como inválidos.,

d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000
Resposta: SELECT id, name, salary FROM Actor WHERE salary < 500000

e) Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta
Resposta: O comanado rodou perfeitamente, apenas alterei "nome" pra "name" SELECT id, name from Actor WHERE id = "002"


### EXERCICIO 4

a. Explique com as suas palavras a query acima.
Resposta: Pesquisa por pessoas que tem a letra inicial do nome A ou J, E salário maior a 300000.


b. Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00
Resposta: Vai aparecer todos atores que não começam com letra A.

c. Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome. 
Resposta: SELECT * FROM Actor WHERE name LIKE "G%" OR name LIKE "%g%";

d. Escreva uma query com os atores que tenham a lerta "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00
Resposta: SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "%a%") OR (name LIKE "G%" OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000


### EXERCICIO 5
 
Resposta: Arquivos criados com sucesso.

### EXERCICIO 6

a) Retorne o id, título e avaliação a partir de um id específico;
Resposta: SELECT id, name, avaliation FROM Movies WHERE id = "004";

b. Retorne um filme a partir de um nome específico;
Resposta: SELECT * FROM Movies WHERE name = "Tropa de Elite";

c) Retorne o id, título e sinopse dos filmes com avaliação mínima de 7
Resposta: SELECT id, name, sinopse FROM Movies WHERE avaliation >= 7;

### EXERCICIO 7

a) Retorna um filme cujo título contenha a palavra vida
Resposta: SELECT * FROM Movies WHERE name LIKE "%vida%";

b) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer TERMO DE BUSCA para exemplificar.
Resposta: SELECT * FROM Movies WHERE name LIKE "%Flor%" OR sinopse LIKE "%Flor%";

c) Procure por todos os filmes que já tenham lançado
Resposta: SELECT * FROM Movies WHERE lauch_date < "2020-10-26";

d)  Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que 7.
Resposta: SELECT * FROM Movies WHERE lauch_date < "2020-10-26" AND (name LIKE "%Flor%" OR sinopse LIKE "%Flor%") AND avaliation > 7;


