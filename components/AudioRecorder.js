import React, { useState } from 'react';
import { View, Text, Button ,StyleSheet ,FlatList ,saveTitle} from 'react-native';
import { Input } from 'react-native-elements';

const AudioRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [title, setTitle] = useState('');
  const [recordings, setRecordings] = useState([]);

  const toggleRecording = () => {
    // Implement recording logic here
  };

  return (
    <View style={styles.container}>
      <Text>Audio Recorder Component</Text>
      <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={toggleRecording}
      />
     {/* List of Recorded Titles */}
     <FlatList
        data={recordings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Button title="Edit" onPress={() => editRecordingTitle(item.id)} />
            <Button title="Delete" onPress={() => deleteRecording(item.id)} />
          </View>
        )}
      />

      {/* Edit Title Input */}
      <Input
        placeholder="New Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Button title="Save Title" onPress={saveTitle} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#40E0D0",
    alignItems: "center",
  },
});
export default AudioRecorder;
