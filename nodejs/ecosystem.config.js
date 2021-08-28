module.exports = {
  apps: [
    {
      name: 'index',
      script: './routes/index.js',
      // watch: '.',
      watch: true,
      env: {
        PORT: 3030,
        NODE_ENV: 'development',
      },
      env_uat: {
        PORT: 3030,
        NODE_ENV: 'uat',
      },
      env_production: {
        PORT: 80,
        NODE_ENV: 'production',
      },
    },
    // {
    //   script: './service-worker/',
    //   watch: ['./service-worker'],
    // },
  ],

  deploy: {
    production: {
      user: 'SSH_USERNAME',
      host: 'SSH_HOSTMACHINE',
      ref: 'origin/master',
      repo: 'GIT_REPOSITORY',
      path: 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
    },
  },
};
