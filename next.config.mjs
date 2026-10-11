/** @type {import('next').NextConfig} */
const nextConfig = {
  // WalletConnect uses Pino during SSR. Its worker files must be loaded by Node,
  // rather than bundled by Turbopack along with thread-stream's test fixtures.
  serverExternalPackages: ['pino', 'thread-stream'],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
