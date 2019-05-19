export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ce1875ff4149c7a13749a65',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-test-studio-ggwcdsrj',
                  apiId: 'e215fbba-480a-4fa4-9fbc-601928b8003c'
                },
                {
                  buildHookId: '5ce1875f974426f3891838da',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-test-web',
                  apiId: '65537ca4-4ec6-4ab5-9ea5-4fe498945434'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/swbullis/sanity-nextjs-landing-pages-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-test-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
