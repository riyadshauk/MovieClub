import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // @ts-ignore
  backgroundColor: idx => {
    const colors = ['#e6f2ff', '#e6fff2'];
    return { backgroundColor: colors[idx % colors.length] };
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  mention: {
    padding: 10,
    alignItems: 'center'
  }
});
