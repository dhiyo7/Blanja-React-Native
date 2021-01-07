import React from 'react';
import {StyleSheet, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ButtonSubmit, Text} from '../../components';
import {colors} from '../../utils';

const DetailProductScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={require('../../assets/images/detailproduct.jpeg')}
        />
      </View>
      <ScrollView style={{paddingHorizontal: 10, paddingTop: 10, backgroundColor: '#E5E5E5', borderRadius:25}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{marginBottom: 7}}>
            <Text children="H&M" size="l" style={{fontWeight: '700'}}/>
            <Text children="Short black dress" color="gray" size="l" />
          </View>
          <View>
            <Text children="$19.99" style={{fontWeight: '700'}} color="red" size="xl" />
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
          <Icon name="star" size={20} color={colors.yellow} />
          <Text children="(1)" color="gray" />
        </View>
        <View style={{marginBottom: 13}}>
          <Text
            children="Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim."
            size="l"
          />
        </View>
       
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text children="Color" size="l" style={{fontWeight: '700', marginLeft: 5}} />
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity style={styles.pickColor1}></TouchableOpacity>
                <TouchableOpacity style={styles.pickColor2}></TouchableOpacity>
                <TouchableOpacity style={styles.pickColor3}></TouchableOpacity>
                <TouchableOpacity style={styles.pickColor4}></TouchableOpacity>
              </View>
            </View>
            <View style={{alignItems: 'flex-start'}}>
              <Text children="Size" style={{fontWeight: '700', marginLeft: 5}} size="l" />
              <View>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity style={styles.pickSize}>
                      <Icon name="minus" size={30} color={colors.black}/>
                  </TouchableOpacity>
                  <Text children="28" size="l" style={{marginHorizontal: 4}} />
                  <TouchableOpacity style={styles.pickSize}>
                  <Icon name="plus" size={30} color={colors.black}/>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.separator}></View>
        <View style={{flexDirection: 'row', justifyContent:"space-between", alignItems: 'center', marginBottom: 10}}>
            <Text children="You can also like this" size="xl" style={{fontWeight: '700'}}/>
            <Text children="12 items" size="m" color='gray' />
        </View>
        <View style={{height: '40%'}}></View>
      </ScrollView>
      <View style={{bottom: 0, backgroundColor: 'white', width: '100%'}}>
          <ButtonSubmit bg="red" title="ADD TO CART"/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  img: {
    height: 270,
    width: 360,
  },
  pickColor1: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
    borderRadius: 75,
    // overflow: 'hidden',
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'white',
  },
  pickColor2: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
    borderRadius: 75,
    // overflow: 'hidden',
    backgroundColor: '#D84242',
    borderWidth: 2,
    borderColor: 'white',
  },
  pickColor3: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
    borderRadius: 75,
    // overflow: 'hidden',
    backgroundColor: '#4290D8',
    borderWidth: 2,
    borderColor: 'white',
  },
  pickColor4: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
    borderRadius: 75,
    // overflow: 'hidden',
    backgroundColor: '#42D86C',
    borderWidth: 2,
    borderColor: 'white',
  },
  pickSize: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    borderRadius: 75,
    // overflow: 'hidden',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'white',
  },
  separator:{
      marginVertical: 20,
      opacity: 0.5,
      borderBottomColor: 'gray',
      borderBottomWidth: StyleSheet.hairlineWidth,
  }
});
export default DetailProductScreen;
