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

let Icongouwo: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512.5 922H114.1c-13.9 0-25.8-5.1-35.4-15.1-9.6-10-14.2-22.1-13.7-36C80.6 477.8 275 167 512.5 167S944.4 477.8 960 870.9c0.6 13.9-4.1 26-13.7 36S924.8 922 910.9 922H512.5z"
        fill={getIconColor(color, 0, '#FF3D40')}
      />
      <Path
        d="M910.9 924.8H114.1c-14.7 0-27.3-5.4-37.5-16s-15-23.4-14.5-38.1c7.6-191.2 57.7-369 141-500.7 84-132.7 193.8-205.8 309.4-205.8S737.9 237.3 821.9 370c83.3 131.7 133.4 309.5 141 500.7 0.6 14.7-4.3 27.5-14.5 38.1-10.2 10.6-22.8 16-37.5 16zM512.5 169.9c-113.5 0-221.7 72.2-304.6 203.2C125.1 503.9 75.4 680.8 67.8 871c-0.5 13.1 3.8 24.5 12.9 33.9 9.1 9.4 20.3 14.2 33.4 14.2H911c13.1 0 24.3-4.8 33.4-14.2 9.1-9.4 13.4-20.8 12.9-33.9-7.6-190.2-57.3-367.1-140.1-497.9C734.2 242 626 169.9 512.5 169.9z"
        fill={getIconColor(color, 1, '#870002')}
      />
      <Path
        d="M867.6 881.2H157.4c-12.5 0-23.1-4.6-31.8-13.5-8.6-9-12.8-19.8-12.3-32.3 6.7-170 51.2-328.1 125.3-445.2C313 272.6 410.3 207.8 512.4 207.8s199.4 64.8 273.8 182.4c74 117 118.5 275.1 125.3 445.2 0.5 12.4-3.6 23.3-12.3 32.3-8.5 8.9-19.2 13.5-31.6 13.5zM512.5 208.4c-102 0-199 64.7-273.3 182.1-74 117-118.5 275-125.2 444.9-0.5 12.3 3.6 23 12.1 31.9 8.5 8.9 19.1 13.4 31.4 13.4h710.2c12.3 0 22.8-4.5 31.4-13.4 8.5-8.9 12.6-19.6 12.1-31.9C904.5 665.5 860 507.5 786 390.5c-74.5-117.4-171.5-182.1-273.5-182.1z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M867.6 882.3H157.4c-12.8 0-23.7-4.7-32.6-13.9-8.9-9.2-13.1-20.4-12.6-33.1 6.8-170.2 51.3-328.5 125.5-445.7 74.6-118 172.2-182.9 274.8-182.9s200.2 65 274.8 182.9C861.4 506.8 906 665.1 912.7 835.3c0.5 12.8-3.7 23.9-12.6 33.1-8.8 9.2-19.7 13.9-32.5 13.9zM512.5 209.5c-101.6 0-198.3 64.5-272.4 181.6-73.9 116.8-118.3 274.6-125 444.3-0.5 12 3.5 22.4 11.8 31 8.3 8.6 18.6 13 30.5 13h710.2c12 0 22.3-4.4 30.5-13 8.3-8.6 12.3-19.1 11.8-31-6.7-169.7-51.1-327.5-125-444.3C710.8 274 614.1 209.5 512.5 209.5z"
        fill={getIconColor(color, 3, '#870002')}
      />
      <Path
        d="M140.7 844.5C154.2 503.5 322.9 234 528.9 234c129.2 0 243.7 106 314.5 269.2-71.9-178.1-193.3-295.1-330.8-295.1-211.7 0-384.9 276.9-398.8 627.3-0.5 12.3 3.6 23.2 12.2 32.1 8.6 8.9 19.2 13.4 31.6 13.4h1.1c-2.1-1.5-4-3.2-5.9-5.2-8.6-8.7-12.6-19.2-12.1-31.2z"
        fill={getIconColor(color, 4, '#CF0B11')}
      />
      <Path
        d="M511.9 119.8c12.6 0 25.9 2.5 28.7 10.4 2.6 7.6-4.5 20.3-12 33.2h4l2.6 0.4c11.6-18.5 22.9-36.9 19-47.8-4-11.2-24-14.7-43-14.7s-36.9 3.5-39.6 14.8c-2.6 11 9.4 29.5 21.7 48.2l6.2-0.1c-8-13.1-15.7-26.1-14-33.8 1.8-8.1 13.8-10.6 26.4-10.6z"
        fill={getIconColor(color, 5, '#FF3D40')}
      />
      <Path
        d="M492.8 165.3l-0.3-0.5c-11.5-17.5-24.6-37.3-21.9-49.1 3-12.9 23.8-15.6 40.6-15.6h0.1c14.4 0 39.1 2 43.9 15.4 4.2 11.7-8.2 31.4-19.1 48.8l-0.4 0.6-3.2-0.5h-5.8l0.9-1.6c6.5-11.1 14.5-24.9 11.9-32.3-3-8.7-20.3-9.7-27.6-9.7h-0.1c-8.7 0-23.5 1.3-25.3 9.8-1.7 7.7 6.9 21.7 13.9 33l1 1.6-8.6 0.1z m18.6-63h-0.1c-13.2 0-35.7 1.8-38.6 14-2.5 10.8 10 29.9 21.3 46.9h3.7c-8.6-14-14.8-25.4-13.2-33 2.1-9.5 16-11.5 27.4-11.5h0.1c9.7 0 26.3 1.5 29.6 11.1 2.6 7.5-3.1 18.6-11.1 32.5h2.3l1.9 0.3c10.6-16.8 22.3-35.7 18.5-46.3-3.1-8.9-18.4-14-41.8-14z"
        fill={getIconColor(color, 6, '#870002')}
      />
      <Path
        d="M514.2 852.4H303.7c-7.3 0-13.6-2.7-18.7-8s-7.5-11.7-7.2-19c8.2-207.7 111-371.9 236.4-371.9s228.2 164.2 236.4 371.9c0.3 7.3-2.1 13.7-7.2 19-5.1 5.3-11.4 8-18.7 8H514.2z"
        fill={getIconColor(color, 7, '#C40007')}
      />
      <Path
        d="M724.7 853.9h-421c-7.7 0-14.4-2.8-19.7-8.4-5.4-5.6-7.9-12.3-7.6-20.1 4-101 30.5-195 74.5-264.5 44.4-70.1 102.4-108.7 163.4-108.7s119 38.6 163.4 108.7c44 69.6 70.5 163.5 74.5 264.5 0.3 7.7-2.3 14.5-7.6 20.1-5.5 5.5-12.2 8.4-19.9 8.4zM514.2 455c-60 0-117.2 38.1-161 107.4-43.8 69.2-70 162.6-74 263.1-0.3 6.9 2 13 6.8 18s10.8 7.5 17.7 7.5h421c6.9 0 12.9-2.5 17.7-7.5 4.8-5 7.1-11.1 6.8-18-4-100.5-30.3-194-74-263.1-43.8-69.3-101-107.4-161-107.4zM559.2 446.9l-1-2.7 5.7-2-50.1-106.4-43.1 103-2.6-1.1 45.6-108.8 54.1 114.9z"
        fill={getIconColor(color, 8, '#870002')}
      />
      <Path
        d="M509.4 341.2c-5.9-3.2-15.2-11.2-21.4-17.9-6.2-6.7-9.2-12-9.6-17.7-0.4-5.7 1.7-11.8 5-15.4 3.3-3.7 7.7-4.9 11.3-5 3.6-0.1 6.2 1 9.4 3.3 3.2 2.4 6.9 6 9.4 6.8 2.4 0.8 3.6-1.2 5.5-3.5 2-2.3 4.7-4.8 8.5-5.7 3.7-0.9 8.3-0.2 12.2 1.6 3.8 1.8 6.9 4.6 8.5 9 1.6 4.4 1.8 10.2 0.6 15.2-1.2 5-3.7 9.1-8.6 13.8-5 4.7-12.5 10.1-17.4 13.5-5.1 3.6-7.6 5.2-13.4 2z"
        fill={getIconColor(color, 9, '#FFFA69')}
      />
      <Path
        d="M514.9 344c-1.7 0-3.6-0.5-6-1.9-6.4-3.5-15.9-12-21.6-18.1-6.5-7-9.5-12.5-9.9-18.4-0.5-5.8 1.6-12.2 5.3-16.2 4-4.5 9.3-5.3 12.1-5.3 3.6-0.1 6.6 0.9 10.1 3.5 1.1 0.8 2.2 1.7 3.3 2.6 2.1 1.8 4.3 3.6 5.8 4.1 1.3 0.4 1.9-0.2 3.6-2.2 0.3-0.3 0.5-0.6 0.8-1 2.8-3.3 5.8-5.3 9-6.1 3.8-0.9 8.6-0.3 12.9 1.6 4.4 2 7.4 5.3 9 9.6 1.6 4.5 1.9 10.5 0.7 15.8-1.2 5.3-3.9 9.6-8.9 14.3-4.8 4.5-11.9 9.7-17.5 13.6-3.5 2.4-5.8 4.1-8.7 4.1zM495 286.2h-0.4c-2.4 0.1-7 0.7-10.5 4.6-3.2 3.6-5.1 9.4-4.7 14.6 0.4 5.3 3.2 10.4 9.4 17.1 6.6 7.1 15.7 14.7 21.1 17.7 5.4 2.9 7.4 1.5 12.2-1.8 5.6-3.9 12.6-9 17.3-13.5 4.7-4.5 7.2-8.4 8.3-13.3 1.1-4.9 0.9-10.5-0.6-14.6-1.4-3.8-4-6.6-7.9-8.4-3.8-1.7-8.2-2.3-11.5-1.5-2.8 0.7-5.4 2.4-7.9 5.4-0.3 0.3-0.5 0.6-0.8 0.9-1.5 1.9-3.1 3.8-5.9 2.8-1.8-0.6-4.1-2.5-6.5-4.4-1.1-0.9-2.2-1.8-3.2-2.6-3-2.1-5.4-3-8.4-3z"
        fill={getIconColor(color, 10, '#870002')}
      />
      <Path
        d="M347.3 465.2c6.9 8.7 17.1 14.2 27.4 19.6-10.6 5.7-21 11.6-28.1 20.4-7.4 9.3-11.1 21.8-10.7 34.2 0.5 12.3 5.1 24.4 13 33.3 7.9 8.8 19.1 14.4 31.7 16.1 12.6 1.6 26.5-0.7 41-7.2 14.4-6.5 29.3-17.2 38.4-25.1 9.1-7.9 12.3-13 28.4-15.4 16.1-2.3 44.9-1.9 60.1 1.2 15.1 3 16.5 8.6 24.9 17.5 8.4 8.8 23.7 21 39 26.9 15.3 5.9 30.4 5.6 42.9 1.2 12.5-4.4 22.3-12.9 28.6-24.3 6.4-11.4 9.4-25.6 4.1-39.1-5.2-13.3-18.3-25.8-31.5-38.4 13.6-12.9 26.9-25.9 32.2-39.3 5.5-13.8 2.5-28-3.9-39.4-6.4-11.4-16.2-19.9-28.6-24.3-12.5-4.4-27.7-4.7-42.9 1.2-15.3 5.9-30.6 18-39 26.9-8.4 8.8-9.8 14.4-24.9 17.5-15.1 3-44 3.5-60.1 1.2s-19.3-7.5-28.4-15.4c-9.1-7.9-24-18.6-38.4-25.1-14.4-6.5-28.4-8.8-41-7.2-12.6 1.6-23.7 7.2-31.7 16.1-7.9 8.8-12.6 21-13 33.3-0.4 12 3.3 24.5 10.5 33.6z"
        fill={getIconColor(color, 11, '#FFFA69')}
      />
      <Path
        d="M635.9 592.4c-8 0-16.1-1.5-24-4.5-15-5.8-30.7-17.8-39.5-27.2-1.8-1.9-3.3-3.6-4.6-5.2-5-6-8.1-9.5-19.6-11.8-14.8-3-43.3-3.5-59.6-1.2-13.3 1.9-17.5 5.8-23.9 11.7-1.2 1.1-2.4 2.2-3.7 3.4-9 7.9-24 18.7-38.8 25.4-14.3 6.5-28.8 9-41.7 7.3-12.9-1.7-24.5-7.5-32.5-16.5s-12.9-21.4-13.4-34.2c-0.5-13 3.5-25.8 11-35.1 6.5-8.2 15.7-13.8 26.2-19.5-10.5-5.6-19.1-10.7-25.5-18.7-7.3-9.2-11.3-22-10.8-34.9 0.5-12.8 5.4-25.2 13.4-34.2 8-9 19.6-14.8 32.5-16.5 13-1.7 27.4 0.9 41.7 7.3 14.8 6.7 29.7 17.5 38.8 25.4 1.4 1.2 2.6 2.3 3.7 3.4 6.4 5.9 10.7 9.8 23.9 11.7 16 2.3 45 1.8 59.6-1.2 11.5-2.3 14.5-5.9 19.6-11.8 1.3-1.6 2.8-3.3 4.6-5.2 8.9-9.4 24.5-21.4 39.5-27.2 14.6-5.6 30.2-6 43.9-1.2 12.6 4.4 22.7 13.1 29.4 24.9 7.6 13.5 9 27.9 3.9 40.6-5.4 13.6-19.1 26.9-31.5 38.7 12.1 11.5 25.5 24.5 30.8 37.9 6.6 16.9 0.2 32.5-4.2 40.3-6.7 11.9-16.8 20.5-29.4 24.9-6.3 2.1-13 3.2-19.8 3.2z m-122.2-54.3c12.9 0 26.3 0.9 35.1 2.7 12.4 2.5 16.1 6.8 21.2 12.8 1.4 1.6 2.8 3.3 4.5 5.1 8.7 9.1 23.9 20.9 38.5 26.5 13.9 5.4 28.8 5.8 41.9 1.2 11.9-4.2 21.6-12.4 27.9-23.6 4.1-7.4 10.2-22.1 4-37.9-5.1-13.2-19-26.3-31.2-37.9l-1.1-1 1.1-1c12.4-11.9 26.5-25.3 31.9-38.8 6.4-16 0.4-30.8-3.8-38.2-6.3-11.3-16-19.4-27.9-23.6-13.1-4.6-28-4.2-41.9 1.2-14.6 5.6-29.8 17.4-38.5 26.5-1.7 1.8-3.1 3.5-4.5 5.1-5.1 6-8.7 10.3-21.2 12.8-15.1 3-44 3.6-60.6 1.2-14.1-2-18.9-6.4-25.4-12.4-1.1-1-2.4-2.1-3.7-3.3-8.9-7.8-23.6-18.4-38.1-24.9-13.9-6.3-27.8-8.7-40.2-7.1-12.3 1.6-23.2 7.1-30.8 15.6-7.6 8.5-12.2 20.3-12.7 32.4-0.5 12.3 3.2 24.3 10.2 33.1 6.5 8.2 15.6 13.3 26.9 19.2l2.4 1.2-2.4 1.3c-11.2 6-21 11.7-27.7 20.1-7 8.8-10.8 20.9-10.4 33.2 0.5 12.1 5.1 23.9 12.7 32.4s18.5 14 30.8 15.6c12.4 1.6 26.3-0.8 40.2-7.1 14.5-6.6 29.2-17.2 38.1-24.9 1.3-1.2 2.5-2.3 3.7-3.3 6.6-6 11.3-10.3 25.4-12.4 7.1-1.3 16.2-1.8 25.6-1.8z"
        fill={getIconColor(color, 12, '#870002')}
      />
      <Path
        d="M544.7 522.3c-14.7-2.9-42.8-3.4-58.4-1.1-15.6 2.3-18.8 7.2-27.6 14.9s-23.3 18.1-37.4 24.5c-14 6.3-27.6 8.6-39.9 7-12.2-1.6-23.1-7-30.8-15.6-7.2-8.1-11.7-19-12.6-30.2-1.7 5.7-2.4 11.7-2.2 17.7 0.5 12.3 5.1 24.4 13 33.3 7.9 8.8 19.1 14.4 31.7 16.1 12.6 1.6 26.5-0.7 41-7.2 14.4-6.5 29.3-17.2 38.4-25.1 9.1-7.9 12.3-13 28.4-15.4 16.1-2.3 44.9-1.9 60.1 1.2 15.1 3 16.5 8.6 24.9 17.5 8.4 8.8 23.7 21 39 26.9 15.3 5.9 30.4 5.6 42.9 1.2 12.5-4.4 22.3-12.9 28.6-24.3 6.4-11.4 9.4-25.6 4.1-39.1-1.3-3.3-3-6.5-5.2-9.7 1.1 10-1.7 20-6.4 28.4-6.2 11.1-15.7 19.3-27.9 23.6-12.1 4.3-26.9 4.6-41.7-1.1-14.9-5.7-29.8-17.5-37.9-26.1-8-9-9.4-14.5-24.1-17.4z"
        fill={getIconColor(color, 13, '#FF9B29')}
      />
      <Path
        d="M673 412.3c6.2 11.1 9.1 24.9 3.8 38.3-5.2 13-18.1 25.6-31.3 38.2 12.9 12.2 25.6 24.4 30.6 37.3 1.6 4.1 2.4 8.3 2.6 12.5 3.3-7.4 5.1-15.7 4.2-24-6.5-9.7-16.4-19.2-26.3-28.7 13.6-12.9 26.9-25.9 32.2-39.3 5.5-13.8 2.5-28-3.9-39.4-6.4-11.4-16.2-19.9-28.6-24.3-12.5-4.4-27.6-4.7-42.9 1.2-5.7 2.2-11.5 5.3-16.9 8.8 2.3-1.2 4.7-2.2 7-3.1 14.9-5.7 29.6-5.4 41.7-1.1 12.1 4.2 21.6 12.5 27.8 23.6z"
        fill={getIconColor(color, 14, '#FF9B29')}
      />
      <Path
        d="M678.6 539v-0.5c-0.2-4.3-1.1-8.5-2.6-12.4-5.1-13.1-18.7-26-30.6-37.3l-0.1-0.1 0.1-0.1c12.2-11.6 26-24.8 31.3-38.2 6.4-16 0.4-30.8-3.8-38.2-6.3-11.2-15.9-19.4-27.8-23.6-13-4.6-27.8-4.2-41.7 1.1-2.3 0.9-4.6 1.9-7 3.1l-1.8 0.9 1.7-1.1c5.8-3.8 11.5-6.7 16.9-8.8 14.3-5.5 29.5-5.9 43-1.2 12.3 4.3 22.2 12.8 28.7 24.3 4.3 7.6 10.5 22.9 3.9 39.5-5.5 13.8-19.6 27.3-32.2 39.2 9.2 8.7 19.6 18.6 26.3 28.6 0.9 7.8-0.6 16.1-4.2 24.1l-0.1 0.7z m-33-50.2c12 11.3 25.5 24.2 30.6 37.3 1.5 3.8 2.4 7.9 2.6 12 3.5-7.8 4.8-15.9 4-23.5-6.6-10-17.1-19.9-26.3-28.6l-0.1-0.1 0.1-0.1c12.5-12 26.7-25.5 32.2-39.2 6.6-16.5 0.4-31.7-3.9-39.3-6.5-11.5-16.4-19.9-28.6-24.2-13.4-4.7-28.6-4.3-42.8 1.2-4.9 1.9-10 4.5-15.2 7.7 1.8-0.8 3.5-1.6 5.2-2.3 13.9-5.4 28.7-5.8 41.8-1.1 11.9 4.2 21.6 12.4 27.9 23.7 4.2 7.4 10.2 22.3 3.8 38.4-5.3 13.3-19.1 26.5-31.3 38.1z"
        fill={getIconColor(color, 15, '#FF9B29')}
      />
      <Path
        d="M635.9 592.4c-8 0-16.1-1.5-24-4.5-15-5.8-30.7-17.8-39.5-27.2-1.8-1.9-3.3-3.6-4.6-5.2-5-6-8.1-9.5-19.6-11.8-14.8-3-43.3-3.5-59.6-1.2-13.3 1.9-17.5 5.8-23.9 11.7-1.2 1.1-2.4 2.2-3.7 3.4-9 7.9-24 18.7-38.8 25.4-14.3 6.5-28.8 9-41.7 7.3-12.9-1.7-24.5-7.5-32.5-16.5s-12.9-21.4-13.4-34.2c-0.5-13 3.5-25.8 11-35.1 6.5-8.2 15.7-13.8 26.2-19.5-10.5-5.6-19.1-10.7-25.5-18.7-7.3-9.2-11.3-22-10.8-34.9 0.5-12.8 5.4-25.2 13.4-34.2 8-9 19.6-14.8 32.5-16.5 13-1.7 27.4 0.9 41.7 7.3 14.8 6.7 29.7 17.5 38.8 25.4 1.4 1.2 2.6 2.3 3.7 3.4 6.4 5.9 10.7 9.8 23.9 11.7 16 2.3 45 1.8 59.6-1.2 11.5-2.3 14.5-5.9 19.6-11.8 1.3-1.6 2.8-3.3 4.6-5.2 8.9-9.4 24.5-21.4 39.5-27.2 14.6-5.6 30.2-6 43.9-1.2 12.6 4.4 22.7 13.1 29.4 24.9 7.6 13.5 9 27.9 3.9 40.6-5.4 13.6-19.1 26.9-31.5 38.7 12.1 11.5 25.5 24.5 30.8 37.9 6.6 16.9 0.2 32.5-4.2 40.3-6.7 11.9-16.8 20.5-29.4 24.9-6.3 2.1-13 3.2-19.8 3.2z m-122.2-54.3c12.9 0 26.3 0.9 35.1 2.7 12.4 2.5 16.1 6.8 21.2 12.8 1.4 1.6 2.8 3.3 4.5 5.1 8.7 9.1 23.9 20.9 38.5 26.5 13.9 5.4 28.8 5.8 41.9 1.2 11.9-4.2 21.6-12.4 27.9-23.6 4.1-7.4 10.2-22.1 4-37.9-5.1-13.2-19-26.3-31.2-37.9l-1.1-1 1.1-1c12.4-11.9 26.5-25.3 31.9-38.8 6.4-16 0.4-30.8-3.8-38.2-6.3-11.3-16-19.4-27.9-23.6-13.1-4.6-28-4.2-41.9 1.2-14.6 5.6-29.8 17.4-38.5 26.5-1.7 1.8-3.1 3.5-4.5 5.1-5.1 6-8.7 10.3-21.2 12.8-15.1 3-44 3.6-60.6 1.2-14.1-2-18.9-6.4-25.4-12.4-1.1-1-2.4-2.1-3.7-3.3-8.9-7.8-23.6-18.4-38.1-24.9-13.9-6.3-27.8-8.7-40.2-7.1-12.3 1.6-23.2 7.1-30.8 15.6-7.6 8.5-12.2 20.3-12.7 32.4-0.5 12.3 3.2 24.3 10.2 33.1 6.5 8.2 15.6 13.3 26.9 19.2l2.4 1.2-2.4 1.3c-11.2 6-21 11.7-27.7 20.1-7 8.8-10.8 20.9-10.4 33.2 0.5 12.1 5.1 23.9 12.7 32.4s18.5 14 30.8 15.6c12.4 1.6 26.3-0.8 40.2-7.1 14.5-6.6 29.2-17.2 38.1-24.9 1.3-1.2 2.5-2.3 3.7-3.3 6.6-6 11.3-10.3 25.4-12.4 7.1-1.3 16.2-1.8 25.6-1.8z"
        fill={getIconColor(color, 16, '#870002')}
      />
      <Path
        d="M635.9 592.4c-8 0-16.1-1.5-24-4.5-15-5.8-30.7-17.8-39.5-27.2-1.8-1.9-3.3-3.6-4.6-5.2-5-6-8.1-9.5-19.6-11.8-14.8-3-43.3-3.5-59.6-1.2-13.3 1.9-17.5 5.8-23.9 11.7-1.2 1.1-2.4 2.2-3.7 3.4-9 7.9-24 18.7-38.8 25.4-14.3 6.5-28.8 9-41.7 7.3-12.9-1.7-24.5-7.5-32.5-16.5s-12.9-21.4-13.4-34.2c-0.5-13 3.5-25.8 11-35.1 6.5-8.2 15.7-13.8 26.2-19.5-10.5-5.6-19.1-10.7-25.5-18.7-7.3-9.2-11.3-22-10.8-34.9 0.5-12.8 5.4-25.2 13.4-34.2 8-9 19.6-14.8 32.5-16.5 13-1.7 27.4 0.9 41.7 7.3 14.8 6.7 29.7 17.5 38.8 25.4 1.4 1.2 2.6 2.3 3.7 3.4 6.4 5.9 10.7 9.8 23.9 11.7 16 2.3 45 1.8 59.6-1.2 11.5-2.3 14.5-5.9 19.6-11.8 1.3-1.6 2.8-3.3 4.6-5.2 8.9-9.4 24.5-21.4 39.5-27.2 14.6-5.6 30.2-6 43.9-1.2 12.6 4.4 22.7 13.1 29.4 24.9 7.6 13.5 9 27.9 3.9 40.6-5.4 13.6-19.1 26.9-31.5 38.7 12.1 11.5 25.5 24.5 30.8 37.9 6.6 16.9 0.2 32.5-4.2 40.3-6.7 11.9-16.8 20.5-29.4 24.9-6.3 2.1-13 3.2-19.8 3.2z m-122.2-54.3c12.9 0 26.3 0.9 35.1 2.7 12.4 2.5 16.1 6.8 21.2 12.8 1.4 1.6 2.8 3.3 4.5 5.1 8.7 9.1 23.9 20.9 38.5 26.5 13.9 5.4 28.8 5.8 41.9 1.2 11.9-4.2 21.6-12.4 27.9-23.6 4.1-7.4 10.2-22.1 4-37.9-5.1-13.2-19-26.3-31.2-37.9l-1.1-1 1.1-1c12.4-11.9 26.5-25.3 31.9-38.8 6.4-16 0.4-30.8-3.8-38.2-6.3-11.3-16-19.4-27.9-23.6-13.1-4.6-28-4.2-41.9 1.2-14.6 5.6-29.8 17.4-38.5 26.5-1.7 1.8-3.1 3.5-4.5 5.1-5.1 6-8.7 10.3-21.2 12.8-15.1 3-44 3.6-60.6 1.2-14.1-2-18.9-6.4-25.4-12.4-1.1-1-2.4-2.1-3.7-3.3-8.9-7.8-23.6-18.4-38.1-24.9-13.9-6.3-27.8-8.7-40.2-7.1-12.3 1.6-23.2 7.1-30.8 15.6-7.6 8.5-12.2 20.3-12.7 32.4-0.5 12.3 3.2 24.3 10.2 33.1 6.5 8.2 15.6 13.3 26.9 19.2l2.4 1.2-2.4 1.3c-11.2 6-21 11.7-27.7 20.1-7 8.8-10.8 20.9-10.4 33.2 0.5 12.1 5.1 23.9 12.7 32.4s18.5 14 30.8 15.6c12.4 1.6 26.3-0.8 40.2-7.1 14.5-6.6 29.2-17.2 38.1-24.9 1.3-1.2 2.5-2.3 3.7-3.3 6.6-6 11.3-10.3 25.4-12.4 7.1-1.3 16.2-1.8 25.6-1.8z"
        fill={getIconColor(color, 17, '#870002')}
      />
      <Path
        d="M113.7 835.4C127.6 485 300.8 208.1 512.5 208.1c137.6 0 258.9 117 330.8 295.1 38.7 95.9 63.1 209.6 68 332.2 0.5 12.4-3.6 23.2-12.2 32.1-8.6 8.9-19.2 13.4-31.6 13.4H157.4c-12.4 0-23-4.5-31.6-13.4-8.5-9-12.6-19.8-12.1-32.1z m0.4 86.6h796.8c13.9 0 25.8-5.1 35.4-15.1 9.6-10 14.2-22.1 13.7-36C944.4 477.8 750 167 512.5 167S80.6 477.8 65 870.9c-0.6 13.9 4.1 26 13.7 36s21.5 15.1 35.4 15.1z"
        fill={getIconColor(color, 18, '#FFFA69')}
      />
      <Path
        d="M867.6 882.3H157.4c-12.8 0-23.7-4.7-32.6-13.9-8.9-9.2-13.1-20.4-12.6-33.1 6.8-170.2 51.3-328.5 125.5-445.7 74.6-118 172.2-182.9 274.8-182.9s200.2 65 274.8 182.9C861.4 506.8 906 665.1 912.7 835.3c0.5 12.8-3.7 23.9-12.6 33.1-8.8 9.2-19.7 13.9-32.5 13.9zM512.5 209.5c-101.6 0-198.3 64.5-272.4 181.6-73.9 116.8-118.3 274.6-125 444.3-0.5 12 3.5 22.4 11.8 31 8.3 8.6 18.6 13 30.5 13h710.2c12 0 22.3-4.4 30.5-13 8.3-8.6 12.3-19.1 11.8-31-6.7-169.7-51.1-327.5-125-444.3C710.8 274 614.1 209.5 512.5 209.5z"
        fill={getIconColor(color, 19, '#870002')}
      />
      <Path
        d="M922.4 887.7c-9.6 10-21.5 15.1-35.4 15.1H90.1c-6.1 0-11.8-1-17.1-2.9 1.6 2.4 3.5 4.8 5.7 7 9.6 10 21.5 15.1 35.4 15.1h796.8c13.9 0 25.8-5.1 35.4-15.1 9.6-10 14.2-22.1 13.7-36-11.4-287-118.1-530.1-267.3-640.4C829.3 348.2 925.3 580.3 936 851.7c0.6 13.9-4 26-13.6 36z"
        fill={getIconColor(color, 20, '#FF9B29')}
      />
      <Path
        d="M910.9 924.1H114.1c-14.5 0-26.9-5.3-37-15.7-10-10.4-14.8-23.1-14.3-37.5 7.6-191.1 57.6-368.8 140.9-500.4C287.5 238 397.2 165 512.5 165c115.3 0 224.9 73 308.8 205.5C904.5 502 954.6 679.7 962.1 870.8c0.6 14.5-4.2 27.1-14.3 37.5-10 10.5-22.4 15.8-36.9 15.8zM512.5 169.2c-113.8 0-222.1 72.3-305.2 203.5C124.5 503.7 74.7 680.6 67.1 871c-0.5 13.3 3.9 24.8 13.1 34.4 9.2 9.6 20.6 14.4 33.9 14.4H911c13.3 0 24.7-4.9 33.9-14.4 9.2-9.6 13.6-21.2 13.1-34.4-7.6-190.4-57.4-367.3-140.2-498.3-83.2-131.3-191.5-203.5-305.3-203.5z"
        fill={getIconColor(color, 21, '#870002')}
      />
    </Svg>
  );
};

Icongouwo.defaultProps = {
  size: 18,
};

Icongouwo = React.memo ? React.memo(Icongouwo) : Icongouwo;

export default Icongouwo;