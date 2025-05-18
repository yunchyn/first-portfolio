import clsx from 'clsx';
import { motion } from 'framer-motion';

export const CommonBadge = ({ children, className, bgColor, textColor }) => {
  return (
    <div
      className={clsx('py-1 px-2.5 text-xs md:text-sm rounded-xl bg-secondary text-primary', className)}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </div>
  );
};

export const CommonCard = ({ children, className }) => {
  return <div className={clsx('rounded-[10px] bg-secondary', className)}>{children}</div>;
};

export const SectionHeading = ({ children, className }) => {
  return (
    <h1 className={clsx('font-semibold text-[28px] md:text-[32px] leading-normal pb-10 md:pb-16', className)}>
      {children}
    </h1>
  );
};

export const SubHeading = ({ children, className }) => {
  return <h1 className={clsx('font-semibold text-lg sm:text-[20px]', className)}>{children}</h1>;
};

export const CommonSection = ({ id, children, className }) => {
  return (
    <motion.section
      id={id}
      className={clsx('flex flex-col justify-center', className)}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  );
};

export const LinkText = ({ link, children, className }) => {
  return (
    <p>
      <a
        href={link}
        target="_blank"
        className={clsx(`inline-flex flex-row gap-2 text-linkblue text-sm underline`, className)}
      >
        {children}
      </a>
    </p>
  );
};

export const SectionTitle = ({ children }) => {
  return <p className="font-semibold pt-4">{children}</p>;
};

export const GrayText = ({ children }) => {
  return <span className="text-gray">{children}</span>;
};

export const ForegroundText = ({ children }) => {
  return <span className="text-foreground">{children}</span>;
};
