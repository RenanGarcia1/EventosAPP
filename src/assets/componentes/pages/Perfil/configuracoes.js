import React, { useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const configuracoes = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
        <View style={styles.opcoes}>
      <Text style={styles.text}>Modo Escuro:</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "81b0ff" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Icon style={styles.icon} name={isEnabled ? "moon" : "sun"} color="#0e47e6" size={30}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  opcoes: {
    flexDirection:'row',
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text:{
      fontSize: 25,
  },
  icon:{
    marginLeft: 25
},
});

export default configuracoes;