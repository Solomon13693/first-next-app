import axios from 'axios'
import Link from 'next/link'
import React from 'react'

function index({ article }) {

  return (

    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/"> Go Back </Link>
    </>

  )
}

export async function getStaticProps(context) {

  const responses = await axios.get(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
  const article = await responses.data

  return {
    props: {
      article
    }, // will be passed to the page component as props
  }
}

export async function getStaticPaths() {

  const responses = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
  const articles = await responses.data

  const paths = articles.map((article) => ({
    params: { id: article.id.toString() },
  }))

  // { fallback: false } means other routes should 404
  return { paths, fallback: false }


}


export default index