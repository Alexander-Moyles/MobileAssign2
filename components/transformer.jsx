import { Text, Image } from "react-native";

export default function Transformer({decepticonData, image}: Props) {
    return (
        <>
            <Text style={{ fontWeight: '500', fontSize: 25 }}>{decepticonData.name}</Text>
            <Image style={{height: 250, width: 200}} source={image} />
            <Text style={{ fontSize: 15 }}>Alternate mode: {decepticonData.altMode}</Text>
            <Text>---------------------------------------------------------------------------</Text>
            <Text style={{ fontSize: 15 }}>Rank: {decepticonData.rank}</Text>
            <Text style={{ fontSize: 15 }}>Strength: {decepticonData.strength}</Text>
            <Text style={{ fontSize: 15 }}>Intelligence: {decepticonData.intelligence}</Text>
            <Text style={{ fontSize: 15 }}>Speed: {decepticonData.speed}</Text>
            <Text style={{ fontSize: 15 }}>Endurance: {decepticonData.endurance}</Text>
            <Text style={{ fontSize: 15 }}>Courage: {decepticonData.courage}</Text>
            <Text style={{ fontSize: 15 }}>Firepower: {decepticonData.firepower}</Text>
            <Text style={{ fontSize: 15 }}>Skill: {decepticonData.skill}</Text>
        </>
    )
}
