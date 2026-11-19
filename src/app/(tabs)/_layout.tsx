import { Stack , Tabs} from "expo-router";
import { tabs } from "../../../constants/data";


export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{ title: tab.title, tabBarIcon: tab.icon }}
        />
      ))}
    </Tabs>
  )
}
