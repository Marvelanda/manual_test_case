export interface NavigationLink {
  name: string;
  link: string;
}

export interface FooterNavigationSectionProps {
  title: string;
  links: NavigationLink[];
}
