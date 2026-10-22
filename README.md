# ADSO-Calidad-Git-Johan-castro

Proyecto colaborativo para practicar el aseguramiento de calidad mediante Git y GitHub.

## Módulos

- `registro.js`: registra usuarios y valida nombre y correo.
- `reportes.js`: genera un resumen de usuarios.
- `index.js`: ejemplo de uso de los módulos.
- `test/`: contiene las pruebas automatizadas.
- `docs/`: contiene la documentación del proyecto.

## Requisitos

- Node.js 18 o superior.
- Git.

## Ejecutar el proyecto

```bash
npm start
```

## Ejecutar las pruebas

```bash
npm test
```

## Flujo de trabajo colaborativo

1. Crear una rama para cada módulo.
2. Realizar al menos tres commits pequeños por rama.
3. Usar mensajes descriptivos como `feat:`, `fix:` y `docs:`.
4. Subir las ramas a GitHub.
5. Crear Pull Requests dirigidos a `main`.
6. Solicitar la revisión del compañero.
7. Corregir observaciones y fusionar los Pull Requests cuando estén aprobados.
8. Resolver los conflictos de código y documentar el proceso.

## Archivo .gitignore

El archivo `.gitignore` excluye variables de entorno, logs, dependencias instaladas, archivos compilados y archivos temporales. No se deben subir contraseñas ni secretos reales.
## Módulo de Reportes
Permite generar reportes estadísticos a partir de una lista válida de usuarios.