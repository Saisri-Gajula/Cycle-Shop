# Use an official OpenJDK runtime as a parent image
FROM openjdk:17-jdk-slim

 



# Set the working directory inside the container
WORKDIR /app

 

# Copy the packaged JAR file into the container
# COPY target/spring-mysql-demo-*.jar app.jar
# COPY target/spring-mysql-demo-1.0.jar app.jar

 COPY ../target/spring-mysql-demo-1.0.jar app.jar


# Expose port 8080 for the Spring Boot application
EXPOSE 8080

# Command to run the application
CMD ["java", "-jar", "app.jar"]