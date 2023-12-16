import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
  },
  content: {
    width: '90%',
    alignSelf: 'center',
    marginTop: -30,
  },
  header: {
    width: '100%',
    height: 173,
    backgroundColor: '#0D0D0D',
    paddingVertical: 24,
  },
  logo: {
    alignSelf: 'center',
    marginTop: 48,
  },
  form: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  input: {
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    padding: 16,
    fontSize: 16,
    flex: 1,
    marginRight: 12,
    color: '#FFF',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 22,
  },
  button: {
    height: 52,
    width: 52,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerContent: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: 8,
  },
  created: {
    color: '#4EA8DE',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  done: {
    color: '#8284FA',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  countTask: {
    color: '#D9D9D9',
    backgroundColor: '#333333',
    borderRadius: 999,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  listEmpty: {
    alignItems: 'center',
  },
  listEmptyTextTitle: {
    color: '#808080',
    fontSize: 14,
    fontWeight: '700',
  },
  listEmptyTextDescription: {
    color: '#808080',
    fontSize: 14,
  },
})
