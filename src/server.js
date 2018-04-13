import Hapi from 'hapi';

const port = process.env.PORT || 9292;

const host = process.env.HOST || 'localhost';

const server = process.env.NODE_ENVIRONMENT === 'production' ?
  Hapi.server(process.env.PORT) : Hapi.server({ port, host });

export default server;
