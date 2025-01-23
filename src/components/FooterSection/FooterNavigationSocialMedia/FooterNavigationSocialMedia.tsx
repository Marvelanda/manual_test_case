import { FC } from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FooterNavigationSectionHeading } from '../FooterNavigationSectionHeading/FooterNavigationSectionHeading';
import { FooterSocialMediaProps } from './FooterNavigationSocialMedia.types';

export const FooterNavigationSocialMedia: FC<FooterSocialMediaProps> = ({
  links = [],
}) => (
    <div className="xl:w-[175px] lg:w-[145px] 3xsm:w-[115px]">
      <FooterNavigationSectionHeading title="Follow us" />

      <ul className="mt-5 flex gap-5">
        {links.map(({ name, link, icon }) => (
            <li key={name}>
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                passHref
                className="text-bloody-red hover:text-rose-950"
              >
                <FontAwesomeIcon size="lg" icon={icon} />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
