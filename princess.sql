SELECT * FROM bd_princess.tbl_categoria_nichos;

INSERT INTO tbl_avalies (nome_avalie, createdAt, updatedAt) VALUES ('💙💙💙💚💛', now(), now());
INSERT INTO tbl_avalies (nome_avalie, createdAt, updatedAt) VALUES ('💙💙💙💙', now(), now());
INSERT INTO tbl_avalies (nome_avalie, createdAt, updatedAt) VALUES ('💙💙💙', now(), now());
INSERT INTO tbl_avalies (nome_avalie, createdAt, updatedAt) VALUES ('💙💙', now(), now());
INSERT INTO tbl_avalies (nome_avalie, createdAt, updatedAt) VALUES ('💙', now(), now());

UPDATE tbl_avalies
SET nome_avalie = '💜💜💜💜💜', updatedAt = NOW()
WHERE cod_avalie = 1;

INSERT INTO tbl_cadastro_avalia (produto,marca,ean,utilizacaoCorreta,usoPessoal,dica, createdAt, updatedAt) VALUES ('Sabonete Facial Suavie','Darrow','3282770144369','Produto desemvolvido para as peles sensíveis, utilizado para limpeza facial, recomendado que o utilize ao lavar ao rosto duas vezes por dia','Utilizei Conforme a recomendação da minha médica, ele tem um bom sensorial e não sensibilizou a pele','Minha dica é que nao precisa esfregar muito a pele para limpar isso pode sensibilizar a pele ainda mais', now(), now());
INSERT INTO tbl_cadastro_avalia (nome_avalie, createdAt, updatedAt) VALUES ('💙💙💙💙', now(), now());
INSERT INTO tbl_cadastro_avalia (nome_avalie, createdAt, updatedAt) VALUES ('💙💙💙', now(), now());
INSERT INTO tbl_cadastro_avalia (nome_avalie, createdAt, updatedAt) VALUES ('💙💙', now(), now());
INSERT INTO tbl_cadastro_avalia (nome_avalie, createdAt, updatedAt) VALUES ('💙', now(), now());

delete from tbl_cadastro_avalia
WHERE cod_cadastro_avalia = 3;