/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let Iconfaxian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M861.6448 278.528c-13.824 39.0144-42.7008 106.2912-98.304 186.5728-77.2608 111.4624-223.0784 269.9776-481.3824 398.7968 66.0992 43.3152 145.0496 68.608 229.9904 68.608 232.2432 0 420.5056-188.2624 420.5056-420.5056 0.0512-86.4256-26.112-166.7072-70.8096-233.472z"
        fill={getIconColor(color, 0, '#FF623E')}
      />
      <Path
        d="M829.44 114.5344c-22.8352-22.8352-72.9088-14.848-138.1888 17.0496a418.88768 418.88768 0 0 0-179.2-40.0896c-232.2432 0-420.5056 188.2624-420.5056 420.5056 0 60.5696 12.9024 118.1184 35.9936 170.1376-43.4688 78.6432-57.2928 139.6736-31.3344 165.632 23.1424 23.1424 74.0864 14.6432 140.4928-18.176 1.28-0.9728 2.7136-1.8432 4.1984-2.6112 496.3328-239.6672 581.0688-592.4352 581.888-595.968 0.1536-0.6144 0.4096-1.1776 0.5632-1.7408-0.0512-0.0512-0.1024-0.1536-0.2048-0.2048 22.6304-53.6064 26.3168-94.5152 6.2976-114.5344z m-294.9632 203.1104c-34.6624 0-62.7712-28.1088-62.7712-62.7712s28.1088-62.7712 62.7712-62.7712 62.7712 28.1088 62.7712 62.7712-28.1088 62.7712-62.7712 62.7712z"
        fill={getIconColor(color, 1, '#FF623E')}
      />
    </Svg>
  );
};

Iconfaxian.defaultProps = {
  size: 18,
};

Iconfaxian = React.memo ? React.memo(Iconfaxian) : Iconfaxian;

export default Iconfaxian;
