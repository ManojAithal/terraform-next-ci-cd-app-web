/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/terraform-next-ci-cd-app-web', // Replace with your actual repo name
    images: {
      unoptimized: true, // Required if using Next.js images on GitHub Pages
    },
  };
  
  export default nextConfig;
  
