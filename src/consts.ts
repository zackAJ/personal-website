import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Astro Sphere",
  DESCRIPTION: "Welcome to Astro Sphere, a portfolio and blog for designers and developers.",
  AUTHOR: "Mark Horn",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
  { 
    TEXT: "Career", 
    HREF: "/work", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "aktouf98zakaria@gmail.com",
    HREF: "mailto:aktouf98zakaria@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "zackAJ",
    HREF: "https://github.com/zackAJ"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "zakaria-aktouf",
    HREF: "https://www.linkedin.com/in/zakaria-aktouf/",
  },
  { 
    NAME: "X",
    ICON: "twitter-x",
    TEXT: "@zackAJ_",
    HREF: "https://x.com/zackAJ_",
  },
]

