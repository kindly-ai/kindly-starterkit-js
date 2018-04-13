import Hapi from 'hapi';

const port = process.env.PORT || 9292;
const host = process.env.HOST || '0.0.0.0';
const server = Hapi.server({ port, host });

export default server;
