import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import App from './index';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <div>
      <App />
    </div>
  );
}
