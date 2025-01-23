import { FC } from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';

import { FooterNavigationSectionProps } from './FooterNavigationSection.types';

export const FooterNavigationSection: FC<FooterNavigationSectionProps> = ({
  title,
  links = [],
}) => (
    <div className="xl:w-[175px] lg:w-[145px] md:w-[115px] 3xsm:w-[33.3%]">
      <h4
        className={clsx(
          'mb-2',
          'font-bold uppercase text-extra-small tracking-primary text-black leading-secondary',
        )}
      >
        {title}
      </h4>

      <ul className="mt-5 flex flex-col gap-5">
        {links.map(({ name, link }) => (
            <li key={name}>
              <Link
                href={link}
                className="text-base leading-primary hover:text-gray-800 "
              >
                {name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
