export enum Key {
  ACCESS_TOKEN = "access-token",
  REFRESH_TOKEN = "refresh-token",
}

export const Regex = {
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
  IMAGE_EXTENSION: /\/(jpg|jpeg|png)$/,
}
