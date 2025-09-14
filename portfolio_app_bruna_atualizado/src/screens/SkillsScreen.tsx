import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const skills = [
  {name: 'HTML', level: 80},
  {name: 'CSS', level: 70},
  {name: 'JavaScript', level: 65},
  {name: 'Python', level: 60},
  {name: 'SQL', level: 50},
];

export default function SkillsScreen({ navigation }: any) {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#0f172a'}}>
      <ScrollView contentContainerStyle={{alignItems:'center', padding:20}}>
        <Image source={require('../../assets/bruna.jpg')} style={{width:120,height:120,borderRadius:60}} />
        <Text style={{color:'#fff', fontSize:20, marginTop:8}}>Bruna Guimarães</Text>
        <Text style={{color:'#9ca3af'}}>Skills</Text>

        <View style={{width:'100%', marginTop:16}}>
          {skills.map((s) => (
            <View key={s.name} style={{marginBottom:12}}>
              <Text style={{color:'#fff', marginBottom:6}}>{s.name} - {s.level}%</Text>
              <View style={{height:10, backgroundColor:'#111827', borderRadius:6, overflow:'hidden'}}>
                <View style={{height:10, width: `${s.level}%`, backgroundColor:'#10b981'}} />
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity onPress={() => navigation.goBack()} style={{padding:12, backgroundColor:'#374151', borderRadius:10, marginTop:20}}>
          <Text style={{color:'#fff'}}>Voltar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
