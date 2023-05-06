export let title = '#FreeBabylon5';
export let subtitle = "Our last, best hope to get back on the air";
export let siteUrl = "https://freebabylon5.com"
export let siteLanguage = 'en-US'

export let menuItems = [{
  title: 'Home',
  link: '/',
}, {
  title: 'About',
  link: '/about/',
}, {
  title: 'Links',
  link: '/links/',
}, {
  title: 'Articles',
  link: '/tag/',
}, {
  title: 'Watch',
  link: '/watch/',
}]

export const footerMenuItems = [{
  title: "Campaign Links",
  items: menuItems
}, {
  title: "FreeBabylon 5 Links",
  items: [{
    title: "JMS Patreon page",
    link: "https://www.patreon.com/syntheticworlds"
  }, {
    title: "Contact us",
    link: "mailto:freebabylon5@aol.com"
  }, {
    title: "Facebook group",
    link: "https://www.facebook.com/groups/freebabylon5/"
  }, {
    title: "#FreeBabylon5 Twitter hashtag",
    link: "https://twitter.com/search?q=%23FreeBabylon5&f=live"
  }, {
    title: "FreeBabylon5.com RSS feed",
    link: "https://freebabylon5.com/rss.xml"
  }]
}]

export let acknowledgementText = `Babylon 5, characters, names, and all related indicia are trademarks of Warner Bros. Entertainment, Inc. ©1994-${new Date().getFullYear()} All Rights Reserved. The CMS is Webiny hosted on AWS, frontend is Astro hosted on Netlify. We don't track you.`

export let socialLinks = null