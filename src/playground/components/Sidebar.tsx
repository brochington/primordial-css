import React, { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import ColorSchemeSelect from 'components/ColorSchemeSelect';

type SidebarLinkProps = PropsWithChildren<{
  to: string;
}>;

const SidebarLink: FC<SidebarLinkProps> = (props: SidebarLinkProps) => {
  const { to, children } = props;

  return (
    <Link to={to} className="sidebar-link">{children}</Link>
  );
};


type Props = {
  
};

const Sidebar: FC<Props> = (props: Props) => {
  const {  } = props;

  return (
    <div>
      <h1 className="ml4">Primordial</h1>
      <ColorSchemeSelect />
      <div className="m4 column">
        <SidebarLink to="/">Home</SidebarLink>
        <SidebarLink to="/headings">Headings</SidebarLink>
        <SidebarLink to="/buttons">Buttons</SidebarLink>
        <SidebarLink to="/colors">Colors</SidebarLink>
      </div>
    </div>
  );
};

export default Sidebar;
