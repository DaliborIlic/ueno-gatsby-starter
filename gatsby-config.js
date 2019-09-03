const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Portfolio',
  },
  plugins: [
    'gatsby-plugin-ueno',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-netlify-cms',    
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'ueno-gatsby-starter',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/static/assets`,
          name: 'images',
        },
    },    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `work-pages`,
        path: `${__dirname}/work`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: path.resolve(__dirname, 'src/assets/svg'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/app-layout/AppLayout.tsx'),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },    
  ],
}
