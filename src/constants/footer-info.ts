type FooterInforSponsors = {
  [key: string]: {
    id: string,
    company: string,
    website: string,
    externalLink?: boolean
  }[] 
}

type FooterInfoServices = {
  [key: string]: {
    id: string,
    service: string
    href: string,
    externalLink?: boolean,
  }[] 
}

export const SPONSORS: FooterInforSponsors = {
  'sponsors': [
    {
      id: "001",
      company: "ImaCode",
      website: "https://www.imacode.io"
    },
    {
      id: "002",
      company: "ABFLine",
      website: "https://www.abfline.net"
    },
    {
      id: "003",
      company: "SmadCode inc",
      website: "https://www.smadcode.dev"
    },
    {
      id: "004",
      company: "Google",
      website: "https://www.google.com"
    },
    {
      id: "005",
      company: "React Foundation",
      website: "http://react.dev"
    },
  ],
}

export const SERVICES: FooterInfoServices = {
  'services': [
    {
      id: "001",
      service: "Programação",
      href: "programming",
    },
    {
      id: "002",
      service: "Web design",
      href: "web-design",
    },
    {
      id: "003",
      service: "Instalação de Softwares",
      href: "installing-softwares",
    },
    {
      id: "004",
      service: "Hardware",
      href: "hardware",
    },
  ],
}