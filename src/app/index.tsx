import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Profile</Text>
      </View>

      {/* Profile Content */}
      <View style={styles.content}>

        {/* Profile Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
            }}
            style={styles.profileImage}
          />
        </View>

        <View style={styles.line} />

        {/* Name */}
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>Diluka</Text>

        {/* Email */}
        <Text style={styles.label}>Email</Text>

        <View style={styles.row}>
          <Text style={styles.icon}>✉</Text>
          <Text style={styles.value}>diluka.w@nsbm.ac.lk</Text>
        </View>

        {/* Points */}
        <Text style={styles.label}>Points</Text>

        <View style={styles.row}>
          <Text style={styles.star}>★</Text>
          <Text style={styles.value}>0</Text>
        </View>

      </View>

      {/* Add Button */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  header: {
    height: 55,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },

  headerText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },

  content: {
    padding: 18,
    flex: 1,
  },

  imageContainer: {
    alignItems: "center",
    marginTop: 15,
    marginBottom: 5,
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  line: {
    height: 2,
    backgroundColor: "#222",
    marginTop: 10,
    marginBottom: 12,
  },

  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#222",
    marginTop: 12,
    marginBottom: 5,
  },

  value: {
    fontSize: 14,
    color: "#444",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },

  icon: {
    fontSize: 15,
    marginRight: 8,
    color: "#000",
  },

  star: {
    fontSize: 18,
    marginRight: 8,
    color: "#000",
  },

  addButton: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",

    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  plus: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "300",
  },
});