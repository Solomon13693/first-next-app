import axios from "axios"
import Head from "next/head"
import ArticleList from "../components/ArticleList";

const index = ({ articles }) => {

  return (
    <div>

        <Head>
            <title> Next JS Home </title>
        </Head>
        
        <ArticleList articles={articles} />

    </div>
  )
}

export default index


export const getStaticProps = async () => {

  const responses = await axios.get('https://jsonplaceholder.typicode.com/posts')
  const articles = await responses.data

  return {
    props: {
      articles
    }
  }
}