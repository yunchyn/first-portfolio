import clsx from 'clsx';

export const CommonBadge = ({ children, className }) => {
  return (
    <div className={clsx('py-1.5 px-2.5 bg-secondary text-primary text-sm rounded-xl ', className)}>{children}</div>
  );
};

export const CommonCard = ({ children, className }) => {
  return <div className={clsx('rounded-[10px] bg-primary', className)}>{children}</div>;
};

export const SectionHeading = ({ children, className }) => {
  return <h1 className={clsx('font-semibold text-[32px] leading-normal pb-10', className)}>{children}</h1>;
};

export const SubHeading = ({ children, className }) => {
  return <h1 className={clsx('font-semibold text-[20px]', className)}>{children}</h1>;
};
