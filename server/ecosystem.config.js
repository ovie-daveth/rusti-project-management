module.exports = {
  apps: [
    {
      name: "rusti-project-management",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
