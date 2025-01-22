import Image from 'next/image';
import { clsx } from 'clsx';

import { HelpSectionBlock } from './HelpSectionBlock/HelpSectionBlock';

export default function HelpSection() {
  return (
    <section className="pt-[70px] pb-[90px] 2xl:max-w-[1266px] mx-auto">
      <h2 className="lg:text-4xl 3xsm:text-2xl text-center font-semibold">
        What we can help with
      </h2>

      <div
        className={clsx(
          'flex flex-col mt-[70px]',
          'lg:w-[865px] md:w-[664px] sm:w-[600px] xsm:w-[400px] 3xsm:w-[300px]',
          'md:gap-[180px] sm:gap-[90px] 3xsm:gap-[70px]',
        )}
      >
        <div
          className={clsx(
            'flex items-center',
            'bg-01 bg-no-repeat',
            'md:bg-[65%] 2xsm:bg-[length:70%] 2xsm:bg-[position:120%_50%] md:bg-[length:unset]',
            'lg:gap-[123px] 3xsm:gap-[63px]',
            'md:flex-row 3xsm:flex-col',
          )}
        >
          <div
            className={clsx(
              'shrink-0 relative',
              'lg:w-[370px] lg:h-[445px]',
              '3xsm:w-[300px] 3xsm:h-[375px] 3xsm:self-start',
            )}
          >
            <Image src="/images/help_first_section.png" alt="Hair loss image" fill />
          </div>

          <HelpSectionBlock
            type="Hair loss"
            title="Hair loss needn’t be irreversible. We can help!"
            description={`We’re working around the clock to bring you a holistic approach to your 
            wellness. From top to bottom, inside and out.`}
          />
        </div>

        <div
          className={clsx(
            'flex lg:gap-[123px] 3xsm:gap-[63px] md:flex-row items-center 3xsm:flex-col-reverse',
            'bg-02 bg-no-repeat md:bg-[position:15%_50%] md:bg-[length:unset] 2xsm:bg-[length:70%] 2xsm:bg-[position:110%_50%]',
          )}
        >
          <HelpSectionBlock
            type="Erecetile dysfunction"
            title="Erections can be a tricky thing. But no need to feel down!"
            description={` We’re working around the clock to bring you a holistic approach to your
              wellness. From top to bottom, inside and out.`}
          />

          <div
            className={clsx(
              'relative shrink-0',
              'lg:w-[370px] lg:h-[445px]',
              '3xsm:w-[300px] 3xsm:h-[375px] 3xsm:self-start',
            )}
          >
            <Image
              src="/images/help_second_section.png"
              alt="Erection support image"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
}
