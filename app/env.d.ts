declare global {
  interface Window {
    env: any;
  }
}

interface ImportMetaEnv {
    readonly BASE_URL: string;
}

interface ImportMeta {
    readonly env:ImportMetaEnv
}
