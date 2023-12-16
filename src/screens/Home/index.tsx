import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { styles } from './style'
import { FlatList, Image } from 'native-base'
import { useState } from 'react'
import { Task } from '../../Components/Task'

type TasksListProps = {
  id: string
  name: string
  checked?: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<TasksListProps[]>([])
  const [task, setTask] = useState('')

  function handleAddTask() {
    if (task === '') {
      return Alert.alert('Atividade inválida', 'A atividade não pode ser vazio')
    }

    setTasks([...tasks, { id: Math.random().toString(), name: task }])
    setTask('')
  }

  function handleRemoveTask(id: string) {
    Alert.alert(
      'Remover',
      'Tem certeza que deseja remover esse participante?',
      [
        {
          text: 'Não',
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => {
            setTasks((prevState) => prevState.filter((task) => task.id !== id))
          },
        },
      ],
    )
  }

  function hadleCheckTask(id: string) {
    setTasks((prevState) =>
      prevState.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            checked: !task.checked,
          }
        }

        return task
      }),
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/logo.png')}
          alt="Logo Todo"
          style={styles.logo}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            value={task}
            onChangeText={setTask}
          />

          <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.info}>
          <View style={styles.headerContent}>
            <Text style={styles.created}>Criadas</Text>
            <Text style={styles.countTask}>{tasks.length}</Text>
          </View>
          <View style={styles.headerContent}>
            <Text style={styles.done}>Concluídas</Text>
            <Text style={styles.countTask}>
              {tasks.filter((task) => task.checked).length}
            </Text>
          </View>
        </View>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Task
            task={item.name}
            onRemove={() => handleRemoveTask(item.id)}
            onChecked={() => hadleCheckTask(item.id)}
            checked={item.checked}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.listEmpty}>
            <Text style={styles.listEmptyTextTitle}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.listEmptyTextDescription}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  )
}
