import { FC } from 'react';

import { HelpSectionProps } from './HelpSection.types';

export const HelpSectionBlock: FC<HelpSectionProps> = ({ title, description, type }) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="uppercase text-light-grey text-[10px] tracking-primary">{type}</div>

      <h3 className="text-[28px] leading-10 font-bold mt-2.5">{title}</h3>

      <p className="mt-[22px] text-lg leading-primary">{description}</p>
    </div>
  );
};
