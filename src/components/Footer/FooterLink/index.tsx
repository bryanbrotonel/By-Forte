import React from 'react';

function FooterLink(props: { to: string; children: React.ReactNode }) {
  const { to, children } = props;

  return (
    <a className="text-white hover:text-white-50" href={to}>
      {children}
    </a>
  );
}

export default FooterLink;
