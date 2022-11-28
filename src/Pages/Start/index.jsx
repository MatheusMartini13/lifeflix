import React from "react";
import { View, ScrollView, Text, Image } from "react-native";


export default function Start(){
  return (
    <view>
      <ScrollView showVerticalScrollIndicator={false}>
        <View>
          <Image 
            source={require(".../.../assets/icon/logo3.pnj")}
          />
          <Text>
              Vamos transformar sua vida! {"/n"} em jogo, buscando sempre {"/n"} o melhor nível.
          </Text>

        </View>

      </ScrollView>
    </view>
  )
}