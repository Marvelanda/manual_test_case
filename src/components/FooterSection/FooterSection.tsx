import Image from 'next/image';
import { clsx } from 'clsx';

import { FooterNavigationSection } from './FooterNavigationSection/FooterNavigationSection';
import {
  COMPANY_LINKS,
  INFO_LINKS,
  PRODUCT_LINKS,
  SOCIAL_MEDIA_LINKS,
} from './FooterSection.constants';
import { FooterNavigationSocialMedia } from './FooterNavigationSocialMedia/FooterNavigationSocialMedia';

export default function FooterSection() {
  return (
    <footer className="pt-[70px] bg-light-green border-t">
      <div
        className={clsx(
          'mx-auto',
          '2xl:max-w-[1364px] xl:max-w-[1164px] lg:max-w-[864px] md:max-w-[664px]',
          'xsm:max-w-[464px] 2xsm:max-w-[350px] 3xsm:max-w-[300px]',
        )}
      >
        <div className="flex justify-between w-full">
          <div className="3xsm:hidden md:block">
            <Image src="/images/logo.svg" alt="Logo" width={75} height={75} />
          </div>

          <div className="flex justify-between lg:gap-25 md:gap-6 md:w-auto 3xsm:w-full">
            <FooterNavigationSection title="Product" links={PRODUCT_LINKS} />

            <FooterNavigationSection title="Company" links={COMPANY_LINKS} />

            <FooterNavigationSection title="Info" links={INFO_LINKS} />

            <div className="relative 3xsm:hidden xsm:block">
              <FooterNavigationSocialMedia links={SOCIAL_MEDIA_LINKS} />

              <div className="md:hidden 3xsm:block absolute -bottom-[50px] -right-3">
                <Image src="/images/logo.svg" alt="Logo" width={75} height={75} />
              </div>
            </div>
          </div>
        </div>

        <div className="justify-between 3xsm:flex xsm:hidden mt-8">
          <FooterNavigationSocialMedia links={SOCIAL_MEDIA_LINKS} />

          <Image src="/images/logo.svg" alt="Logo" width={40} height={40} />
        </div>

        <div className="text-center mt-[72px] mx-auto ">
          <p
            className={clsx(
              'text-light-grey py-[25px] leading-primary',
              'border-t border-solid border-t-light-grey',
            )}
          >
            &copy; 2021 Manual. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
