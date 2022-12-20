export let title = 'Delicious Reverie';
export let subtitle = "Benjamin Read's code garden."
export let siteUrl = "https://deliciousreverie.co.uk"
export let siteLanguage = 'en-GB'

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
  link: '/tags/',
}, {
  title: 'Contact',
  link: '/contact/',
}]

export let footerMenuItems = [{
  title: 'Links',
  items: [{
    title: 'Talks',
    link: '/tags/talks/'
  }, {
    title: 'Published Content',
    link: '/tags/published-content/'
  },{
    title: 'Documentation',
    link: '/tags/documentation/'
  }]
}, {
  title: 'Menu',
  items: menuItems
}]

export let acknowledgementText = "Delicious Reverie is the blog of Benjamin Read. © Some rights are reserved."

export let socialLinks = {
  linkedin: {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/benjaminread1980/"
  },
  twitter: {
    title: "twitter",
    link: "https://www.twitter.com/muzzlehatch_"
  },
  reddit: {
    title: "reddit",
    link: "https://www.reddit.com/u/endymion1818-1819"
  },
  youtube: {
    title: "youtube",
    link: "https://www.youtube.com/channel/UCzbL3ZYvJWzJbrbHCgZLDJQ"
  },
  github: {
    title: "github",
    link: "https://github.com/endymion1818"
  },
  rss: {
    title: "RSS Feed",
    link: "https://deliciousreverie.co.uk/rss.xml"
  }
}
