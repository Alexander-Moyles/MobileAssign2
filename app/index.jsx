import { Text, View } from "react-native";
import { useState } from "react";
import Transformer from "@/components/transformer.jsx";
import Button from '@/components/button.jsx'

const soundwave = require("../assets/images/Soundwave.jpg");
const leozack = require("../assets/images/Leozack.jpg");
const ds = require("../assets/images/Deathsaurus.jpg");

const images = {"soundwave":soundwave, "leozack":leozack, "ds":ds};

import decepticonData from "../assets/transformers/decepticons.json";

export default function Index() {
  let [transformerIndex, setTransformerIndex] = useState(0);
  return (
    <View
      style={{
        flex: 0.85,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontWeight: '700', fontSize: 40 }}>Top 3 Decepticons</Text>
      <Transformer decepticonData={decepticonData[transformerIndex]} image={images[decepticonData[transformerIndex].image]} />
        <View
              style={{
                marginTop: 5,
                justifyContent: "center",
                alignItems: "center",
                flexDirection:"row"
              }}
            >
          <Button label={"1"} onPress={() => setTransformerIndex(transformerIndex = 0)} isDisabled={transformerIndex + 1}/>
          <Button label={"2"} onPress={() => setTransformerIndex(transformerIndex = 1)} isDisabled={transformerIndex + 1}/>
          <Button label={"3"} onPress={() => setTransformerIndex(transformerIndex = 2)} isDisabled={transformerIndex + 1}/>
      </View>
    </View>
  );
}
