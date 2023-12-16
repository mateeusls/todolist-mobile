import { Checkbox, Text, View, DeleteIcon } from 'native-base'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { styles } from './style'

type TaskProps = {
  id?: string
  task: string
  checked?: boolean
  onRemove: () => void
  onChecked: () => void
}

export function Task({ task, checked, onRemove, onChecked }: TaskProps) {
  return (
    <View style={styles.container}>
      <Checkbox
        value=""
        style={!checked ? styles.checkBox : styles.checkBoxChecked}
        onChange={onChecked}
        aria-label="Checkbox"
      />
      <Text style={!checked ? styles.taskText : styles.taskTextHasLine}>
        {task}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <DeleteIcon />
      </TouchableOpacity>
    </View>
  )
}
