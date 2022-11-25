export let title = 'Delicious Reverie';
export let subtitle = "Benjamin Read's code garden."

export let menuItems = [{
  title: 'Home',
  link: '/',
}, {
  title: 'About',
  link: '/about',
}, {
  title: 'Links',
  link: '/links',
}, {
  title: 'Archive',
  link: '/posts',
}, {
  title: 'Contact',
  link: '/contact',
}]

export let footerMenuItems = [{
  title: 'Links',
  items: [{
    title: 'Talks',
    link: '/tags/talks'
  }, {
    title: 'Published Content',
    link: '/tags/published-content'
  },{
    title: 'Documentation',
    link: '/tags/documentation'
  }]
}, {
  title: 'Menu',
  items: menuItems
}]

export let acknowledgementText = "Delicious Reverie is the blog of Benjamin Read. Set in Lovechild and your system font. Built with Nx, Astro, Tailwind, DaisyUI and Svelte. Content is stored in a Webiny CMS instance hosted on AWS. © Some rights are reserved. This site doesn't use any cookies or session storage and has no tracking scripts, except when there are embeds."

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
  }
}
