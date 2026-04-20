import { Text, TouchableOpacity, View } from "react-native";

const numBtn = [
  {name: "DEL", color: "red", value: "DEL"},
  {name: "AC", color: "red", value: "AC"},
  {name: "9", color: "gray", value: 9},
  {name: "8", color: "gray", value: 8},
  {name: "7", color: "gray", value: 7},
  {name: "6", color: "gray", value: 6},
  {name: "5", color: "gray", value: 5},
  {name: "4", color: "gray", value: 4},
  {name: "3", color: "gray", value: 3},
  {name: "2", color: "gray", value: 2},
  {name: "1", color: "gray", value: 1},
  {name: "0", color: "gray", value: 0},
   ];

const opBtn = [
  {name: "+", color: "orange", value: "+"},
  {name: "-", color: "orange", value: "-"},
  {name: "*", color: "orange", value: "*"},
  {name: "/", color: "orange", value: "/"},
  {name: "=", color: "orange", value: "="}
];

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <TouchableOpacity className="bg-gray-200 p-4 rounded">
        <Text className="text-2xl">0</Text>
      </TouchableOpacity>
    </View>
  );
}
