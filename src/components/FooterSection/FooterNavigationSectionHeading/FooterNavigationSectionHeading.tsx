import { FC } from 'react';

import { FooterNavigationSectionHeadingProps } from './FooterNavigationSectionHeading.types';

export const FooterNavigationSectionHeading: FC<FooterNavigationSectionHeadingProps> = ({
  title,
}) => (
  <h4 className="font-bold mb-2 uppercase text-extra-small tracking-primary text-black leading-secondary">
    {title}
  </h4>
);
