import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface FooterSocialMediaProps {
  links: SocialMediaLink[];
}

export interface SocialMediaLink {
  name: string;
  link: string;
  icon: IconDefinition;
}
