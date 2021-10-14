import { theme } from './index';
import * as Fa from 'react-icons/fa';

interface IThemeControlLabels {
  [name: string]: string;
}

interface IThemeControl {
  type: 'color'|'radio'|'input'|'text'|'select';
  labels?: IThemeControlLabels;
}

interface IThemeColors {
  options: any[];
  mapping: any[];
  control: IThemeControl;
}

interface IThemeFontSizes {
  options: any[];
  control: IThemeControl;
}

interface IThemeIcons {
  options: any[];
  mapping: any;
  control: IThemeControl;
}

export const getThemeColors = () => {
  let keys: string[] = [];
  let themeKeys = Object.keys(theme.colors);
  themeKeys.forEach((v, i) => {
    const typeOfColor = typeof theme.colors[v];
    if (typeOfColor !== 'string') {
      for (let i = 0; i < theme.colors[v].length; i++){
        let key = v;
        key = `${key}.${i.toString()}`
        keys.push(key)
      }
    } else {
      keys.push(v);
    }
  })

  return { options: keys, mapping: keys, control: { type: 'select' } } as IThemeColors;
}

export const getThemeFontSizes = () => {
  let obj: IThemeFontSizes = { control: { type: 'select', labels: {}}, options: []};
  theme.fontSizes.forEach((v, i) => {
    obj.options.push(i.toString())
    obj.control.labels![i.toString()] = `v:${i.toString()} - t:${v.toString()}`;
  })
  return obj;
}

export const getThemeIcons = () => {
  let obj: IThemeIcons = { options: Object.keys(Fa), mapping: Fa, control: { type: 'select' }}
  return obj;
}