import ImageColors from 'react-native-image-colors';

export const getImageColours = async (uri: string) => {
  const colours = await ImageColors.getColors(uri, {});
  let primary;
  let secundary;

  switch (colours.platform) {
    case 'android':
      primary = colours.dominant;
      secundary = colours.average;
      break;
    case 'ios':
      primary = colours.primary;
      secundary = colours.secondary;
      break;
    default:
      throw new Error('Unexpected platform key');
  }

  return [primary, secundary];
};
