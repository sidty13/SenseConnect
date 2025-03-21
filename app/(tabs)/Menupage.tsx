import { HoverEffect } from "@/components/ui/card-hover-effect";
import { View } from "react-native";
import Icon from 'react-native-vector-icons/Feather'; // ONLY Feather icons work here

type MenuPageProps = {
    navigation: any;
};

const MenuPage: React.FC<MenuPageProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", backgroundColor: "rgb(248, 214, 219)" }}>
      <HoverEffect items={projects} />
    </View>
  );
}

export const projects = [
  {
    icon: <Icon name="settings" size={28} color="rgb(236, 114, 133)"/> ,
    title: "Settings",
    link: "settings",
  },
  {
    icon: <Icon name="type" size={28} color="rgb(236, 114, 133)" />,
    title: "Text-> Braille",
    link: "text2braille",
  },
  {
    icon: <Icon name="mic" size={28} color="rgb(236, 114, 133)" />,
    title: "Speech-> Braille",
    link: "GoogleScreen",
  },
  {
    icon: <Icon name="message-circle" size={28} color="rgb(236, 114, 133)" />,
    title: "Live interaction",
    link: "MetaScreen",
  },
  {
    icon: <Icon name="info" size={28} color="rgb(236, 114, 133)" />,
    title: "Guide",
    link: "AmazonScreen",
  },
  {
    icon: <Icon name="book-open" size={28} color="rgb(236, 114, 133)" />,
    title: "Learning Mode",
    link: "learning",
  },
];

export default MenuPage;