-- SEQUENCE: public.Genders_id_seq

-- DROP SEQUENCE IF EXISTS public."Genders_id_seq";

CREATE SEQUENCE IF NOT EXISTS public."Genders_id_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 9223372036854775807
    CACHE 1;

ALTER SEQUENCE public."Genders_id_seq"
    OWNER TO postgres;


-- Table: public.Genders

-- DROP TABLE IF EXISTS public."Genders";

CREATE TABLE IF NOT EXISTS public."Genders"
(
    id integer NOT NULL DEFAULT nextval('"Genders_id_seq"'::regclass),
    name character varying COLLATE pg_catalog."default",
    date_created timestamp without time zone,
    CONSTRAINT "Genders_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Genders"
    OWNER to postgres;


-- Table: public.type_of_identifications

-- DROP TABLE IF EXISTS public.type_of_identifications;

CREATE TABLE IF NOT EXISTS public.type_of_identifications
(
    id integer NOT NULL DEFAULT nextval('type_of_identifications_id_seq'::regclass),
    identification character varying COLLATE pg_catalog."default" NOT NULL,
    date_created timestamp without time zone,
    CONSTRAINT type_of_identifications_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.type_of_identifications
    OWNER to postgres;


    -- Table: public.users

-- DROP TABLE IF EXISTS public.users;

CREATE TABLE IF NOT EXISTS public.users
(
    id integer NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    id_gender integer,
    id_type_of_identification integer,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT "FK_genders_user" FOREIGN KEY (id_gender)
        REFERENCES public."Genders" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT "FK_identifications_user" FOREIGN KEY (id_type_of_identification)
        REFERENCES public.type_of_identifications (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;