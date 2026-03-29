import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function HomeScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const palette = Colors[colorScheme ?? 'light'];

  return (
    <ThemedView style={styles.root}>
      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
        <ThemedText style={styles.kicker}>shadcn/ui · radix-nova</ThemedText>
        <ThemedText type="title" style={styles.headline}>
          Cancelcraft
        </ThemedText>
        <ThemedText style={styles.body}>
          This screen uses Expo + ThemedText so it shows up on web builds where NativeWind{' '}
          <ThemedText type="defaultSemiBold">className</ThemedText> styles are not applied (Vercel export).
          Your preset is still in <ThemedText type="defaultSemiBold">components.json</ThemedText>.
        </ThemedText>

        <ThemedText type="subtitle" style={styles.sectionLabel}>
          Preset actions (styled)
        </ThemedText>
        <View style={styles.row}>
          <Pressable
            style={[styles.btn, { backgroundColor: palette.tint }]}
            onPress={() => undefined}>
            <ThemedText style={styles.btnTextOnTint}>Primary</ThemedText>
          </Pressable>
          <Pressable
            style={[styles.btn, styles.btnMuted, { borderColor: palette.icon }]}
            onPress={() => undefined}>
            <ThemedText>Secondary</ThemedText>
          </Pressable>
        </View>

        <Pressable
          style={[styles.btnWide, { borderColor: palette.tint }]}
          onPress={() => router.push('/explore')}>
          <ThemedText style={[styles.linkText, { color: palette.tint }]}>Go to Explore →</ThemedText>
        </Pressable>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scroll: {
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 32,
    gap: 16,
  },
  kicker: {
    fontSize: 11,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    opacity: 0.7,
    marginBottom: 4,
  },
  headline: {
    marginBottom: 4,
  },
  body: {
    lineHeight: 22,
    marginBottom: 8,
  },
  sectionLabel: {
    marginTop: 8,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 4,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    minHeight: 40,
    justifyContent: 'center',
  },
  btnMuted: {
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  btnTextOnTint: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  btnWide: {
    marginTop: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
  },
  linkText: {
    fontSize: 15,
    fontWeight: '600',
  },
});
