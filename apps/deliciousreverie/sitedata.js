import Logo from "./src/components/logo.svg"

export let title = 'Delicious Reverie';
export let subtitle = "blog of developer & bookworm benjamin read"

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
  link: '/post',
}, {
  title: 'Contact',
  link: '/contact',
}]

export let footerMenuItems = [{
  title: 'Links',
  items: [{
    title: 'Talks',
    link: '/tag/talks'
  }, {
    title: 'Videos',
    link: '/tag/videos'
  },{
    title: 'Articles',
    link: '/tags/articles'
  }]
}, {
  title: 'Menu',
  items: [{
    title: 'About',
    link: '/about'
  }]
}]

export let acknowledgementText = "Delicious Reverie is the blog of Benjamin Read. Set in Lovechild and your system font. Built with Nx, Astro, Tailwind, DaisyUI and Svelte. © Some rights are reserved. This site doesn't use any cookies or session storage and has no tracking scripts, except when there are YouTube embeds."

export let logo = Logo

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
  }
}
