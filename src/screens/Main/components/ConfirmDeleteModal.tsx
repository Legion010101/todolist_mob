import {Alert, Modal, Pressable, StyleSheet, Text, View} from "react-native";
import {FC} from "react";

const ConfirmDeleteModal:FC<Props> = ({modalVisible,setModalVisible, deleteTodo, deleteKey}) =>{
  return <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Хотите удалить дело?</Text>
        <Pressable
          style={[styles.button, styles.buttonDelete]}
          onPress={() => deleteTodo(deleteKey)}>
          <Text style={styles.textStyle}>Удалить дело</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(false)}>
          <Text style={styles.textStyle}>Отменить</Text>
        </Pressable>
      </View>
    </View>
  </Modal>
}
export default ConfirmDeleteModal
type Props = {
  modalVisible:boolean
  setModalVisible:(isOpen: boolean)=>void
  deleteTodo:(key:string, isAddBin?: boolean)=>void
  deleteKey: string
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 15,
    elevation: 2,
  },
  buttonDelete: {
    backgroundColor: '#c41c23',
    width: 150,
  },
  buttonClose: {
    marginTop: 10,
    backgroundColor: '#45ff41',
    width: 150,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
