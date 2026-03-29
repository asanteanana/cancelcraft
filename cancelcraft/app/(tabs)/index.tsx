import { ScrollView, StyleSheet, TextInput } from 'react-native';

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field';

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled">
      <FieldSet style={styles.fieldSet}>
        <FieldLegend>Account</FieldLegend>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <FieldContent>
              <TextInput
                id="email"
                nativeID="email"
                placeholder="you@example.com"
                placeholderTextColor="#737373"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                style={styles.input}
              />
              <FieldDescription>We will only use this for sign-in and receipts.</FieldDescription>
            </FieldContent>
          </Field>
        </FieldGroup>
      </FieldSet>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 32,
  },
  fieldSet: {
    borderWidth: 0,
    padding: 0,
    margin: 0,
  },
  input: {
    minHeight: 40,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#d4d4d4',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
  },
});
