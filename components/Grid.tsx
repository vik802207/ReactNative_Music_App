/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import react,{ Dimensions, Text, View } from "react-native";
import { FlatList } from "react-native";
import { StyleSheet } from "react-native";

/* eslint-disable prettier/prettier */
const data = [
    {id: 'a', value: 'A'},
    {id: 'b', value: 'B'},
    {id: 'c', value: 'C'},
    {id: 'd', value: 'D'},
    {id: 'e', value: 'E'},
    {id: 'f', value: 'F'},
  ];
  const numColumns = 7;
  const size = Dimensions.get('window').width/numColumns;
  const styles = StyleSheet.create({
    itemContainer: {
      width: size,
      height: size,
    },
    item: {
      flex: 3,
      margin: 3,
      backgroundColor: 'lightblue',
    }
  });
  
  function Grid() {
    return (
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Text style={styles.item}>{item.value}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        numColumns={numColumns} />
    );
  }
  export default Grid