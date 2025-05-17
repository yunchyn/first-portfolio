import clsx from 'clsx';

export const CommonBadge = ({ children, className, bgColor, textColor }) => {
  return (
    <div
      className={clsx('py-1 px-2.5 text-sm rounded-xl bg-secondary text-primary', className)}
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
  return <h1 className={clsx('font-semibold text-[32px] leading-normal pb-16', className)}>{children}</h1>;
};

export const SubHeading = ({ children, className }) => {
  return <h1 className={clsx('font-semibold text-[20px]', className)}>{children}</h1>;
};

export const CommonSection = ({ id, children, className }) => {
  return (
    <section
      id={id}
      className={clsx('flex flex-col justify-center', className)}
    >
      {children}
    </section>
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
