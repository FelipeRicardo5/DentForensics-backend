// src/config/swagger.js
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
      title: "API de Pericia Odontolegal",
      version: "1.0.0",
      description:
        "API para gestão de laudos, casos, evidências periciais odontológicos.",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor temporario de teste",
      },
      {
        apis: ["./src/routes/*.js"],
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  };
  
  const options = {
    swaggerDefinition,
    apis: ["/src/routes/*.js"],
  };

  const swaggerSpec = swaggerJSDoc(options);

  export default swaggerSpec; 


