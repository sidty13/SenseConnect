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
      contentContainerStyle={{ paddingVertical: 150 }}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.link as never)}
          onPressIn={() => setHoveredIndex(index)}
          onPressOut={() => setHoveredIndex(null)}
          style={{ flex: 1, padding: 8 }}
          activeOpacity={0.7}
        >
          <View style={{ position: "relative" }}>
            <AnimatePresence>
              {hoveredIndex === index && (
                <MotiView
                  from={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 150 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(30,30,30,0.1)",
                    borderRadius: 20,
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
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
        borderRadius: 20,
        backgroundColor: "#ffffff",
        paddingVertical: 24,
        paddingHorizontal: 16,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 4,
        height: 150,
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
        color: "rgb(161, 70, 90)",
        fontWeight: "600",
        fontSize: 14,
        marginTop: 10,
        textAlign: "center",
      }}
    >
      {children}
    </Text>
  );
};