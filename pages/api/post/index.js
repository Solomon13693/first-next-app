import Post from '../../../models/Post'
import dbConnect from '../../../utils/dbConnect'

export default async function handler(req, res, next) {

    const { method } = req

    // DB Connection
    await dbConnect()

    // GET Request
    if (method === 'GET') {

        try {

            const post = await Post.find()
            res.status(200).json(post)

        } catch (error) {
            res.status(500).json(error)
        }

    }

    // POST Request
    if (method === 'POST') {

        try {

            const post = await Post.create(req.body)
            res.status(200).json(post)

        } catch (error) {
            res.status(200).json(error)
        }

    }

}