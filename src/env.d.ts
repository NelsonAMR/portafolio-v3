/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_EMAIL_KEY: string;
  readonly PUBLIC_EMAIL_SERVICE: string;
  readonly PUBLIC_EMAIL_TEMPLATE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
