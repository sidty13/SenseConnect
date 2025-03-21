import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useState } from "react";
import { MotiView, AnimatePresence } from "moti";
import { useNavigation } from "@react-navigation/native";

type Item = {
  icon: React.ReactNode;
  title: string;
  link: string;
};

export const HoverEffect = ({
  items,
  className,
}: {
  items: Item[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigation = useNavigation();

  return (
    <FlatList
      data={items}
      numColumns={2}
      keyExtractor={(item) => item.link}
      contentContainerStyle={{ paddingVertical: 20 }}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.link as never)}
          onPressIn={() => setHoveredIndex(index)}
          onPressOut={() => setHoveredIndex(null)}
          style={{ flex: 1, padding: 8 }}
          activeOpacity={0.5}
        >
          <View style={{ position: "relative" }}>
            <AnimatePresence>
              {hoveredIndex === index && (
                <MotiView
                  from={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 150 }}
                  className="absolute inset-0 bg-[rgba(30,30,30,0.7)] rounded-3xl"
                />
              )}
            </AnimatePresence>
            <Card>
              {/* Keep icon directly as passed from parent */}
              {item.icon}
              <CardTitle>{item.title}</CardTitle>
            </Card>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <View
      style={{
        borderRadius: 24,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "rgb(240, 102, 123)",
        height: 100,
        padding: 16,
        alignItems: "center", // 👈 centers horizontally
        justifyContent: "center"
      }}
    >
      {children}
    </View>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Text
      style={{
        color: "rgb(161, 98, 107)",
        fontWeight: "bold",
        fontSize: 10,
        marginTop: 10,
      }}
    >
      {children}
    </Text>
  );
};
