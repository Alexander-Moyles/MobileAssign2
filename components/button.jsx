import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function Button({ label, onPress, isDisabled }: Props) {
  let pressEvent = onPress;
  let buttonStyle = styles.buttonContainer;

  if (isDisabled == label) {
      pressEvent = () => {}
      buttonStyle = styles.disabledContainer
  }

  return (
    <View style={buttonStyle}>
      <Pressable style={styles.button} onPress={pressEvent}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#944BCD',
    width: 60,
    height: 45,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    marginTop: 5,
    borderRadius: 10,
  },
  button: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
  disabledContainer: {
    backgroundColor: '#BB8D93',
    width: 60,
    height: 45,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    marginTop: 5,
    borderRadius: 10,
  }
});
