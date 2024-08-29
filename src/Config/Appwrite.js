import { Account, Client, Databases } from "appwrite";

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("66c9a17e00046e0d9e62")

export const account = new Account(client);
export const databases = new Databases(client, "66cf5c5200055b526e00");

