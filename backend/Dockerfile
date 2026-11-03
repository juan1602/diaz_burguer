# Imagen para desplegar el backend en Render (plan gratis), que no trae Java:
# se compila con Maven y se corre con una imagen liviana solo con Java.

# Etapa 1: compilar con Maven
FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
# Descargar dependencias primero (cache de Docker)
RUN mvn dependency:go-offline -q
COPY src ./src
RUN mvn clean package -DskipTests -q

# Etapa 2: imagen final ligera solo con Java
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
# El plan gratis de Render tiene 512 MB de memoria: se limita Java al 75 %
# para que no lo cierren por pasarse.
ENV JAVA_TOOL_OPTIONS="-XX:MaxRAMPercentage=75 -XX:+UseSerialGC"
# Render indica el puerto en la variable PORT (application.properties la lee).
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
