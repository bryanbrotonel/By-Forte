import React from 'react';

function FooterLink(props: { to: string; children: React.ReactNode }) {
  const { to, children } = props;

  return (
    <a className="text-black hover:text-black/50 hover:cursor-pointer w-fit text-center" href={to}>
      {children}
    </a>
  );
}

export default FooterLink;
