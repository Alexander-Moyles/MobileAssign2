import { Text, View, TextInput, Button, StyleSheet, ImageBackground } from "react-native";
import { useContext, useState } from 'react';
import { TransformerContext } from "../components/TransformerContext";
import { Picker } from '@react-native-picker/picker';

const background = require("../assets/images/background5.jpg");

export default function Editor() {

    const [currentTransformer, setCurrentTransformer] = useState(0);
    const { decepticonData, setDecepticonData } = useContext(TransformerContext);

    const [name, setName] = useState(decepticonData[currentTransformer].name);
    const [altMode, setAltMode] = useState(decepticonData[currentTransformer].altMode);
    const [rank, setRank] = useState(decepticonData[currentTransformer].rank);
    const [strength, setStrength] = useState(decepticonData[currentTransformer].strength);
    const [intelligence, setIntelligence] = useState(decepticonData[currentTransformer].intelligence);
    const [speed, setSpeed] = useState(decepticonData[currentTransformer].speed);
    const [endurance, setEndurance] = useState(decepticonData[currentTransformer].endurance);
    const [courage, setCourage] = useState(decepticonData[currentTransformer].courage);
    const [firepower, setFirepower] = useState(decepticonData[currentTransformer].firepower);
    const [skill, setSkill] = useState(decepticonData[currentTransformer].skill);
    const [image, setImage] = useState(decepticonData[currentTransformer].image);

    const updateDecepticonData = () => {
        const updatedData = {
            name: name,
            altMode: altMode,
            rank: rank,
            strength: strength,
            intelligence: intelligence,
            speed: speed,
            endurance: endurance,
            courage: courage,
            firepower: firepower,
            skill: skill,
            image: image
        }
        decepticonData[currentTransformer] = updatedData;
        setDecepticonData(decepticonData);
    }

    const changeTransformerIndex = (value) => {
        const index = parseInt(value);
        setCurrentTransformer(index);
        setName(decepticonData[index].name);
        setAltMode(decepticonData[index].altMode);
        setRank(decepticonData[index].rank);
        setStrength(decepticonData[index].strength);
        setIntelligence(decepticonData[index].intelligence);
        setSpeed(decepticonData[index].speed);
        setEndurance(decepticonData[index].endurance);
        setCourage(decepticonData[index].courage);
        setFirepower(decepticonData[index].firepower);
        setSkill(decepticonData[index].skill);
    }

    return (
        <>
            <ImageBackground source={background} resizeMode="cover" style={styles.background}>
                <View style={styles.viewStyle}>
                    <Text style={styles.boldText}>Decepticon #:</Text>
                    <Picker
                    style={styles.picker}
                        selectedValue={parseInt(currentTransformer)}
                        onValueChange={(itemValue, itemIndex) => changeTransformerIndex(itemIndex)
                      }>
                      <Picker.Item label="Decepticon 1" value={0} />
                      <Picker.Item label="Decepticon 2" value={1} />
                      <Picker.Item label="Decepticon 3" value={2} />
                    </Picker>

                    <Text style={styles.boldText}>Name:</Text>
                    <TextInput style={styles.textInput} value={name.toString()} onChangeText={setName} />


                    <Text style={styles.boldText}>Alternate Mode:</Text>
                    <TextInput style={styles.textInput} value={altMode.toString()}
                        onChangeText={setAltMode} />

                    <Text style={styles.boldText}>Stats:</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.statInput}>Rank:</Text>
                        <TextInput style={styles.statRank}
                            value={rank.toString()} onChangeText={setRank} />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.statInput}>Strength:</Text>
                        <TextInput style={styles.statStr}
                            value={strength.toString()} onChangeText={setStrength} />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.statInput}>Intelligence:</Text>
                        <TextInput style={styles.statInt}
                            value={intelligence.toString()} onChangeText={setIntelligence} />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.statInput}>Speed:</Text>
                        <TextInput style={styles.statSpeed}
                            value={speed.toString()} onChangeText={setSpeed} />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.statInput}>Endurance:</Text>
                        <TextInput style={styles.statEnd}
                            value={endurance.toString()} onChangeText={setEndurance} />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.statInput}>Courage:</Text>
                        <TextInput style={styles.statCourage}
                            value={courage.toString()} onChangeText={setCourage} />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={styles.statInput}>Firepower:</Text>
                        <TextInput style={styles.statFire}
                            value={firepower.toString()} onChangeText={setFirepower} />
                    </View>

                    <View style={styles.statView}>
                        <Text style={styles.statInput}>Skill:</Text>
                        <TextInput style={styles.statSkill}
                            value={skill.toString()} onChangeText={setSkill} />
                    </View>

                    <Text style={styles.boldText}>Image:</Text>
                    <Picker
                      style={styles.picker}
                      selectedValue={image}
                      onValueChange={(itemValue, itemIndex) =>
                        setImage(itemValue)
                      }>
                      <Picker.Item label="Soundwave" value="soundwave" />
                      <Picker.Item label="Leozack" value="leozack" />
                      <Picker.Item label="Deathsaurus" value="ds" />
                      <Picker.Item label="Liokaiser" value="lk" />
                      <Picker.Item label="Megatron" value="megs" />
                      <Picker.Item label="Shockwave" value="shockwave" />
                    </Picker>

                    <View style={styles.fixToText}>
                        <Button color="#944BCD" title="Update" onPress={updateDecepticonData} />
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
    boldText: {
        fontWeight: '700',
        fontSize: 20,
        color: "#41BF10"
    },
    statInput: {
        fontWeight: '400',
        fontSize: 18,
        marginTop: -3,
        color: "#E33DC5"
    },
    picker: {
        height: 55,
        width: 170,
        backgroundColor: "#9323B3",
        color: "#fff",
        marginBottom: 7
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        justifyContent: "center",
        alignItems: "center"
    },
    statView: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"row"
    },
    textInput: {
        fontSize: 18,
        backgroundColor: '#E8E8E8',
        borderRadius: 15
    },
    background: {
        flex: 1,
        justifyContent: 'center'
    },
    statRank: { fontSize: 17, marginLeft: 65, backgroundColor: '#E8E8E8', borderRadius: 5, width: 25 },
    statStr: { fontSize: 17, marginLeft: 36, backgroundColor: '#E8E8E8', borderRadius: 5, width: 25 },
    statInt: { fontSize: 17, marginLeft: 12, backgroundColor: '#E8E8E8', borderRadius: 5, width: 25 },
    statSpeed: { fontSize: 17, marginLeft: 54, backgroundColor: '#E8E8E8', borderRadius: 5, width: 25 },
    statEnd: { fontSize: 17, marginLeft: 19, backgroundColor: '#E8E8E8', borderRadius: 5, width: 25 },
    statCourage: { fontSize: 17, marginLeft: 35, backgroundColor: '#E8E8E8', borderRadius: 5, width: 25 },
    statFire: { fontSize: 17, marginLeft: 23, backgroundColor: '#E8E8E8', borderRadius: 5, width: 25 },
    statSkill: { fontSize: 17, marginLeft: 70, backgroundColor: '#E8E8E8', borderRadius: 5, width: 25 }
});
