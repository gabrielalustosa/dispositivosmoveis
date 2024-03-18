import { View, Text, Button, TextInput, StyleSheet} from 'react-native'
import React, {useState} from 'react'

export default function Login() {

  const [username, setUsername]=useState("")
  const [password, setPassword]=useState("")

  const Enter = () => {
    console.log(username, password)
  }

  return (
    <View>

      <TextInput style = {{borderColor : '#ffcbdb', borderWidth : 2, width : 400, height : 40, marginBottom : 40}} 
      placeholder='Username'
      value={username}
      onChangeText={setUsername}/>

      <TextInput style = {{borderColor : '#ffcbdb', borderWidth : 2, width : 400, height : 40, marginBottom : 40}} 
      placeholder='Password'
      value={password}
      onChangeText={setPassword}/>

      <Button title='Enter' onPress={Enter} color='#ffcbdb'/>

    </View>
  )
}