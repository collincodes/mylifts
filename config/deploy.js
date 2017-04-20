module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'mylifts',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
