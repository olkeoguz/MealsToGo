import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import RestaurantInfoCard from '../components/RestaurantInfoCard';
import { Spacer } from '../../../components/spacer/spacer';
import { SafeArea } from '../../../components/utility/safe-area';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import Search from '../components/Search';

import { ActivityIndicator, Colors } from 'react-native-paper';

const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const RestaurantSscreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <Search />
      {isLoading ? (
        <Center>
          <ActivityIndicator
            animating={true}
            color={Colors.blue300}
            size={50}
          />
        </Center>
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            // console.log(item);
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  navigation.navigate('RestaurantDetail', {
                    restaurant: item,
                  });
                }}
              >
                <Spacer position='bottom' size='large'>
                  <RestaurantInfoCard restaurant={item} />
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};

export default RestaurantSscreen;
