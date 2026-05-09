import { createRequestHandler } from '@tanstack/react-start/server';
import { getRouterManifest } from '@tanstack/react-start/router-manifest';
import { createRouter } from './src/router';

export default async (req, res) => {
  const router = createRouter();
  const handler = createRequestHandler({
    router,
  });
  
  return handler(req, res);
};
