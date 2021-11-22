import React, { FC, PropsWithChildren, useEffect } from 'react';
import SidebarLink from './SidebarLink';
import ColorSelect from './ColorSelect';

import ColorSchemeSelect from 'components/ColorSchemeSelect';

type Props = {};

const Sidebar: FC<Props> = (props: Props) => {
  const {} = props;

  return (
    <div
      className="p4 mr4 h100"
      style={{ backgroundColor: 'var(--p-surface-3)' }}
    >
      <h3 className="flex-center">Primordial</h3>
      <div className="mb4">
        <ColorSchemeSelect />
      </div>
      <div className="mb4 row items-center gap1">
        <label>brand color</label>
        <ColorSelect property="brand" />
      </div>
      <div className="column">
        <SidebarLink to="/">Home</SidebarLink>
        <SidebarLink to="/headings">Headings</SidebarLink>
        <SidebarLink to="/buttons">Buttons</SidebarLink>
        <SidebarLink to="/colors">Colors</SidebarLink>
        <SidebarLink to="/inputs">Inputs</SidebarLink>
      </div>
    </div>
  );
};

export default Sidebar;
