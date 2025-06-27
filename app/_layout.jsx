import { Tabs } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";
import { TransformerContext } from "../components/TransformerContext";
import data from "../assets/transformers/decepticons.json";

export default function TabLayout() {

  const [decepticonData, setDecepticonData] = useState(data);

  return (
        <TransformerContext.Provider value={{decepticonData, setDecepticonData}}>
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Top 3 List',
                    tabBarIcon: ({ color }) => <AntDesign size={28} name="bars" color={color}/>
                }}
            />
            <Tabs.Screen
                name="editor"
                options={{
                    title: 'Edit List',
                    tabBarIcon: ({ color }) => <AntDesign size={28} name="setting" color={color}/>
                }}
            />
        </Tabs>
        </TransformerContext.Provider>
     );
}
