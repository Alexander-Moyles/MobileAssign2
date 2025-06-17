import { Text, Image } from "react-native";

export default function Transformer({data, image}: Props) {
    return (
        <>
            <Text style={{ fontWeight: '500', fontSize: 25 }}>{data.name}</Text>
            <Image style={{height: 250, width: 200}} source={image} />
            <Text style={{ fontSize: 15 }}>Alternate mode: {data.altMode}</Text>
            <Text>---------------------------------------------------------------------------</Text>
            <Text style={{ fontSize: 15 }}>Rank: {data.rank}</Text>
            <Text style={{ fontSize: 15 }}>Strength: {data.strength}</Text>
            <Text style={{ fontSize: 15 }}>Intelligence: {data.intelligence}</Text>
            <Text style={{ fontSize: 15 }}>Speed: {data.speed}</Text>
            <Text style={{ fontSize: 15 }}>Endurance: {data.endurance}</Text>
            <Text style={{ fontSize: 15 }}>Courage: {data.courage}</Text>
            <Text style={{ fontSize: 15 }}>Firepower: {data.firepower}</Text>
            <Text style={{ fontSize: 15 }}>Skill: {data.skill}</Text>
        </>
    )
}
