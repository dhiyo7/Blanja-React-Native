import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import Text from '../../../components/Text';
import {
  FormInput,
  ButtonSubmit,
  OutlineFormInput,
} from '../../../components/index';

import OutlineInput from 'react-native-outline-input';

export default class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange(text) {
    this.setState({email: text});
  }

  passwordChange(pass) {
    this.setState({password: pass});
  }

  nameChange(text) {
    this.setState({name: text});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text size="xl3" children="Sign up" type="Bold" style={styles.title} />
        <View style={styles.FormInput}>
          {/* <FormInput label="Name" placeholder="Name" style={styles.formI} />
          <FormInput
            label="Password"
            placeholder="Password"
            style={styles.formI}
            secureTextEntry
          /> */}

          {/* <OutlineFormInput label="" passiveBorderColor='red' /> */}
          <View style={styles.pass}>
            <OutlineInput
              value={this.state.name}
              onChangeText={(text) => this.nameChange(text)}
              label="Name"
              activeValueColor="black"
              activeBorderColor="green"
              activeLabelColor="green"
              passiveBorderColor="black"
              passiveLabelColor="black"
              passiveValueColor="black"
            />
          </View>
          <View style={styles.pass}>
            <OutlineInput
              value={this.state.email}
              onChangeText={(text) => this.handleChange(text)}
              label="Email"
              activeValueColor="black"
              activeBorderColor="green"
              activeLabelColor="green"
              passiveBorderColor="black"
              passiveLabelColor="black"
              passiveValueColor="black"
              keyboardType="email-address"
              autoCompleteType="email"
            />
          </View>
          <OutlineInput
            value={this.state.password}
            onChangeText={(pass) => this.passwordChange(pass)}
            label="Password"
            activeValueColor="black"
            activeBorderColor="green"
            activeLabelColor="green"
            passiveBorderColor="black"
            passiveLabelColor="black"
            passiveValueColor="black"
            secureTextEntry
            // style={{marginTop: 8}}
          />
          <TouchableOpacity>
            <View style={styles.forgot}>
              <Image
                source={require('../../../assets/image/Vector.png')}
                style={{marginTop: 5, marginLeft: 5, paddingHorizontal: 10}}
              />
              <Text
                size="s"
                children="Already have an account?"
                type="Bold"
                style={{fontWeight: 'bold'}}
              />
            </View>
          </TouchableOpacity>

          <ButtonSubmit title="Sign up" bg="red" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    height: '100%',
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: 'bold',
    marginTop: 60,
  },
  FormInput: {
    justifyContent: 'center',
    height: '80%',
  },
  formI: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 8,
  },

  forgot: {
    flexDirection: 'row-reverse',
    paddingHorizontal: 10,
    paddingTop: 10,
  },

  pass: {
    marginBottom: 15,
  },
});
