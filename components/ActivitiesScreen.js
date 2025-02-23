import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View, ScrollView, RefreshControl, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold, Poppins_500Medium } from '@expo-google-fonts/poppins';

const { width, height } = Dimensions.get("window");

const buddhas = [
    {
        id: 1,
        name: "พระร่วงโรจนฤทธิ์",
        description: "มหาอำนาจ โชคลาภ เมตตามหานิยม และแคล้วคลาด คงกระพันปราศจากอันตราย รวมสิ่งที่แตกให้สมบูรณ์\n\nบทสวดบูชาพระร่วงโรจนฤทธิ์ : ตั้งนะโม 3 จบ อะระหัง สัมมาสัมพุทโธ นะโมพุทธายะ",
        chanting: "",
        image: require('../assets/111.jpg'),
    },
    {
        id: 2,
        name: "พระพุทธรูปปางถวายเนตร",
        description: "บทสวดบูชาพระประจำวันเกิด แบบย่อ : อะ วิช สุ นุส สา นุต ต",
        chanting: "สวดตามกำลัง : 6 จบ",
        image: require('../assets/images_0.jpg'),
    },
    {
        id: 3,
        name: "พระพุทธรูปปางห้ามญาติ",
        description: "บทสวดบูชาพระประจำวันเกิด แบบย่อ : อิ ระ ชา คะ ตะ ระ สา",
        chanting: "สวดตามกำลัง : 15 จบ",
        image: require('../assets/images_1.jpg'),
    },
    {
        id: 4,
        name: "พระพุทธรูปปางไสยาสน์",
        description: "บทสวดบูชาพระประจำวันเกิด แบบย่อ : ติ หัง จะ โต โร ถิ นัง",
        chanting: "สวดตามกำลัง : 8 จบ",
        image: require('../assets/images_2.jpg'),
    },
    {
        id: 5,
        name: "พระพุทธรูปปางอุ้มบาตร",
        description: "บทสวดบูชาพระประจำวันเกิด แบบย่อ : ปิ สัม ระ โล ปุ สัต พุท",
        chanting: "สวดตามกำลัง : 17 จบ",
        image: require('../assets/images_3.jpg'),
    },
    {
        id: 6,
        name: "พระพุทธรูปปางป่าเลไลยก์",
        description: "บทสวดบูชาพระประจำวันเกิด แบบย่อ : คะ พุท ปัน ทู ธัม วะ คะ",
        chanting: "สวดตามกำลัง : 12 จบ",
        image: require('../assets/images_4.jpg'),
    },
    {
        id: 7,
        name: "พระพุทธรูปปางสมาธิ",
        description: "บทสวดบูชาพระประจำวันเกิด แบบย่อ : ภะ สัม สัม วิ สะ เท กะ",
        chanting: "สวดตามกำลัง : 19 จบ",
        image: require('../assets/images_5.jpg'),
    },
    {
        id: 8,
        name: "พระพุทธรูปปางรำพึง",
        description: "บทสวดบูชาพระประจำวันเกิด แบบย่อ : วา โธ โน อะ มะ มะ วา",
        chanting: "สวดตามกำลัง : 21 จบ",
        image: require('../assets/images_6.jpg'),
    },
    {
        id: 9,
        name: "พระพุทธรูปปางนาคปรก",
        description: "บทสวดบูชาพระประจำวันเกิด แบบย่อ : โส มา ณะ กะ ริ ถา โธ",
        chanting: "สวดตามกำลัง : 10 จบ",
        image: require('../assets/images_7.jpg'),
    },
    {
        id: 10,
        name: "พระพุทธรูปศิลาขาว พระพุทธนรเชษฐ์",
        description: "เศวตอัศมมัยมนี ศรี ทวารวดีปูชนียบพิตร ณ ลานชั้นลด ทิศใต้ขององค์พระปฐม เจดีย์ พระศิลาขาว มีชื่ออย่างเป็นทางการว่า พระพุทธนร เชษฐ์ เศวตอัศมมัยมุนี ศรีทวารวดีปูชนียบพิตร มีการค้น พบที่ วัดทุ่งพระเมรุ ต. ห้วยจรเข้ อ. เมืองนครปฐม จ. นครปฐม สันนิษฐานว่ามีอายุราวสมัยทวารวดี หรือราว 1,000 ปีก่อน",
        chanting: "", // ไม่มีการสวดตามกำลัง
        image: require('../assets/images_8.jpg'),
    },
    {
        id: 11,
        name: "พระพุทธรูปปูนปั้นปางไสยาสน",
        description: "ผู้คนนิยมมากราบไหว้ .. เนื่องจากมีความเชื่อว่า หากได้ไหว้ พระนอน จะทำให้ชีวิตสบายและเป็นสิริมงคลแก่ชีวิต .. ภายในวัดพระปฐมเจดีย์ ด้านทิศตะวันตก มีวิหารพระนอน มี พระพุทธรูปปูนปั้นปางไสยาสน์องค์ใหญ่ ยาว 17 เมตรเป็น ประธานในวิหาร ได้อัญเชิญมาในสมัยพระบาทสมเด็จ พระจอมเกล้าเจ้าอยู่หัวที่มีการปฏิสังขรณ์มหาเจดีย์องค์นี้ คน นครปฐมเชื่อว่ามีความศักดิ์สิทธิ์มาก จนมีคนพูดกันว่า อยาก สบายให้ไหว้พระนอน ถือเป็นอีกจุดกราบไหว้ภายในวัดที่ไม่ ควรพลาด",
        chanting: "", // ไม่มีการสวดตามกำลัง
        image: require('../assets/images_9.jpg'),
    },
    {
        id: 12,
        name: "ศาลเจ้าพ่อปราสาททอง",
        description: "ด้านรอบระเบียงลอดช่อง บันไดอุโมงค์ลงมามีศาลเจ้าพ่อปราสาททองเป็นเก๋งจีน เล็ก ๆ มีดอกบัวและธงแบบจี",
        chanting: "", // ไม่มีการสวดตามกำลัง
        image: require('../assets/images_10.jpg'),
    },
];

const ActivitiesScreen = () => {
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
  
    return (
        <ScrollView
            contentContainerStyle={styles.container}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
            <View style={styles.header}>
                <Text style={styles.title}>พระประจำวันเกิดและพระที่ควรต้องมู</Text>
            </View>
            {/* <ScrollView style={styles.buddhasList}>
                {buddhas.map((buddha) => (
                    <View key={buddha.id} style={styles.card}>
                        <Image
                            source={buddha.image}
                            style={styles.buddhaImage}
                            resizeMode="cover"
                        />
                        <View style={styles.buddhaDetails}>
                            <Text style={styles.buddhaName}>{buddha.name}</Text>
                            <Text style={styles.buddhaDescription}>{buddha.description}</Text>
                            {buddha.chanting && (
                            <Text style={styles.chantingText}>{buddha.chanting}</Text>
                            )}
                        </View>
                    </View>
                ))}
            </ScrollView> */}

            {buddhas.map((buddha) => (
                <View key={buddha.id} style={styles.card}>
                    <Image
                        source={buddha.image}
                        style={styles.buddhaImage}
                        resizeMode="cover"
                    />
                    <View style={styles.buddhaDetails}>
                        <Text style={styles.buddhaName}>{buddha.name}</Text>
                        <Text style={styles.buddhaDescription}>{buddha.description}</Text>
                        {buddha.chanting && (
                        <Text style={styles.chantingText}>{buddha.chanting}</Text>
                        )}
                    </View>
                </View>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF8E1',
    },
    title: {
        width: 300,
        fontSize: width * 0.07,
        fontWeight: "bold",
        fontFamily: "Poppins_500Medium",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * 0.05,
    },
    image: {
        // width: 300,
        // height: 200,
        resizeMode: 'stretch',
        borderRadius: 20,
        marginTop: 30,
        elevation: 10,
        width: '100%',
        height: 160,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    card: {
        // backgroundColor: "#fff",
        // padding: 15,
        // marginVertical: 10,
        // borderRadius: 10,
        // shadowColor: "#000",
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.2,
        // shadowRadius: 4,
        // elevation: 5,
        // marginTop: 30,
        // maxWidth: 400,

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
        maxWidth: 400,
        width: width * 0.9,
    },
    titleCard: {
        fontSize: 18,
        fontWeight: "bold",
        fontFamily: "Poppins_500Medium",
        color: "#333",
    },
    text: {
        fontSize: 16,
        fontFamily: "Poppins_500Medium",
        width: 300,
        marginTop: 20,
        marginBottom: 10,
        lineHeight: 24,
        textAlign: "justify",
    },
    cardContainer: {
        backgroundColor: '#FFF8E1', 
        borderRadius: 24,
        padding: 16,
        width: '90%',
        maxWidth: 450,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
      marginTop: height * 0.05,
    },
    backIcon: {
      fontSize: 18,
      fontWeight: '600',
      color: '#333',
    },
    // title: {
    //   fontSize: 16,
    //   fontWeight: '600',
    //   marginLeft: 8,
    //   color: '#333',
    // },
    buddhasList: {
      marginTop: 16,
    },
    buddhaCard: {
      backgroundColor: '#FFFFFF',
      borderRadius: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 2,
      marginBottom: 16,
      overflow: 'hidden',
    },
    buddhaImage: {
      width: width * 0.8,
      height: height * 0.3,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buddhaDetails: {
      padding: 16,
    },
    buddhaName: {
      fontSize: 18,
      fontWeight: '600',
      marginTop: 8,
      color: '#333',
    },
    buddhaDescription: {
      color: '#6B7280',
      fontSize: 14,
      marginTop: 4,
    },
    chantingText: {
      color: '#F97316',
      fontSize: 14,
      fontWeight: '600',
      marginTop: 4,
    },
})

export default ActivitiesScreen