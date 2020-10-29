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
                  buildHookId: '5f9a498d7d6b42935fde4e9b',
                  title: 'Sanity Studio',
                  name: 'mcbd-2-studio',
                  apiId: '793f88ae-d473-45b3-8a33-9e28e0cfc804'
                },
                {
                  buildHookId: '5f9a498d793148adb8141537',
                  title: 'Landing pages Website',
                  name: 'mcbd-2',
                  apiId: '4da4284b-688c-47e3-b111-70ec8ce26545'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/IanSSenne/mcbd-2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://mcbd-2.netlify.app', category: 'apps'}
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
