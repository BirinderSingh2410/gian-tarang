import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'gian-tarang',
  webDir: 'public',
  server: {
    url: 'http://192.168.1.13:3000',
    cleartext: true
  }
};

export default config;
