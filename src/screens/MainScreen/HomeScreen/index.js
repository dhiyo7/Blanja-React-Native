import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Button,
  StatusBar,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {HeaderHome} from '../../../components';
import {Text} from '../../../components';
import {IconStarAct} from '../../../assets/icons'

import {colors} from '../../../utils';

const HomeScreen = ({navigation}) => {
  const BASE_URL = 'http://192.168.18.29:8015';
  const [card, setCard] = useState([]);
  const [cardTwo, setCardTwo] = useState([]);

  useEffect(() => {
    // code to run on component mount
    getDataNew();
    getDataPopular();
  }, []);

  const getDataNew = () => {
    axios
      .get(BASE_URL + '/sorting?keyword=created_at DESC')
      .then((res) => {
        const card = res.data.data;
        console.log('DataNew', card);
        setCard(card);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDataPopular = () => {
    axios
      .get(BASE_URL + '/products?limit=5&page=3')
      .then((res) => {
        const cardTwo = res.data.data.products;
        console.log('DataPopular', cardTwo);
        setCardTwo(cardTwo);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <View>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="rgba(0,0,0,0)"
        />
        <HeaderHome>
          <Text children="My Profile" size="xl3" style={styles.myprofile} />
        </HeaderHome>
      </View>

      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
        <View style={styles.wrapTitleText}>
          <View>
            <Text children="New" size="xl3" style={styles.titeText} />
            <Text
              children="You’ve never seen it before!"
              size="m"
              style={styles.childText}
            />
          </View>
          <View>
            <Text onPress={() => navigation.navigate('DetailProduct')} children="See All" size="m" style={styles.childText} />
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.slider}>
          {card.map(
            ({
              product_id,
              product_name,
              product_price,
              product_photo,
              rating,
              id,
            }) => {
              return (
                <View
                onPress={() => navigation.navigate('DetailProduct')}
                  style={{paddingHorizontal: 10}}
                  key={id}>
                  <Image
                    source={require('../../../assets/images/home2.png')}
                    style={{borderRadius: 10}}
                  />
                  <View style={styles.rating}>
                    <Image
                      source={require('../../../assets/images/Star.png')}
                    />

                    <Text children={rating} />
                  </View>
                  <Text children={product_name} />
                  <Text children={product_price} />
                </View>
              );
            },
          )}
        </ScrollView>

        <View style={styles.wrapTitleText}>
          <View>
            <Text children="Popular" size="xl3" style={styles.titeText} />
            <Text
              children="You’ve never seen it before!"
              size="m"
              style={styles.childText}
            />
          </View>
          <View>
            <Text children="See All" size="m" style={styles.childText} />
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.slider}>
          {cardTwo.map(
            ({
              product_id,
              product_name,
              product_price,
              product_photo,
              rating,
              id,
            }) => {
              return (
                <View
                  style={{paddingHorizontal: 10, marginBottom: 20}}
                  key={id}>
                  <Image
                    source={require('../../../assets/images/home3.png')}
                    style={{borderRadius: 10}}
                  />
                  <View style={styles.rating}>
                    <Image
                      source={require('../../../assets/images/Star.png')}
                    />

                    <Text children={rating} />
                  </View>
                  <Text children={product_name} />
                  <Text children={product_price} />
                </View>
              );
            },
          )}
        </ScrollView>
      </ScrollView>
      {/* <Button
          style={styles.button}
          title="Go to Notif"
          onPress={() => navigation.navigate('Notification')}
        />
        <Button
          style={styles.button}
          title="Go to Details"
          onPress={() => navigation.navigate('DetailProduct')}
        /> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 10,
  },
  titeText: {
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 2,
  },
  titleText: {
    textAlign: 'left',
  },
  wrapTitleText: {
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
  },

  rating: {
    flexDirection: 'row',
    marginTop: 6,
    alignItems: 'center',
  },

  slider: {
    marginTop: 5,
    flexDirection: 'row',
  },
});

export default HomeScreen;
