import { View, Text, StyleSheet } from 'react-native';
import { useState } from  'react';
import { TextInput } from 'react-native-paper';

import { colors } from '../utils/colors';
import { spacing } from '../utils/sizes';
import { RoundedButton } from '../components/RoundedButton';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput} 
          label="What will you like to focus on?"
          value={subject}
          onChangeText={setSubject}
        />
        <View style={styles.button} >
          <RoundedButton 
            title="+"
            size={50}
            onPress={() => addSubject(subject)} 
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
  },

  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row'
  },

  textInput: {
    flex: 1,
    marginRight: spacing.sm
  },

  button: {
    justifyContent: 'center'
  }
})