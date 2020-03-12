import React from 'react';
import {Query} from "react-apollo";
import gql from "graphql-tag";

const NodesData = () => (<Query query={gql `{
      articles {
        items {
          id
          title
          author
        }
      }
    }
    `}>
  {
    ({loading, error, data}) => {
      console.log('Loading', loading)
      console.log('Error', error)
      console.log('Data', data)
      if (loading)
        return <p>Loading...</p>;
      if (error)
        return <p>Error :(</p>;
      return data.articles.items.map(({id, title, author}) => (<div key={id}>
        <p>{`${title} has Id ${id} Written By ${author}`}</p>
      </div>));
    }
  }
</Query>);
export default NodesData;
