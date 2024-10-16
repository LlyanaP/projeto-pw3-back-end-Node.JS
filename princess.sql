SELECT * FROM bd_princess.tbl_categoria_nichos;

INSERT INTO tbl_avalies (nome_avalie, createdAt, updatedAt) VALUES ('💙💙💙💚💛', now(), now());
INSERT INTO tbl_avalies (nome_avalie, createdAt, updatedAt) VALUES ('💙💙💙💙', now(), now());
INSERT INTO tbl_avalies (nome_avalie, createdAt, updatedAt) VALUES ('💙💙💙', now(), now());
INSERT INTO tbl_avalies (nome_avalie, createdAt, updatedAt) VALUES ('💙💙', now(), now());
INSERT INTO tbl_avalies (nome_avalie, createdAt, updatedAt) VALUES ('💙', now(), now());

UPDATE tbl_avalies
SET nome_avalie = '💜💜💜💜💜', updatedAt = NOW()
WHERE cod_avalie = 1;