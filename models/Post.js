import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    }
})

export default mongoose.models.Post || mongoose.model('Post', postSchema);
