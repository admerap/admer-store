import mongoose from "mongoose";

const cached = (global as any).mongoose || {conn: null, promise: null};

export const ConnectToDatabase = async (
    MONGODB_URI = process.env.MONGODB_URI
) => {
    if (cached.conn) return cached.conn;
    if (!MONGODB_URI) throw new Error("MONGODB_URI is not defined");
    cached.promise = cached.Promise || mongoose.connect(MONGODB_URI)
    cached.conn = await cached.promise
    return cached.conn
}