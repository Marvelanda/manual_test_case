import Image from 'next/image';
import { clsx } from 'clsx';

import { QuizModalTrigger } from '@/components/QuizModalTrigger/QuizModalTrigger';

export const MainSection = () => (
    <section
      className={clsx(
        'pb-[190px] pt-[30px] ',
        'bg-cover bg-no-repeat bg-main',
        'lg:bg-[position:50%_0] md:bg-[position:50%_0] 3xsm:bg-[position:60%_0]',
      )}
    >
      <div
        className={clsx(
          'mx-auto',
          '2xl:max-w-[1364px] xl:max-w-[1164px] lg:max-w-[864px] md:max-w-[664px]',
          'xsm:max-w-[464px] 2xsm:max-w-[350px] 3xsm:max-w-[300px]',
        )}
      >
        <Image src="/images/logo.svg" alt="logo" height={40} width={40} />

        <div className="md:w-[468px] mt-[119px] 2xsm:w-[270px] 3xsm:w-[220px]">
          <h1
            className={clsx(
              'tracking-secondary font-semibold',
              'md:text-[90px] md:leading-[90px]',
              'sm:text-[60px] sm:leading-[60px]',
              '3xsm:text-[40px] 3xsm:leading-[40px]',
            )}
          >
            Be good <br /> to yourself
          </h1>

          <p className={clsx('mt-5 md:text-lg md:leading-primary', '3xsm:text-base')}>
            We’re working around the clock to bring you a holistic approach to your
            wellness. From top to bottom, inside and out.
          </p>

          <QuizModalTrigger />
        </div>
      </div>
    </section>
  );
