const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? process.env.HOST : 'https://your-domain.com';