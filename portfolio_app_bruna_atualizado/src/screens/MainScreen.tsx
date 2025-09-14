import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MainScreen({ navigation }: any) {
  const open = (url: string) => Linking.openURL(url);
  return (
    <SafeAreaView style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'#0f172a'}}>
      <Image source={require('../../assets/bruna.jpg')} style={{width:140, height:140, borderRadius:70, marginBottom:16}} />
      <Text style={{color:'#fff', fontSize:24, fontWeight:'700'}}>Bruna Guimarães</Text>
      <Text style={{color:'#9ca3af', marginTop:4}}>Estudante de Ciência da Computação</Text>

      <View style={{marginTop:20, width:'80%'}}>
        <TouchableOpacity onPress={() => open('https://www.linkedin.com/in/bruna-guimar%C3%A3es-69824124b/')} style={{padding:12, backgroundColor:'#111827', borderRadius:10, marginBottom:8}}>
          <Text style={{color:'#fff'}}>LinkedIn</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => open('mailto:brunabsg@outlook.com.br')} style={{padding:12, backgroundColor:'#111827', borderRadius:10, marginBottom:8}}>
          <Text style={{color:'#fff'}}>E-mail</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Skills')} style={{padding:12, backgroundColor:'#065f46', borderRadius:10, marginTop:12}}>
          <Text style={{color:'#fff', textAlign:'center'}}>Ver Skills</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
