import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F1E25',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    width: '90%',
    alignSelf: 'center',
  },
  button: {},
  taskText: {
    color: '#F2F2F2',
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
  },
  taskTextHasLine: {
    color: '#808080',
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    textDecorationLine: 'line-through',
  },
  checkBox: {
    width: 20,
    height: 20,
    borderRadius: 999,
    borderWidth: 3,
    borderColor: '#4EA8DE',
    backgroundColor: '#1F1E25',
  },
  checkBoxChecked: {
    width: 20,
    height: 20,
    borderRadius: 999,
    backgroundColor: '#5E60CE',
    borderWidth: 0,
  },
})
