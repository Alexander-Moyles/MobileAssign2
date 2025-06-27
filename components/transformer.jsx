import { Text, Image, StyleSheet } from "react-native";

export default function Transformer({data, image}: Props) {
    return (
        <>
            <Text style={styles.bigText}>{data.name}</Text>
            <Image style={styles.image} source={image} />
            <Text style={styles.text}>Alternate mode: {data.altMode}</Text>
            <Text style={styles.text}>---------------------------------------------------------------------------</Text>
            <Text style={styles.text}>Rank: {data.rank}</Text>
            <Text style={styles.text}>Strength: {data.strength}</Text>
            <Text style={styles.text}>Intelligence: {data.intelligence}</Text>
            <Text style={styles.text}>Speed: {data.speed}</Text>
            <Text style={styles.text}>Endurance: {data.endurance}</Text>
            <Text style={styles.text}>Courage: {data.courage}</Text>
            <Text style={styles.text}>Firepower: {data.firepower}</Text>
            <Text style={styles.text}>Skill: {data.skill}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    text: {
        paddingTop: 5,
        fontSize: 15,
        color: "#fff"
    },
    bigText: {
        fontWeight: '500',
        fontSize: 25,
        color: "#fff"
    },
    image: {
        height: 250,
        width: 200
    }
});
