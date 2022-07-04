# Ejercicio práctico NTT DATA

---

## Base de datos de prueba creada en [Cockroach Labs](<https://www.cockroachlabs.com>)

URL de conexión a la base de datos para fines comprobativos:

      postgresql://cristhian:U6ZE8Ufs8sQWT-LNfHWeaA@free-tier14.aws-us-east-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster=backend-test-3222


Script de base de datos para fines comprobativos:


      CREATE SEQUENCE organization_sequence START 1 INCREMENT 1;
      CREATE SEQUENCE tribe_sequence START 1 INCREMENT 1;
      CREATE SEQUENCE repository_sequence START 1 INCREMENT 1;
      CREATE SEQUENCE metrics_sequence START 1 INCREMENT 1;

      CREATE TABLE organization(
            id_organization INT DEFAULT nextval('organization_sequence'),
            "name" VARCHAR(50) NOT NULL,
            "status" INT NOT NULL,
            CONSTRAINT organization_pkey PRIMARY KEY(id_organization)
      );

      CREATE TABLE tribe(
            id_tribe INT DEFAULT nextval('tribe_sequence'),
            "name" VARCHAR(50) NOT NULL,
            "status" INT NOT NULL,
            id_organization INT NOT NULL,
            CONSTRAINT tribe_pkey PRIMARY KEY(id_tribe),
            CONSTRAINT tribe_id_organization_fkey FOREIGN KEY(id_organization) REFERENCES organization(id_organization) ON DELETE CASCADE ON UPDATE CASCADE
      );

      CREATE TABLE repository(
            id_repository INT DEFAULT nextval('repository_sequence'),
            "name" VARCHAR(50) NOT NULL,
            "state" CHAR(1) NOT NULL,
            create_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            "status" CHAR(1) NOT NULL,
            id_tribe INT NOT NULL,
            CONSTRAINT repository_pkey PRIMARY KEY(id_repository),
            CONSTRAINT repository_id_tribe_fkey FOREIGN KEY(id_tribe) REFERENCES tribe(id_tribe) ON DELETE CASCADE ON UPDATE CASCADE,
            CONSTRAINT valid_state_check CHECK("state" IN ('E', 'D', 'A')),
            CONSTRAINT valid_status_check CHECK("status" IN ('A', 'I'))
      );

      CREATE TABLE metrics(
            id_repository INT DEFAULT nextval('metrics_sequence'),
            coverage DECIMAL NOT NULL,
            bugs INT NOT NULL,
            vulnerabilities INT NOT NULL,
            hotspot INT NOT NULL,
            code_smells INT NOT NULL,
            CONSTRAINT metrics_pkey PRIMARY KEY(id_repository),
            CONSTRAINT metrics_id_repository_fkey FOREIGN KEY(id_repository) REFERENCES repository(id_repository) ON DELETE CASCADE ON UPDATE CASCADE,
            CONSTRAINT coverage_percentage CHECK (coverage BETWEEN 0 AND 100)
      );
