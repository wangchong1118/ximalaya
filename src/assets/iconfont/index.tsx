/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import Icongouwo from './Icongouwo';
import Iconwode from './Iconwode';
import IconximalayaFm from './IconximalayaFm';
import IconerjiToudaishierjiShengyinYinle from './IconerjiToudaishierjiShengyinYinle';
import Iconfaxian from './Iconfaxian';

export type IconNames = 'gouwo' | 'wode' | 'ximalayaFM-' | 'erji-toudaishierji-shengyin-yinle' | 'faxian';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'gouwo':
      return <Icongouwo key="1" {...rest} />;
    case 'wode':
      return <Iconwode key="2" {...rest} />;
    case 'ximalayaFM-':
      return <IconximalayaFm key="3" {...rest} />;
    case 'erji-toudaishierji-shengyin-yinle':
      return <IconerjiToudaishierjiShengyinYinle key="4" {...rest} />;
    case 'faxian':
      return <Iconfaxian key="5" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
