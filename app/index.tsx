import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

const numBtn = [
  {name: "AC", color: "orange-400", value: "AC", id: '0'},
  {name: "DEL", color: "orange-400", value: "DEL", id: '1'},
  {name: "%", color: "orange-400", value: "%", id: '2'},
  {name: "7", color: "gray-200", value: "7", id: '3'},
  {name: "8", color: "gray-200", value: "8", id: '4'},
  {name: "9", color: "gray-200", value: "9", id: '5'},
  {name: "4", color: "gray-200", value: "4", id: '6'},
  {name: "5", color: "gray-200", value: "5", id: '7'},
  {name: "6", color: "gray-200", value: "6", id: '8'},
  {name: "1", color: "gray-200", value: "1", id: '9'},
  {name: "2", color: "gray-200", value: "2", id: '10'},
  {name: "3", color: "gray-200", value: "3", id: '11'},
  {name: "0", color: "gray-200", value: "0", id: '12'},
  {name: ".", color: "gray-200", value: ".", id: '13'},
   ];

const opBtn = [
  {name: "+", color: "orange-400", value: "+"},
  {name: "-", color: "orange-400", value: "-"},
  {name: "×", color: "orange-400", value: "*"},
  {name: "÷", color: "orange-400", value: "/"},
  {name: "=", color: "orange-400", value: "="}
];



const performCal = (num1: number, num2: number, operator: string) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return 0;
  }
};

export default function Index() {

const [displayCal, setDisplayCal] = useState("");

const [result, setResult] = useState(0);

const [num1, setNum1] = useState("");
const [num2, setNum2] = useState("");
const [operator, setOperator] = useState("");

const getOperation = (op : string) => {
  if (num1 !== null) setOperator(op);
  if(op === null){
    setNum1(op + num1);
  } else {
    setNum2(op + num2);
  }
}

const number = (num: string) => {
  if (num1 === null) {
    setNum1(num);
  } else {
    setNum1(num1 + num);
  }

  if (operator !== null) {
    if (num2 === null) {
      setNum2(num);
    } else {
      setNum2(num2 + num);
    }
  }

  setDisplayCal(num1 + (operator || "") + (num2 || ""));

}

  return (
    <View>
      <View className="my-5 mx-5 bg-gray-300 p-4 h-32 rounded items-end ">
        <Text className="text-gray-500 text-lg">0</Text>
        <Text className="text-4xl font-bold mt-10">{ displayCal }</Text>
      </View>

     <View className="flex-row bg-white p-4 justify-center">
      <FlatList data={numBtn}  numColumns={3}  keyExtractor={(item) => item.id}
        columnWrapperStyle={{ gap: 10, marginBottom: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => number(item.value)} activeOpacity={0.8} className={`flex-1 bg-${item.color} p-6 rounded items-center justify-center`}>
            <Text className="text-2xl font-bold">{item.value}</Text>
          </TouchableOpacity>
        )}
      />

      <View>
        {opBtn.map((item) => (
          <TouchableOpacity onPress={item.value === "=" ? () => performCal : () => getOperation(item.value)} activeOpacity={0.8} className="flex-1 bg-orange-400 p-6 rounded items-center justify-center ml-3 mb-3 w-40" key={item.value}>
            <Text className="text-2xl font-bold">{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>

    </View>
  );
}