import { Text, View } from "react-native"; 
import { Link } from 'expo-router'
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Text>I love React Native</Text>
      <Link href='/onboarding' className='mt-4 rounded bg-black text-white p-4'>Go to Onboarding</Link>
      <Link href='/(auth)/sign-in' className='mt-4 rounded bg-black text-white p-4'>Go to SignIn</Link>
      <Link href='/(auth)/sign-up' className='mt-4 rounded bg-black text-white p-4'>Go to SignUp</Link>


      <Link href='/subscriptions' className='mt-4 rounded bg-black text-white p-4'>Go to Subscriptions</Link>

      <Link href={{
            pathname: '/subscriptions/[id]',
            params: { id: '123' }
        }} className='mt-4 rounded bg-black text-white p-4'>Go to SubscriptionDetails</Link>
    </View>
  );
}