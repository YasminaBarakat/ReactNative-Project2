import { Text, StyleSheet, Platform } from 'react-native';

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    // fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderWidth: Platform.select({ios: 0,android: 2}),
    borderColor: 'white',
    padding: 12,
    maxWidth: '80%', // taken instead if the 300px is more than 80%, 80% of the parent container which here is the view of the screen in gamescreen
    width: 300,
  },
});
