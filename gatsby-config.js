module.exports = {
  siteMetadata: {
    title: 'Moe Kyaw Aung Portfolio',
    description: 'Premium Gatsby.js Portfolio Website',
    author: 'Moe Kyaw Aung',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {},
    },
  ],
};
