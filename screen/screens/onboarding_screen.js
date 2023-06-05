import React from "react";
import {
  Image,
  Pressable,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  Dimensions,
} from "react-native";

import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";

const SizeWidth = Dimensions.get("window").width;
const SizeHeight = Dimensions.get("window").height;
// const navigation = useNavigation();

// const Done = ({  ...props }) => (
//   <Pressable
//     onPress={() => {
//       navigation.navigate("Login");
//     }}
//     style={{ padding: 10 }}
//     {...props}
//   >
//     <Text style={{ color: "white" }}>Done</Text>

//   </Pressable>
// );

// const Skip = ({ skipLabel, ...props}) => (
//   <Pressable style={{ padding: 10 }} {...props}>
//     <Text style={{ color: "white" }}>Skip</Text>
//     {/* {skipLabel} */}
//   </Pressable>
// );

// const Next = ({ ...prop }) => (
//   <Pressable style={{ padding: 10 }} {...prop}>
//     <Text style={{ color: "white" }}>Next</Text>
//   </Pressable>
// );

// const OnboardingScreen = () => (
//   <ImageBackground
//     source={require("../assets/images/onboarding3.png")}
//     style={{ height: SizeHeight, width: SizeWidth }}
//   >
//     <Onboarding
//       NextButtonComponent={Next}
//       SkipButtonComponent={Skip}
//       DoneButtonComponent={Done}
//       pages={[
//         {
//           backgroundColor: "transparent",
//           image: <Image source={require("../assets/images/academy1.png")} />,
//           title: "Selamat Datang di Bisa AI Academy",
//           subtitle:
//             "Pembelajaran mengacu kepada Standar Kompetensi Kerja Nasional Indonesia (SKKNI) dilengkapi dengan silabus lengkap, quiz setiap silabus dan tugas setiap pertemuan",
//           titleStyles: { color: "white" }, // overwrite default color
//         },
//         {
//           backgroundColor: "transparent",
//           image: <Image source={require("../assets/images/academy2.png")} />,
//           title: "Pembelajaran Berbasis SKKNI",
//           subtitle:
//             "Pembelajaran mengacu kepada Standar Kompetensi Kerja Nasional Indonesia (SKKNI) dilengkapi dengan silabus lengkap, quiz setiap silabus dan tugas setiap pertemuan",
//           titleStyles: { color: "white" },
//         },
//         {
//           backgroundColor: "transparent",
//           image: <Image source={require("../assets/images/2022.png")} />,
//           title: "Portfolio Industri",
//           subtitle:
//             "Setiap pembelajaran akan terdapat project industri dimana pesera akan mendapatkan portfolio industri untuk setiap pembelajaran.",
//           titleStyles: { color: "white" },
//         },
//         {
//           backgroundColor: "transparent",
//           image: <Image source={require("../assets/images/2023.png")} />,
//           title: "Sertifikat dari Lembaga Pelatihan Kerja Bisa AI Academy",
//           subtitle:
//             "Bisa AI Academy terdaftar sebagai Lembaga Pelatihan Kerja dimana setiap peserta akan mendapatkansertifikat dari LPK setelah menyelesaikan pelatihan",
//           titleStyles: { color: "white" },
//         },
//         {
//           backgroundColor: "transparent",
//           image: <Image source={require("../assets/images/2024.png")} />,
//           title: "Pembelajaran Bahasa Indonesia",
//           subtitle:
//             "Setiap pembelajaran dalam bahasa Indonesia terdiri atas silabus dan video pembelajaran.",
//           titleStyles: { color: "white" },
//         },
//         {
//           backgroundColor: "transparent",
//           image: <Image source={require("../assets/images/2025.png")} />,
//           title: "Pengajar bersertifikat Indonesia",
//           subtitle:
//             "Pengajar yang mengajar baik pembelajaran asynchronous maupun synchronous merupakan pengajar yang telah memiliki sertifikasi internasional",
//           titleStyles: { color: "white" },
//         },
//       ]}
//     ></Onboarding>
// //   </ImageBackground>
// );

// export default OnboardingScreen;
Next = ({ ...props }) => (
  <TouchableOpacity {...props}>
    <Text style={{ fontSize: 16, marginHorizontal: 20, color: "white" }}>
      Next
    </Text>
  </TouchableOpacity>
);
Skip = ({ ...props }) => (
  <TouchableOpacity {...props}>
    <Text style={{ fontSize: 16, marginHorizontal: 20, color: "white" }}>
      Skip
    </Text>
  </TouchableOpacity>
);
Done = ({ ...props }) => (
  <TouchableOpacity {...props}>
    <Text style={{ fontSize: 16, marginHorizontal: 20, color: "white" }}>
      Done
    </Text>
  </TouchableOpacity>
);
const OnboardingScreen = ({ navigation }) => (
  <ImageBackground
    source={require("../assets/images/onboarding3.png")}
    style={{ height: SizeHeight, width: SizeWidth }}
  >
    <Onboarding
      NextButtonComponent={Next}
      SkipButtonComponent={Skip}
      DoneButtonComponent={Done}
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.replace("Login")}
      pages={[
        {
          backgroundColor: "transparent",
          image: (
            <Image
              style={{
                width: 280,
                height: 300,
                // backgroundColor: "red"
              }}
              source={require("../assets/images/onboarding_1.png")}
            />
          ),
          title: "Selamat Datang di Bisa AI Academy",
          subtitle:
            "Pembelajaran mengacu kepada Standar Kompetensi Kerja Nasional Indonesia (SKKNI) dilengkapi dengan silabus lengkap, quiz setiap silabus dan tugas setiap pertemuan",
          titleStyles: { color: "white" }, // overwrite default color
        },
        {
          backgroundColor: "transparent",
          image: (
            <Image
              style={{
                width: 300,
                height: 200,
                // backgroundColor: "red"
              }}
              source={require("../assets/images/onboarding_2.png")}
            />
          ),
          title: "Pembelajaran Berbasis SKKNI",
          subtitle:
            "Pembelajaran mengacu kepada Standar Kompetensi Kerja Nasional Indonesia (SKKNI) dilengkapi dengan silabus lengkap, quiz setiap silabus dan tugas setiap pertemuan",
          titleStyles: { color: "white" },
        },
        {
          backgroundColor: "transparent",
          image: (
            <Image
              style={{
                width: 280,
                height: 330,
                // backgroundColor: "red"
              }}
              source={require("../assets/images/onboarding_3..png")}
            />
          ),
          title: "Portfolio Industri",
          subtitle:
            "Setiap pembelajaran akan terdapat project industri dimana pesera akan mendapatkan portfolio industri untuk setiap pembelajaran.",
          titleStyles: { color: "white" },
        },
        {
          backgroundColor: "transparent",
          image: (
            <Image
              style={{
                width: 280,
                height: 330,
                // backgroundColor: "red"
              }}
              source={require("../assets/images/onboarding_4.png")}
            />
          ),
          title: "Sertifikat dari Lembaga Pelatihan Kerja Bisa AI Academy",
          subtitle:
            "Bisa AI Academy terdaftar sebagai Lembaga Pelatihan Kerja dimana setiap peserta akan mendapatkansertifikat dari LPK setelah menyelesaikan pelatihan",
          titleStyles: { color: "white" },
        },
        {
          backgroundColor: "transparent",
          image: (
            <Image
              style={{
                width: 280,
                height: 330,
                // backgroundColor: "red"
              }}
              source={require("../assets/images/onboarding_5..png")}
            />
          ),
          title: "Pembelajaran Bahasa Indonesia",
          subtitle:
            "Setiap pembelajaran dalam bahasa Indonesia terdiri atas silabus dan video pembelajaran.",
          titleStyles: { color: "white" },
        },
        {
          backgroundColor: "transparent",
          image: (
            <Image
              style={{
                width: 280,
                height: 330,
                // backgroundColor: "red"
              }}
              source={require("../assets/images/onboarding_6..png")}
            />
          ),
          title: "Pengajar bersertifikat Indonesia",
          subtitle:
            "Pengajar yang mengajar baik pembelajaran asynchronous maupun synchronous merupakan pengajar yang telah memiliki sertifikasi internasional",
          titleStyles: { color: "white" },
        },
      ]}
    ></Onboarding>
  </ImageBackground>
);
export default OnboardingScreen;
