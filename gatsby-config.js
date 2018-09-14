module.exports = {
  siteMetadata: {
    title: 'Jesper Strange Klitgaard Christiansen',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        icon: true,
        viewBox: false,
        svgo: false,
        onlyUnique: false
        // see https://github.com/smooth-code/svgr for a list of all options
      },
    },
  ],
}
