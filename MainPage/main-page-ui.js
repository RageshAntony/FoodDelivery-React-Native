/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';

import {
  View,
  ScrollView,
  InteractionManager,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {Button, Text as EText, Divider, SearchBar} from 'react-native-elements';
import MainPageRepo from './main-page-repo';
import {
  FilterCarousel,
  AllRestaurantsCarousel,
  TopPicksCarousel,
  OffersCarousel,
  QuickSuggestionsCarousel,
  CuisineSelectCarousel,
  QuickOrderCarousel,
} from '../UIcomp/Carousels';
import PopularRestCarousel from '../UIcomp/Carousels';

export default class MainPageScreen extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: {},
      search: '',
      expanded: true,
      isReady: false,
    };
  }

  styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
  });

  componentDidMount() {
    // 1: Component is mounted off-screen
    InteractionManager.runAfterInteractions(() => {
      // 2: Component is done animating
      // 3: Start fetching the team / or render the view
      // this.props.dispatchTeamFetchStart();
      this.setState({
        isReady: true,
      });
    });
  }

  render() {
    if (!this.state.isReady) {
      return (
        <ActivityIndicator
          size="large"
          style={[this.styles.container, this.styles.horizontal]}
        />
      );
    }
    return (
      <View>
        <SearchBar
          style={{margin: 15}}
          platform="android"
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={this.state.search}
        />
        <ScrollView contentContainerStyle={{paddingBottom: 100}}>
          <OffersCarousel
            style={{margin: 10}}
            couponsList={MainPageRepo.couponsList}
          />
          <Divider
            style={{
              marginTop: 10,
              marginBottom: 20,
              backgroundColor: '#EAEAEA',
              height: 20,
            }}
          />
          <View
            style={{
              margin: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <EText h4 style={{marginStart: 5, marginBottom: 5}}>
              Cusines
            </EText>

            <EText
              style={{
                fontSize: 15,
                marginTop: 5,
                marginEnd: 10,
                justifyContent: 'flex-end',
              }}>
              See All
            </EText>
          </View>
          <CuisineSelectCarousel foodList={MainPageRepo.foodList} />
          <Divider
            style={{
              marginTop: 10,
              marginBottom: 20,
              backgroundColor: '#EAEAEA',
              height: 20,
            }}
          />
          <View
            style={{
              margin: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <EText h4 style={{marginStart: 5, marginBottom: 5}}>
              Top Picks
            </EText>

            <EText
              style={{
                fontSize: 15,
                marginTop: 5,
                marginEnd: 10,
                justifyContent: 'flex-end',
              }}>
              See All
            </EText>
          </View>
          <TopPicksCarousel foodList={MainPageRepo.foodList} />
          <Divider
            style={{
              marginTop: 10,
              marginBottom: 20,
              backgroundColor: '#EAEAEA',
              height: 20,
            }}
          />
          <View
            style={{
              margin: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <EText h4 style={{marginStart: 5, marginBottom: 5}}>
              Quick Order
            </EText>

            <EText
              style={{
                fontSize: 15,
                marginTop: 5,
                marginEnd: 10,
                justifyContent: 'flex-end',
              }}>
              See All
            </EText>
          </View>
          <QuickOrderCarousel foodList={MainPageRepo.foodList} />
          <Divider
            style={{
              marginTop: 10,
              marginBottom: 20,
              backgroundColor: '#EAEAEA',
              height: 20,
            }}
          />
          <View
            style={{
              margin: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <EText h4 style={{marginStart: 5, marginBottom: 5}}>
              Popular
            </EText>

            <EText
              style={{
                fontSize: 15,
                marginTop: 5,
                marginEnd: 10,
                justifyContent: 'flex-end',
              }}>
              See All
            </EText>
          </View>
          <PopularRestCarousel popRestList={MainPageRepo.popRestList} />
          <Divider
            style={{
              marginTop: 10,
              marginBottom: 20,
              backgroundColor: '#EAEAEA',
              height: 20,
            }}
          />
          <View
            style={{
              backgroundColor: '#F2F5FC',
              marginTop: 10,
              marginBottom: 10,
              height: 460,
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <EText h3 style={{marginTop: 10}}>
              Fast Foods
            </EText>

            <EText
              style={{
                fontSize: 15,
                marginTop: 5,
                marginBottom: 10,
                justifyContent: 'center',
              }}>
              QUICK FOODS AT BUDGET PRICES
            </EText>

            <QuickSuggestionsCarousel restList={MainPageRepo.popRestList} />
          </View>
          <Divider
            style={{
              marginTop: 10,
              marginBottom: 20,
              backgroundColor: '#EAEAEA',
              height: 20,
            }}
          />

          <View
            style={{
              margin: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <EText h4 style={{marginStart: 5, marginBottom: 5}}>
              All Restaurants
            </EText>

            <EText
              style={{
                fontSize: 15,
                marginTop: 5,
                marginEnd: 10,
                justifyContent: 'flex-end',
              }}>
              See All
            </EText>
          </View>
          <FilterCarousel filterList={MainPageRepo.filtersList} />
          <AllRestaurantsCarousel
            navigation={this.props.navigation}
            restList={MainPageRepo.popRestList}
          />
          <Button
            containerViewStyle={{borderRadius: 10}}
            buttonStyle={{
              borderRadius: 10,
              paddingTop: 10,
              paddingBottom: 10,
              paddingStart: 15,
              paddingEnd: 15,
            }}
            style={{
              marginStart: 20,
              height: 200,
              width: 200,
              borderRadius: 10,
              resizeMode: 'contain',
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
            }}
            title="VIEW ALL RESTAURANTS"
            type="solid"
          />
          <View
            style={{
              backgroundColor: '#F2F5FC',
              marginTop: 10,
              marginBottom: 10,
              height: 50,
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <EText h3 style={{marginTop: 10}}>
              LIVE TO EAT
            </EText>

            <EText
              style={{
                fontSize: 15,
                marginTop: 5,
                marginBottom: 10,
                justifyContent: 'center',
              }}>
              THE WORLD IS YOUR OYSTER
            </EText>
          </View>
        </ScrollView>
      </View>
    );
  }
}
