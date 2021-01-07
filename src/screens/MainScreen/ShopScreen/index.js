import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';
import ClassicHeader from 'react-native-classic-header';
import {colors} from '../../../utils';
import {color} from 'react-native-reanimated';


const ShopScreen = () => {

  const BASE_URL = 'http://192.168.18.29:8015';
  const [category, setCategory] = useState([])

  useEffect(() => {
    getDataCategory()
  }, [])

  const getDataCategory = () => {
    axios
    .get(BASE_URL + '/categories')
    .then((res) => {
      const category = res.data.data;
      console.log('Category', category);
      setCategory(category);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    // <View>
    //   <ClassicHeader
    //     headerTitle="Alat"
    //     // titleTextStyle={{color: colors.white}}
    //     leftComponentDisable
    //     backgroundColor={colors.white}
    //     rightComponent={
    //       <TouchableOpacity style={{marginRight: 15}}>
    //         <Icon name="plus" type="AntDesign" size={30} color={colors.red} />
    //       </TouchableOpacity>
    //     }
    //   />
    // </View>

    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={{color: 'white'}}>VIEW ALL ITEMS</Text>
      </TouchableOpacity>
      <Text style={{color: 'grey', fontSize: 16, marginTop: 30}}>
        Choose Category
      </Text>
      {category.map(({id, category_name}) => {
        return (
          <View style={styles.garis} key={id}>
            <Text style={{fontSize: 16}}>{category_name}</Text>
          </View>
        )
      })}
    </ScrollView>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#e5e5e5',
    paddingHorizontal: 15,
  },

  button: {
    width: '100%',
    height: 48,
    backgroundColor: 'red',
    // color: 'white',
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    elevation: 20,
  },

  garis: {
    borderBottomColor: '#9B9B9B',
    borderBottomWidth: 1,
    height: 40,
    justifyContent: 'center',
    marginTop: 10,
  },
});
