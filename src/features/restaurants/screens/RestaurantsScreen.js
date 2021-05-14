import React from 'react';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';
import RestaurantInfoCard from '../components/RestaurantInfoCard';
import { Spacer } from '../../../components/spacer/spacer';
import {SafeArea } from '../../../components/utility/safe-area';


const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle : {
    padding:16
  }
})`
  
`

const RestaurantSscreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder='Search' />
      </SearchContainer>
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
        ]}
        renderItem={() => (
          <Spacer position='bottom' size='large'>
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

export default RestaurantSscreen;
