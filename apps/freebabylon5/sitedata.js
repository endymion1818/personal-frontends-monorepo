export let title = '#Free Babylon 5';
export let subtitle = "Our last, best hope to get Babylon 5 back on the air";
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
  link: '/categories/',
}, {
  title: ' Watch Babylon 5',
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
  }]
}]

export let acknowledgementText = `Babylon 5, characters, names, and all related indicia are trademarks of Warner Bros. Entertainment, Inc. ©1994-${new Date().getFullYear()} All Rights Reserved. This site is hosted on Netlify. We don't track you.`

export let socialLinks = {
  linkedin: {
    title: "Facebook",
    link: "https://www.facebook.com/groups/freebabylon5/"
  },
  github: {
    title: "Edit this site on GitHub",
    link: "https://github.com/endymion1818/freebabylon5"
  },
  rss: {
    title: "RSS Feed",
    link: "https://freebabylon5.com/rss.xml"
  }
}
