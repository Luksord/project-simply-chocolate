export interface ContactProps {
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
}

export const contact: ContactProps = {
  phone: '+380 (68) 443-94-26',
  phoneHref: 'tel:+380684439426',
  email: 'simplychoc@gmail.com',
  emailHref: 'mailto:simplychoc@gmail.com',
};

export interface MediaProps {
  instagram: string;
  instagramHref: string;
  twitter: string;
  twitterHref: string;
}

export const media: MediaProps = {
  instagram: 'Instagram',
  instagramHref: 'https://instagram.com/simplychocolate',
  twitter: 'Twitter',
  twitterHref: 'https://twitter.com/simplychocolate',
};
