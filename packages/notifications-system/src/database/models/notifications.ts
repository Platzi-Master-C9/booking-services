import { ObjectId } from "mongodb";

export default interface Notification {
    user: number;
    client: string;
    id?: ObjectId;
}