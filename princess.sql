create database bd_princess;
use bd_princess;

INSERT INTO tbl_avalies (nome_avalie, createdAt, updatedAt) VALUES ('💜💜💜💜💜', now(), now());
INSERT INTO tbl_avalies (nome_avalie, createdAt, updatedAt) VALUES ('💙💙💙💙', now(), now());
INSERT INTO tbl_avalies (nome_avalie, createdAt, updatedAt) VALUES ('💙💙💙', now(), now());
INSERT INTO tbl_avalies (nome_avalie, createdAt, updatedAt) VALUES ('💙💙', now(), now());
INSERT INTO tbl_avalies (nome_avalie, createdAt, updatedAt) VALUES ('💙', now(), now());

INSERT INTO tbl_categoria_nichos (nome_categoria_nicho, createdAt, updatedAt) VALUES ('Cabelo', now(), now());
INSERT INTO tbl_categoria_nichos (nome_categoria_nicho, createdAt, updatedAt) VALUES ('SkinCare', now(), now());
INSERT INTO tbl_categoria_nichos (nome_categoria_nicho, createdAt, updatedAt) VALUES ('BoryCare', now(), now());
INSERT INTO tbl_categoria_nichos (nome_categoria_nicho, createdAt, updatedAt) VALUES ('Maquiagem', now(), now());
INSERT INTO tbl_categoria_nichos (nome_categoria_nicho, createdAt, updatedAt) VALUES ('Unha', now(), now());

INSERT INTO tbl_cadastro_avalia (produto,marca,ean,utilizacaoCorreta,usoPessoal,dica, createdAt, updatedAt) VALUES ('Sabonete Facial Suavie','Darrow','3282770144369','Produto desemvolvido para as peles sensíveis, utilizado para limpeza facial, recomendado que o utilize ao lavar ao rosto duas vezes por dia','Utilizei Conforme a recomendação da minha médica, ele tem um bom sensorial e não sensibilizou a pele','Minha dica é que nao precisa esfregar muito a pele para limpar isso pode sensibilizar a pele ainda mais', now(), now());
