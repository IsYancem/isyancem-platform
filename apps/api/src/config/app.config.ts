export const appConfig = () => ({
  app: {
    name: process.env.APP_NAME ?? 'ISYANCEM API',
    env: process.env.APP_ENV ?? 'development',
    port: Number(process.env.PORT ?? 3002),
  },
});