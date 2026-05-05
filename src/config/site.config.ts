export const prerender = true;
// Static build ke liye client context use karein
import { SITE_URL, GOOGLE_SITE_VERIFICATION, BING_SITE_VERIFICATION } from 'astro:env/client';

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  author: string;
  email: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  socialLinks: string[];
  twitter?: {
    site: string;
    creator: string;
  };
  verification?: {
    google?: string;
    bing?: string;
  };
  authorImage?: string;
  blogImageOverlay?: boolean;
  branding: {
    logo: {
      alt: string;
      imageUrl?: string;
    };
    favicon: {
      svg: string;
    };
    colors: {
      themeColor: string;
      backgroundColor: string;
    };
  };
}

const siteConfig: SiteConfig = {
  name: 'Journaling Techniques',
  description:
    'The Complete Guide to Every Method - Master your mind through the power of journaling.',
  // Agar env variable nahi milta toh fallback URL use hoga
  url: SITE_URL || 'https://dev.journalingtechniques.org/dev',
  ogImage: '/og-default.svg',
  author: 'Hiren Bhuriya',
  email: 'hello@link-builder.online',
  address: {
    street: '',
    city: 'Ahmedabad',
    state: 'Gujarat',
    zip: '',
    country: 'India',
  },
  socialLinks: [
    'https://github.com/hirenbhuriya',
    'https://x.com/',
    'https://www.linkedin.com',
  ],
  twitter: {
    site: 'https://x.com/',
    creator: '@hiren_dev',
  },
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
    bing: BING_SITE_VERIFICATION,
  },
  authorImage: '/avatar.svg',
  blogImageOverlay: true,
  branding: {
    logo: {
      alt: 'Journaling Techniques',
      imageUrl: '/favicon.svg',
    },
    favicon: {
      svg: '/favicon.svg',
    },
    colors: {
      themeColor: '#3b82f6',
      backgroundColor: '#ffffff',
    },
  },
};

export default siteConfig;