import React from "react";
import { Layout } from "../components";
import { useQuery, gql } from "@apollo/client";
import TrackCard from "../containers/track-card";
import QueryResult from "../components/query-result";

export const MOVIES = gql`
  query Query {
    movies {
      rnum
      movieNm
      movieCd
      openDt
      audiAcc
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(MOVIES);

  return (
    <Layout grid>
      <QueryResult loading={loading} error={error} data={data}>
        {data?.movies?.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
