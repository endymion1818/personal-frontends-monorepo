import rss from '@astrojs/rss';
import { title, siteLanguage, subtitle, siteUrl } from "../../sitedata"

const getData = async () => {
  try {
    const response = await fetch(
      process.env.WEBINY_READ_URL,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.WEBINY_ACCESS_TOKEN}`,
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        query: `
          {
            listPosts(limit: 200, sort: publishDate_DESC) {
              data {
                id
                title
                slug
                description
                publishDate
              }
            }
          }
        `,
      }),
    }
    );
    return await response.json()
  } catch(error) {
    return `There was an error: ${JSON.stringify(error)}`
  }
}

const { data } = await getData();

export const get = () => rss({
  // `<title>` field in output xml
  title: title,
  // `<description>` field in output xml
  description: subtitle,
  // base URL for RSS <item> links
  // SITE will use "site" from your project's astro.config.
  site:  siteUrl,
  // list of `<item>`s in output xml
  // simple example: generate items for every md file in /src/pages
  // see "Generating items" section for required frontmatter and advanced use cases
  items: data.listPosts.data.map(page => ({
    title: page.title,
    description: page.description,
    link: `${siteUrl}/posts/${page.slug}/`,
    pubDate: page.publishDate,
  })),
  // (optional) inject custom xml
  customData: `<language>${siteLanguage}</language>`,
});
