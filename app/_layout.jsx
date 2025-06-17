import { Tabs } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

import { useContext } from 'react';
import { TransformerContext } from "../components/TransformerContext";

export default function TabLayout() {
  return <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Top 3',
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
         </Tabs>;
}
/*
    Eric's Github:
    https://github.com/EricStockTeacher/EricsMovies/blob/96c6d11963dfea5293966256ff68736c08eb52f7/app/movies.jsx
    https://github.com/EricStockTeacher/EricsMovies/blob/96c6d11963dfea5293966256ff68736c08eb52f7/app/_layout.jsx
    https://github.com/EricStockTeacher/EricsMovies/blob/96c6d11963dfea5293966256ff68736c08eb52f7/app/updateMovies.jsx
 */
