declare global {
  namespace NodeJS {
    interface ProcessEnv {
      WEBINY_READ_URL: string;
      WEBINY_ACCESS_TOKEN: string;
      YOUTUBE_CHANNEL_ID: string;
      YOUTUBE_API_KEY: string;
    }
  }
}