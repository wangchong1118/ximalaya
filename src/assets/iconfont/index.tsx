/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import Iconshengyin from './Iconshengyin';
import Iconwode from './Iconwode';
import IconerjiToudaishierjiShengyinYinle from './IconerjiToudaishierjiShengyinYinle';
import Iconfaxian from './Iconfaxian';

export type IconNames = 'shengyin' | 'wode' | 'erji-toudaishierji-shengyin-yinle' | 'faxian';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'shengyin':
      return <Iconshengyin key="1" {...rest} />;
    case 'wode':
      return <Iconwode key="2" {...rest} />;
    case 'erji-toudaishierji-shengyin-yinle':
      return <IconerjiToudaishierjiShengyinYinle key="3" {...rest} />;
    case 'faxian':
      return <Iconfaxian key="4" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
