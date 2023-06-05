import * as React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";

export default function Description() {
  return (
    <ScrollView>
      <View style={{ padding: 15, gap: 15 }}>
        <View style={styles.txt1}>
          <Text style={styles.txt2}>Deskirpsi</Text>
          <Text
          // style={styles.txtInput}
          >
            Pelatihan + International Certification Internet of Things
            Specialist for Business Professionals Assosiate (IOTBIZ) 4 hari
            dengan rincian sebagai berikut, 1. 2 Hari Pelatihan Langsung Dengan
            Instruktur Secara Online/Daring 2. 1 Hari Latihan Ujian Sertifikasi
            (Try Out) 3. 1 Hari Ujian International Certification Internet of
            Things Specialist for Business Professionals Assosiate (IOTBIZ)
            Fasilitas Yang Didapatkan: 1. Pelatihan Intensive International
            Certification Internet of Things Specialist for Business
            Professionals Assosiate (IOTBIZ) tatap muka langsung dengan
            instruktur secara Online/Daring 2. Modul pembelajaran lengkap +
            video rekaman hasil belajar yang dapat diakses selamanya 3.
            Sertifikat pelatihan Bisa AI Academy 4. International Certification
            Internet of Things Specialist for Business Professionals Assosiate
            (IOTBIZ) (Jika Dinyatakan Kompeten) 5. Grup Diskusi WhatsApp peserta
            dan pengajar6. Bebas konsultasi kapanpun dengan instruktur selama
            pelatihan 7. Akses Premium Course Bisa AI Academy Jadwal
            Pelaksanaan: Pelatihan:13-14 Maret 2022 Try Out: 15 Maret 2022 Ujian
            Sertifikasi: 16 Maret 2022 Atau Tentukan Jadwal Pelatihan dan Ujian
            Sesukamu Kapan Saja Dengan Tambahan Biaya Rp. 200.000, Informasi
            Pendaftaran: 08975695649 (Rizky)
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  txt1: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: "white",
  },
  txt2: {
    fontWeight: "500",
    fontSize: 20,
  },
});
// export default Description;
