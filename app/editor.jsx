import { Text, View } from "react-native";

import { useContext } from 'react';
import { TransformerContext } from "../components/TransformerContext";

export default function Editor() {
    return (
        <View
          style={{
            flex: 0.85,
            justifyContent: "left",
            alignItems: "left",
            marginLeft: 16
          }}
        >
            <Text style={{ fontWeight: '700', fontSize: 20 }}>Item #:</Text>
        </View>
    );
}
