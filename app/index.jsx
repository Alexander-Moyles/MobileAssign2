import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { useState } from "react";
import Transformer from "../components/transformer.jsx";
import Button from '../components/button.jsx'
import { useContext } from 'react';
import { TransformerContext } from "../components/TransformerContext";

const soundwave = require("../assets/images/Soundwave.jpg");
const leozack = require("../assets/images/Leozack.jpg");
const ds = require("../assets/images/Deathsaurus.jpg");
const megs = require("../assets/images/Megatron.jpg");
const liokaiser = require("../assets/images/Liokaiser.jpg");
const shockwave = require("../assets/images/Shockwave.jpg");

const background = require("../assets/images/background5.jpg");

const images = {"soundwave":soundwave, "leozack":leozack, "ds":ds, "megs":megs, "lk":liokaiser,
    "shockwave":shockwave};

export default function Index() {
  const { decepticonData, setDecepticonData } = useContext(TransformerContext);
  const [transformerIndex, setTransformerIndex] = useState(0);

  return (
    <>
        <ImageBackground source={background} resizeMode="cover" style={styles.background}>
            <View style={styles.viewStyle}>
              <Text style={styles.text}>Top 3 Decepticons</Text>
              <Transformer data={decepticonData[transformerIndex]} image={images[decepticonData[transformerIndex].image]} />
                <View style={styles.viewButton}>
                  <Button label={"1"} onPress={() => setTransformerIndex(0)} isDisabled={transformerIndex + 1}/>
                  <Button label={"2"} onPress={() => setTransformerIndex(1)} isDisabled={transformerIndex + 1}/>
                  <Button label={"3"} onPress={() => setTransformerIndex(2)} isDisabled={transformerIndex + 1}/>
              </View>
            </View>
        </ImageBackground>
    </>
  );
}
const styles = StyleSheet.create({
    viewStyle: {
        flex: 0.85,
        justifyContent: "center",
        alignItems: "center"
    },
    viewButton: {
        marginTop: 5,
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"row"
    },
    background: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        fontWeight: '700',
        fontSize: 40,
        color: "#E934F0"
    }
});
