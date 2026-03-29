import { useRouter } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';

import { Button } from '@/components/ui/button';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="gap-8 px-6 pb-12 pt-14">
        <View className="gap-3">
          <Text className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            shadcn/ui · radix-nova
          </Text>
          <Text className="text-3xl font-semibold tracking-tight text-foreground">
            Cancelcraft
          </Text>
          <Text className="text-base leading-relaxed text-muted-foreground">
            You are on an Expo app.{' '}
            <Text className="font-medium text-foreground">
              npx shadcn init --template next
            </Text>{' '}
            only aligns the component registry with the Next template — it does not turn this into a Next.js site or swap the Expo starter screen by itself.
          </Text>
        </View>

        <View className="gap-3">
          <Text className="text-sm font-medium text-foreground">Preset buttons</Text>
          <View className="flex-row flex-wrap gap-2">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </View>
        </View>

        <View className="gap-3">
          <Button variant="outline" onPress={() => router.push('/explore')}>
            Go to Explore
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
