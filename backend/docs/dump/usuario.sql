-- ----------------------------
-- Table structure for usuario
-- ----------------------------

DROP TABLE IF EXISTS "public"."usuario";
CREATE SEQUENCE id_seq;
CREATE TABLE "public"."usuario" (
  "id" int4 NOT NULL DEFAULT nextval('id_seq'::regclass),
  "nome" text COLLATE "pg_catalog"."default",
  "sobrenome" text COLLATE "pg_catalog"."default",
  "username" text COLLATE "pg_catalog"."default",
  "senha" text COLLATE "pg_catalog"."default",
  "salt" text COLLATE "pg_catalog"."default",
  "datacriacao" timestamp(6)
)
;
ALTER TABLE "public"."usuario" OWNER TO "postgres";

ALTER TABLE "public"."usuario" ADD CONSTRAINT "usuario_pkey" PRIMARY KEY ("id");

--Caso queira eliminar todos registros e reiniciar o id
--TRUNCAT table usuario;
--ALTER SEQUENCE id_seq RESTART WITH 1;
