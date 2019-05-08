import { StyleSheet } from 'react-native';
import { lightGreen } from '../../styles/Colors';

export default StyleSheet.create({
  commentDate: {
    fontSize: 10
  },
  commentTextContainer: {
    marginBottom: 10,
    marginLeft: 5,
    marginTop: 5,
    fontSize: 16
  },
  commentText: {
    color: '#3366cc'
  },
  commentUserName: {
    color: lightGreen
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  paragraph: {
    textAlign: 'center',
    color: '#002f2f',
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 18
  }
});
