export default () => ({
  backendPort: process.env.BACKEND_PORT
    ? parseInt(process.env.BACKEND_PORT)
    : 3000,
  frontendUrl: process.env.FRONTEND_URL ?? 'http://localhost:5173',
});
