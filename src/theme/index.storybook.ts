import { theme } from './index';

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

  return keys;
}