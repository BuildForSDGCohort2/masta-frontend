import React from 'react'
import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'
import New from './partials/New'
import Error from './Error'

const query = gql`
{
    getNews{
        articles{
            source{
                name
            }
            title
            description
            url
            urlToImage
        }
    }
}
`

const News = () => {
  const { data, loading } = useQuery(query)

  if (loading) return Error

  return (
    <>
      {data.getNews.articles.map(heading => (
        <New news={heading}> </New>
      ))}
    </>
  )
}

export default News