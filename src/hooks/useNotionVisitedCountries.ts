import { graphql, useStaticQuery } from 'gatsby';
import { AllNotionQueryQuery } from '../graphqlTypes';

const allNotionQuery = graphql`
  query AllNotionQuery {
    allNotion(filter: { properties: { Visited: { value: { eq: true } } } }) {
      edges {
        node {
          id
          title
          properties {
            Visited {
              value
            }
            Flag {
              value
            }
            Name {
              value
            }
            Latitude {
              value
            }
            Longitude {
              value
            }
            MarkerOffsetY {
              value
            }
            MarkerOffsetX {
              value
            }
            TextOffsetX {
              value
            }
            TextOffsetY {
              value
            }
          }
        }
      }
      totalCount
    }
  }
`;
export const useNotionVisitedCountries = () => {
  const data = useStaticQuery<AllNotionQueryQuery>(allNotionQuery);
  return {
    totalCount: data.allNotion.totalCount,
    visitedCountries: data.allNotion.edges.map(({ node: { id, title, properties } }) => ({
      title: title,
      id: id,
      flag: properties?.Flag?.value,
      name: properties?.Name?.value,
      latitude: properties?.Latitude?.value,
      longitude: properties?.Longitude?.value,
      markerOffsetX: properties?.MarkerOffsetX?.value,
      markerOffsetY: properties?.MarkerOffsetY?.value,
      textOffsetX: properties?.TextOffsetX?.value,
      textOffsetY: properties?.TextOffsetY?.value,
    })),
  };
};

export default useNotionVisitedCountries;
