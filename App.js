import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View ,Text} from 'react-native';
import AudioRecorder from './components/AudioRecorder';

export default function App() {
  return (
    <View style={styles.container}>
      
      <AudioRecorder />
   
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F52BA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
