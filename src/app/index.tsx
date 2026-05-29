import {
  TextInput,
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.logoWrap}>
          <View style={styles.logoDot} />
          <View style={styles.logoRow}>
            <View style={styles.logoDot} />
            <View style={styles.logoDot} />
          </View>
          <View style={styles.logoDot} />
        </View>

        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subtitle}>
          Let's experience the joy of telecare AI.
        </Text>

        <Text style={styles.label}>Email Address</Text>
        <View style={[styles.inputWrap, styles.inputActive]}>
          <View style={styles.iconBubble}>
            <Text style={styles.iconText}>@</Text>
          </View>
          <TextInput
            placeholder="elementary221b@gmail.com"
            placeholderTextColor="#96A09B"
            style={styles.input}
          />
        </View>

        <Text style={styles.label}>Password</Text>
        <View style={styles.inputWrap}>
          <View style={styles.iconBubble}>
            <Text style={styles.iconText}>*</Text>
          </View>
          <TextInput
            placeholder="Enter your password..."
            placeholderTextColor="#96A09B"
            style={styles.input}
            secureTextEntry
          />
          <Text style={styles.eyeIcon}>o</Text>
        </View>

        <Pressable style={styles.primaryButton}>
          <Text style={styles.primaryText}>Sign In</Text>
          <Text style={styles.primaryArrow}>></Text>
        </Pressable>

        <View style={styles.socialRow}>
          <View style={styles.socialButton}>
            <Text style={styles.socialText}>f</Text>
          </View>
          <View style={styles.socialButton}>
            <Text style={styles.socialText}>G</Text>
          </View>
          <View style={styles.socialButton}>
            <Text style={styles.socialText}>O</Text>
          </View>
        </View>

        <Text style={styles.footerText}>
          Don't have an account? <Text style={styles.link}>Sign Up.</Text>
        </Text>
        <Text style={styles.link}>Forgot your password?</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F3",
  },
  content: {
    marginTop: 60,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 40,
    alignItems: "center",
  },
  logoWrap: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 18,
  },
  logoRow: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 6,
  },
  logoDot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#7BC31B",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#3A3F3D",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#8B948F",
    marginBottom: 22,
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 14,
    color: "#4A524F",
    marginBottom: 8,
    marginTop: 10,
    fontWeight: "600",
  },
  inputWrap: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#E5EAE6",
    marginBottom: 8,
  },
  inputActive: {
    borderColor: "#7BC31B",
    shadowColor: "#7BC31B",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  iconBubble: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#F1F3F0",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  iconText: {
    fontSize: 14,
    color: "#5A6360",
    fontWeight: "700",
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#3A3F3D",
  },
  eyeIcon: {
    fontSize: 12,
    color: "#A1AAA6",
  },
  primaryButton: {
    width: "100%",
    backgroundColor: "#7BC31B",
    borderRadius: 24,
    paddingVertical: 14,
    marginTop: 14,
    marginBottom: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  primaryText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
  },
  primaryArrow: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 16,
  },
  socialRow: {
    flexDirection: "row",
    gap: 14,
    marginBottom: 18,
  },
  socialButton: {
    width: 56,
    height: 56,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#D8DDD9",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7F9F6",
  },
  socialText: {
    fontSize: 18,
    color: "#4D5653",
    fontWeight: "700",
  },
  footerText: {
    fontSize: 13,
    color: "#8B948F",
    marginBottom: 6,
  },
  link: {
    color: "#7BC31B",
    fontWeight: "700",
  },
});
