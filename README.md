# TDS-Rekognition

Tarea de Taller de Diseño de Sistemas - AWS Rekognition: Comparación de rostros

## Descripción del programa

Este programa compara dos imagenes y busca caras que coincidan entre las dos,
extrae estas imagenes desde un Bucket de AWS S3 y utiliza la función CompareFace
ofrecida por el servicio AWS Rekognition.

## Tecnologías usadas

npm 6.14.11
NodeJs v14.15.4
AWS Rekognition
AWS S3

## Configuraciones requeridas

Configurar archivo .ENV con las siguientes entradas:

AWS_ACCESS_KEY_ID: Access key id correspondiente al usuario del que se usarán permisos para usar los servicios de AWS, se puede obtener desde el panel de IAM

AWS_SECRET_ACCESS_KEY: Secret access key correspondiente al usuario del que se usarán permisos para usar los servicios de AWS, se puede obtener desde el panel de IAM

AWS_REGION: Región de aws en la que se encuentra el S3 Bucket y en la que se
accederá al servicio de AWS Rekognition

S3_BUCKET_NAME: Nombre del Bucket S3

PHOTO_SOURCE: Nombre de la imagen incluyendo su extensión de la cual se busca encontrar caras parecidas, por ejemplo: source.jpg

PHOTO_TARGET: Nombre de la imagen incluyendo su extensión en la que se buscarán las caras parecidas a la fuente, por ejemplo: target.jpg

SIMILARITY_THRESHOLD: Porcentaje de similitud que se requerirá para considerar que las caras son parecidas.

## Instrucciones para iniciar programa

Ejecutar en la raiz del proyecto:

```bash
npm install
node main.js
```
