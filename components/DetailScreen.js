import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View, ScrollView, RefreshControl, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Paragraph, I} from 'react-native-paper';
import { useFonts, Poppins_400Regular, Poppins_700Bold, Poppins_500Medium } from '@expo-google-fonts/poppins';
import MapView, { Marker, UrlTile } from 'react-native-maps';

const { width, height } = Dimensions.get("window");

const DetailScreen = ({ text, maxLength }) => {
    const [ refreshing, setRefreshing ] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);
    
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold,
        Poppins_500Medium
    })
    
    if (!fontsLoaded) {
        return null;
    }

    const data = [
        { id: "1", title: "ปางโปรดสุภัททปริพาชก", detail: "ปางโปรดพกพรหม เป็นพระพุทธรูปอยู่ในอิริยาบถเศียรพกาหรหมซึ่งประทับบนหลังโคอุสุภราช พระหัตถ์ทั้งสองวางทาบบนพระเพลา (ตัก) บางแบบพระหัตถ์ประสานกันอยู่ระหว่างพระเพลง พระหัตถ์ขวาทับพระหัตถ์ซ้าย ทอดพระเนตรลงเบื้องต่ำ", image: require('../assets/pang1.png') },
        { id: "2", title: "ปางทรงพยากรณ์", detail: "ปางทรงพยากรณ์ เป็นพระพุทธรูปอยู่ในอิรอยาบถบรรทมตะแคงขวา ลืมพระเนตร พระเศียรหนุนพระเขนย (หมอน) พระหัตถ์ซ้ายทอดทาบไปตามพระวรกาย พระหัตถ์ขวายกขึ้นวางที่พระอุทร", image: require('../assets/pang2.png') },
        { id: "3", title: "ปางทรงพิจารณาชราธรรม", detail: "ปางทรงพิจารณาชราธรรม เป็นพระพุทธรูปอยู่ในอิริยาบถประทับ (นั่ง) ขัดสมาธิ พระหัตถ์ทั้งสองวางคว่ำอยู่บนพระชานุ (เข่า) ทั้งสองข้าง", image: require('../assets/pang3.png') },
        { id: "4", title: "ปางโปรดพกาพรหม", detail: "ปางโปรดพกาพรหม เป็นพระพุทธรูปอยู่ในอิริยาบถยืนบนเศียรพภาพซึ่งประทับบนหลังโคอุสุภราช พระหัตถ์ทั้งสองวางทาบบนพระเพลง (ตัก) บางแบบพระหัตถ์ปรพสานกันอยู่ระหว่างพระเพลง พระหัตถ์ขวาทับพระหัตถ์ซ้าย ทอดพระเนตรลงเบื้องต่ำ", image: require('../assets/pang4.png') },
    ];
    
    return (
    <ScrollView 
        contentContainerStyle={styles.container}   
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} 
    >
        <Text style={styles.title}>สถานที่ท่องเที่ยว</Text>

        <Image source={require("../assets/32392.jpg")} style={styles.image} />

        <View style={styles.card}>
            <Text style={styles.titleCard}>ประวัติความเป็นมา</Text>
            <Paragraph style={styles.text}>
                    วัดพระปฐมเจดีย์ราชวรมหาวิหาร พระอารามหลวงชั้นเอก ชนิดราชวรมหาวิหาร ซึ่งมีประวัติ
                ความเป็นมายาวนานในแผ่นดินสุวรรณภูมิ และเป็นที่ประดิษฐานพระบรมสารีริกธาตุขององค์พระโคตทพุทธเจ้า
                ลักษณะเป็นเจดีย์ใหญ่ รูประฆังคว่ำ ปากผายมหึมา โครงสร้างเป็นไม้ซุงรัดด้วยโซ่เส้นมหึมาก่ออิฐถือปูน
                ประดับด้วยกระเบื้องปูทับ มีวิหาร 4 ทิศ กำแพงแก้ว 2 ชั้น เป็นที่เคารพสักการบูชาของบรรดาพุทธศาสนิกชน
                ทั่วโลก
            </Paragraph>
            <Paragraph style={styles.text}>
                    พระปฐมเจดีย์ เดิมเรียกว่า ‘พระธมเจดีย์’ มีฐานะเป็นมหาธาตุหลวงของแผ่นดินสุวรรณภูมิ 
                พระบาทสมเด็จพระจอมเกล้าเจ้าอยู่หัว (รัชกาลที่ 4) มีพระราชวินิจฉัยว่า พระธมเจดีย์องค์นี้อาจ
                สร้างขึ้นเมื่อคราวพระสมณทูตในพระเจ้าอโศกมหาราช เดินทางมาเผยแผ่ศาสนายังสุวรรณภูมิก็
                เป็นได้ เพราะพระเจดีย์เดิมมีลักษณะทรงโอคว่ำ แบบเดียวกับพระสถูปสาญจี แต่ปรากฏว่ามียอด
                เป็นแบบปรางค์ ซึ่งพระองค์ฯ มีพระราชวินิจฉัยว่า อาจมีเจ้านายพระองค์ใดมาบูรณะไว้ก็เป็นได้ 
                ทั้งนี้จึงพระราชทานนามใหม่ว่าพระปฐมเจดีย์ ด้วยทรงเชื่อว่านี่คือเจดีย์แห่งแรกของสุวรรณภูมิ
            </Paragraph>
        </View>

        <Text style={styles.title}>พระพุทธรูป</Text>

        <View style={styles.card}>
            <Text style={styles.titleCard}>พระร่วงโรจนฤทธิ์</Text>
            <Image source={require("../assets/111.jpg")} style={styles.imageForMonk} />

            <Paragraph style={styles.text}>
                พระร่วงโรจนฤทธิ์ จะมีขนาดความสูงเมื่อวัดจากพระบางถึงพระเกศวรราว 12 ศอก 4 นิ้ว เป็นพระพุทธรูปปางห้ามญาติ ศิลปะแบบสุโขทัย ประทับยืนอยู่บนฐานโลหะทองเหลืองลายบัวคว่ำบัวหงาย วงพระพักตร์ยาว พระหนุเสี้ยม นิ้วพระหัตถ์และพระบาทไม่เสมอกัน ห้อยพระหัตถ์ซ้ายลงข้างพระวรกาย พระหัตถ์ขวาตั้งขึ้นยื่นออกไปข้างหน้าระดับพระอุระ อีกทั้งบริเวณใต้ฐานพระร่วงโรจนฤทธิ์ยังบบจุพระะราชสรีรางคารในรัชกาลที่ 6 ไว้ด้วย
            </Paragraph>
        </View>

        {/* <View style={styles.card}>
            <Text style={styles.titleCard}>
                พุทธคุณ พระร่วงโรจนฤทธิ์
            </Text>
            <Paragraph style={styles.text}>
                มหาอำนาจ โชคลาภ เมตตามหานิยม และแคล้วคลาด คงกระพันปราศจากอันตราย รวมสิ่งที่แตกให้สมบูรณ์
            </Paragraph>
            <View style={styles.containerSmallText}>
                <Text style={styles.titleToContainerSmall}>
                    คาถาพระร่วง
                </Text>
                <Paragraph style={styles.textSmallToContainerSmall}>
                    ตั้งนะโม 3 จบ{"\n\n"}อิมังสัจจะวาจังอธิษฐาน{"\n\n"}ทุติยัมปิอิมังสัจจะวาจังอธิษฐาน{"\n\n"}ตะติยัมปิอิมังสัจจะวาจังอธิษฐาน{"\n\n"}จากนั้น อธิษฐานตามปรารถนา
                </Paragraph>
            </View>
        </View> */}

        <Text style={styles.title}>ปางแต่ละองค์</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data.map((item) => (
                <View key={item.id} style={styles.cardDetailMonk}>
                    <Image source={item.image} style={styles.imageForMonk2} resizeMode="cover" />
                    <Text style={styles.titleCard}>{item.title}</Text>
                    <Paragraph>{item.detail}</Paragraph>
                </View>
            ))}
        </ScrollView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF8E1',
    },
    title: {
        fontSize: width * 0.07,
        fontWeight: "bold",
        fontFamily: "Poppins_500Medium",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * 0.05,
    },
    image: {
        width: width * 0.9,
        height: height * 0.3,
        resizeMode: 'stretch',
        borderRadius: 20,
        marginTop: 30,
        elevation: 10,
        marginVertical: height * 0.03,
    },
    imageForMonk: {
        width: width * 0.8,
        height: height * 0.3,
        elevation: 10,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 10,        
    },
    card: {
        backgroundColor: "#fff",
        padding: width * 0.05,
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        marginTop: height * 0.05,
        maxWidth: width * 0.9,
        width: width * 0.9,
    },
    titleCard: {
        fontSize: width * 0.05,
        fontWeight: "bold",
        fontFamily: "Poppins_500Medium",
        color: "#333",
    },
    text: {
        fontSize: width * 0.04,
        fontFamily: "Poppins_500Medium",
        width: width * 0.8,
        marginTop: height * 0.05,
        marginBottom: 10,
        lineHeight: 24,
        textAlign: "justify",
    },
    containerSmallText: {
        backgroundColor: '#f5dfaa',
        borderRadius: 10,
        padding: 15,
        marginTop: 20,
        maxWidth: 300,
        marginBottom: 30,
    },
    titleToContainerSmall: {
        fontSize: 16,
        marginTop: height * 0.05,
        fontFamily: "Poppins_500Medium",
    },
    textSmallToContainerSmall: {
        fontSize: 14,
        marginTop: 10,
    },
    cardDetailMonk: {
        backgroundColor: "#fff",
        padding: width * 0.05,
        marginVertical: 10,
        borderRadius: 10,
        elevation: 5,
        margin: 10,
        maxWidth: 300,
        alignItems: "center",
        marginTop: height * 0.05,
    },
    imageForMonk2: {
        width: width * 0.8,
        height: height * 0.3,
        elevation: 10,
        marginBottom: height * 0.05,
        borderRadius: 10,
        resizeMode: 'cover',        
    },
});

export default DetailScreen