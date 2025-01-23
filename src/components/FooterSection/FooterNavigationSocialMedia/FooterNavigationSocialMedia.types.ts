import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface SocialMediaLink {
  name: string;
  link: string;
  icon: IconDefinition;
}

export interface FooterSocialMediaProps {
  links: SocialMediaLink[];
}
