import React, { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

type SidebarLinkProps = PropsWithChildren<{
  to: string;
}>;

const SidebarLink: FC<SidebarLinkProps> = (props: SidebarLinkProps) => {
  const { to, children } = props;

  return (
    <Link to={to} className="sidebar-link">
      {children}
    </Link>
  );
};

export default SidebarLink;