import { Text, View } from "react-native";
import { useState } from "react";
import Transformer from "../components/transformer.jsx";
import Button from '../components/button.jsx'
import { useContext } from 'react';
import { TransformerContext } from "../components/TransformerContext";

const soundwave = require("../assets/images/Soundwave.jpg");
const leozack = require("../assets/images/Leozack.jpg");
const ds = require("../assets/images/Deathsaurus.jpg");

const images = {"soundwave":soundwave, "leozack":leozack, "ds":ds};

export default function Index() {
  const { decepticonData, setDecepticonData } = useContext(TransformerContext);
  const [transformerIndex, setTransformerIndex] = useState(0);

  return (
    <View
      style={{
        flex: 0.85,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontWeight: '700', fontSize: 40 }}>Top 3 Decepticons</Text>
      <Transformer data={decepticonData[transformerIndex]} image={images[decepticonData[transformerIndex].image]} />
        <View
              style={{
                marginTop: 5,
                justifyContent: "center",
                alignItems: "center",
                flexDirection:"row"
              }}
            >
          <Button label={"1"} onPress={() => setTransformerIndex(0)} isDisabled={transformerIndex + 1}/>
          <Button label={"2"} onPress={() => setTransformerIndex(1)} isDisabled={transformerIndex + 1}/>
          <Button label={"3"} onPress={() => setTransformerIndex(2)} isDisabled={transformerIndex + 1}/>
      </View>
    </View>
  );
}
