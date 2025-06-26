import { Text, View, TextInput, Button } from "react-native";
import { useContext, useState } from 'react';
import { TransformerContext } from "../components/TransformerContext";
import { Picker } from '@react-native-picker/picker';

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

    const changeRank = (value) => {
        const updatedRank = parseInt(value);
        setRank(updatedRank);
    }

    const changeStrength = (value) => {
        const updatedStrength = parseInt(value);
        setRank(updatedStrength);
    }

    const changeIntelligence = (value) => {
        const updatedIntelligence = parseInt(value);
        setRank(updatedIntelligence);
    }

    const changeSpeed = (value) => {
        const updatedSpeed = parseInt(value);
        setRank(updatedSpeed);
    }

    const changeEndurance = (value) => {
        const updatedEndurance = parseInt(value);
        setRank(updatedEndurance);
    }

    const changeCourage = (value) => {
            const updatedCourage = parseInt(value);
            setRank(updatedCourage);
    }

    const changeFirepower = (value) => {
        const updatedFirepower = parseInt(value);
        setRank(updatedFirepower);
    }

    const changeSkill = (value) => {
        const updatedSkill= parseInt(value);
        setRank(updatedSkill);
    }

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
            skill: skill
        }
        console.log(updatedData);
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
            <View
              style={{
                flex: 0.85,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                marginLeft: 16,
                paddingTop: 10
              }}
            >
                <Text style={{ fontWeight: '700', fontSize: 20 }}>Decepticon #:</Text>
                <Picker
                style={{ height: 55, width: 170 }}
                    selectedValue={parseInt(currentTransformer)}
                    onValueChange={(itemValue, itemIndex) => changeTransformerIndex(itemIndex)
                  }>
                  <Picker.Item label="Decepticon 1" value={0} />
                  <Picker.Item label="Decepticon 2" value={1} />
                  <Picker.Item label="Decepticon 3" value={2} />
                </Picker>

                <Text style={{ fontWeight: '700', fontSize: 20 }}>Name:</Text>
                <TextInput style={{ fontSize: 18 }} value={name.toString()} onChangeText={setName} />


                <Text style={{ fontWeight: '700', fontSize: 20 }}>Alternate Mode:</Text>
                <TextInput style={{ fontSize: 18 }} value={altMode.toString()} onChangeText={setAltMode} />

                <Text style={{ fontWeight: '700', fontSize: 20 }}>Stats:</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{ fontWeight: '400', fontSize: 18, marginTop: -3 }}>Rank:</Text>
                    <TextInput style={{ fontSize: 17, marginLeft: 65 }}
                        value={rank.toString()} onChangeText={changeRank} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{ fontWeight: '400', fontSize: 18, marginTop: -3 }}>Strength:</Text>
                    <TextInput style={{ fontSize: 17, marginLeft: 36 }}
                        value={strength.toString()} onChangeText={changeStrength} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{ fontWeight: '400', fontSize: 18, marginTop: -3 }}>Intelligence:</Text>
                    <TextInput style={{ fontSize: 17, marginLeft: 12 }}
                        value={intelligence.toString()} onChangeText={changeIntelligence} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{ fontWeight: '400', fontSize: 18, marginTop: -3 }}>Speed:</Text>
                    <TextInput style={{ fontSize: 17, marginLeft: 54 }}
                        value={speed.toString()} onChangeText={changeSpeed} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{ fontWeight: '400', fontSize: 18, marginTop: -3 }}>Endurance:</Text>
                    <TextInput style={{ fontSize: 17, marginLeft: 19 }}
                        value={endurance.toString()} onChangeText={changeEndurance} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{ fontWeight: '400', fontSize: 18, marginTop: -3 }}>Courage:</Text>
                    <TextInput style={{ fontSize: 17, marginLeft: 35 }}
                        value={courage.toString()} onChangeText={changeCourage} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{ fontWeight: '400', fontSize: 18, marginTop: -3 }}>Firepower:</Text>
                    <TextInput style={{ fontSize: 17, marginLeft: 23 }}
                        value={firepower.toString()} onChangeText={changeFirepower} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{ fontWeight: '400', fontSize: 18, marginTop: -3 }}>Skill:</Text>
                    <TextInput style={{ fontSize: 17, marginLeft: 70 }}
                        value={skill.toString()} onChangeText={changeSkill} />
                </View>

                <Text style={{ fontWeight: '700', fontSize: 20 }}>Image:</Text>
                {/** TODO: Add picker to switch the images */}

                <Button title="Update" onPress={updateDecepticonData} />
            </View>
        </>
    );
}
