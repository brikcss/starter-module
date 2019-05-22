module.exports = {
  url: `file://${__dirname}/dist`,
  viewports: [
    {
      width: 1280,
      height: 768
    },
    {
      width: 320,
      height: 640
    }
  ],
  cases: [
    {
      name: 'test',
      path: 'index.html'
    }
  ],
  server: {
    rootPath: 'dist'
  }
}
