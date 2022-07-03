# Servicio simulado (Mock)

Este servicio es un mock para obtener el tipo de verificación que posee un repositorio.

Ejemplo de request

        curl --request GET --url 'http://localhost:3000/api/repositories/verification?ids=[1]'

Ejemplo de respuesta:

        {
           "repositories": [
                {
                    "id": 1,
                    "state": 604
                },
           ]
        }

Donde:

- Id: Representa al identificador único del repositorio.
- State: Representa el código de verificación actual del repositorio.

Código de verificación

- 604: Verificado
- 605: En espera
- 606: Aprobado

---

## Pasos para ejecutar proyecto

1. Agregar .env con las variables de configuración requeridas (revisar .env.example).

2. Correr docker-compose con el comando.

        docker-compose up -d
