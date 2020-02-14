/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';

import styles from './hotel-details-style';
import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
  View,
  ScrollView,
  Switch,
  InteractionManager,
  TextInput,
} from 'react-native';
import {
  Button,
  Rating,
  Icon,
  Text as EText,
  Divider,
} from 'react-native-elements';
import {FlatGrid as SFlatGrid} from 'react-native-super-grid';
import {List} from 'react-native-paper';

export default class HotelDetailsScreen extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: {},
      search: '',
      expanded: true,
      isReady: false,
      cartItemsCount: 0,
    };
  }
  updateSearch = search => {
    this.setState({search});
  };
  _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded,
    });

  updateCount = () => {
    this.setState({cartItemsCount: 10});
    console.log('count', this.state.cartItemsCount);
  };

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
    var that = this;
    let items = Array.apply(null, Array(60)).map((v, i) => {
      return {id: i, src: 'http://placehold.it/200x200?text=' + (i + 1)};
    });
    that.setState({
      dataSource: items,
    });

    console.log('count', this.state.cartItemsCount);
  }
  foodList = [
    {
      dishType: 'Dishes',
      imgURL:
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      name: 'Beef Cake',
      price: '$150',
    },
    {
      dishType: 'Fires',
      imgURL:
        'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      name: 'French Fries',
      price: '$10',
    },
    {
      dishType: 'Buns',
      imgURL:
        'https://images.unsplash.com/photo-1561758033-f8ff74d6494a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      name: 'Vegi Burger',
      price: '$23',
    },
    {
      dishType: 'Fires',
      imgURL:
        'https://images.unsplash.com/photo-1441986060468-324610e6e6a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      name: 'Sandwich Fires',
      price: '$38',
    },
    {
      dishType: 'Mixed',
      imgURL:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      name: 'Vegi Frui Mix',
      price: '$28',
    },
    {
      dishType: 'Salads',
      imgURL:
        'https://images.unsplash.com/photo-1519996409144-56c88c9aa612?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      name: 'Rice Salad',
      price: '$548',
    },
  ];

  foodList1 = [
    {
      dishType: 'Dishes',
      imgURL:
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      name: 'Beef Cake',
      price: '$150',
    },
    {
      dishType: 'Fires',
      imgURL:
        'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      name: 'French Fries',
      price: '$10',
    },
  ];

  foodList2 = [
    {
      dishType: 'Buns',
      imgURL:
        'https://images.unsplash.com/photo-1561758033-f8ff74d6494a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      name: 'Vegi Burger',
      price: '$23',
    },
    {
      dishType: 'Fires',
      imgURL:
        'https://images.unsplash.com/photo-1441986060468-324610e6e6a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      name: 'Sandwich Fires',
      price: '$38',
    },
  ];
  foodList3 = [
    {
      dishType: 'Mixed',
      imgURL:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      name: 'Vegi Frui Mix',
      price: '$28',
    },
    {
      dishType: 'Salads',
      imgURL:
        'https://images.unsplash.com/photo-1519996409144-56c88c9aa612?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      name: 'Rice Salad',
      price: '$548',
    },
  ];
  styles = StyleSheet.create({
    MainContainer: {
      justifyContent: 'center',
      flex: 1,
      paddingTop: 10,
    },
    imageThumbnail: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
    },
  });
  render() {
    if (!this.state.isReady) {
      return <ActivityIndicator />;
    }
    return (
      <View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 20,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="arrowleft" type="antdesign" color="#000" />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Icon
              style={{marginEnd: 15}}
              name="heart-outlined"
              type="entypo"
              color="#000"
            />
            <Icon name="search1" type="antdesign" color="#000" />
          </View>
        </View>
        <ScrollView>
          {/*}  <Tile
    containerStyle={styles.tilesWhole}

    height= {150}
    width ={150}
  imageSrc={require('./images/dd.jpg')}
  title="Arabiyan Briyani"
  featured
  caption="yummy..."
  titleStyle = {styles.tilesText}
/>
    */}
          <EText h4 style={styles.tilesWhole}>
            Mappilllai Virunthu
          </EText>
          <EText style={styles.tilesWhole}>Briyani , Chinese</EText>

          <Divider style={{backgroundColor: '#CDCDCD', margin: 10}} />

          <View
            style={{
              flex: 3,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
              <EText style={{alignItems: 'center', fontWeight: 'bold'}}>
                4.2
              </EText>
              <EText>5000+ ratings</EText>
            </View>

            <View
              style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
              <EText style={{fontWeight: 'bold'}}>26 mins</EText>
              <EText>Delivery Time</EText>
            </View>

            <View
              style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
              <EText style={{fontWeight: 'bold'}}>$200</EText>
              <EText>For Two</EText>
            </View>
          </View>
          <Divider style={{backgroundColor: '#CDCDCD', margin: 10}} />

          <EText style={{margin: 10}}>
            {' '}
            50% off up to $100 on orders above $129. | Use coupan SWIGY
          </EText>
          <Divider style={{backgroundColor: '#EAEAEA', height: 20}} />

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <EText style={{marginTop: 15}}> VEG ONLY</EText>
              <Switch />
            </View>
            <Image
              style={{height: 50, width: 50, alignContent: 'flex-end'}}
              source={{
                uri:
                  'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400,h_400/HygieneGoodWhite_kviidn',
              }}
            />
          </View>
          <Divider
            style={{backgroundColor: '#CDCDCD', marginEnd: 10, marginStart: 10}}
          />

          <EText h4 style={{marginStart: 10, marginTop: 10}}>
            {' '}
            Recommended
          </EText>

          <View style={this.styles.MainContainer}>
            <SFlatGrid
              style={{marginStart: 10}}
              itemDimension={130}
              items={this.foodList}
              renderItem={({item}) => (
                <View
                  style={{
                    flex: 3,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}>
                  <EText style={{fontSize: 14}}>{item.dishType}</EText>

                  <Image
                    style={{
                      height: 100,
                      width: 150,
                      flex: 2,
                      alignItems: 'flex-start',
                    }}
                    source={{uri: item.imgURL}}
                  />

                  <EText style={{fontSize: 18}}>{item.name}</EText>
                  <Rating
                    imageSize={13}
                    readonly
                    startingValue={4.4}
                    ratingCount={5}
                    style={{marginEnd: 90}}
                  />
                  <View style={{height: 20}} />

                  <View
                    style={{
                      flex: 1,
                      marginEnd: 24,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <EText
                      style={{
                        alignContent: 'flex-start',
                        marginTop: 10,
                        alignItems: 'center',
                        fontSize: 17,
                      }}>
                      {item.price}
                    </EText>
                    <Button
                      style={{
                        fontSize: 14,
                        marginBottom: 10,
                        alignContent: 'flex-end',
                      }}
                      title="ADD +"
                      type="outline"
                    />
                  </View>
                </View>
              )}
            />
            <Divider
              style={{
                marginTop: 10,
                marginBottom: 20,
                backgroundColor: '#EAEAEA',
                height: 20,
              }}
            />
            <EText h4 style={{marginStart: 10, marginTop: 10}}>
              Internation Cuisine {this.state.cartItemsCount}
            </EText>

            <FlatList
              data={this.foodList}
              style={{marginBottom: 10}}
              renderItem={({item}) => (
                <View
                  style={{
                    margin: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={{height: 50, width: 50, alignItems: 'flex-start'}}
                      source={{uri: item.imgURL}}
                    />

                    <View
                      style={{
                        flexDirection: 'column',
                        marginStart: 10,
                        marginBottom: 10,
                      }}>
                      <EText style={{fontSize: 17}}>{item.name} </EText>
                      <EText style={{marginTop: 10, fontSize: 15}}>
                        {item.price}
                      </EText>
                    </View>
                  </View>
                  <Button
                    style={{
                      fontSize: 14,
                      marginBottom: 10,
                      alignContent: 'flex-end',
                    }}
                    title="ADD +"
                    type="outline"
                    onPress={() => {
                      var temp = this.state.cartItemsCount;
                      temp = temp + 1;
                      this.setState({cartItemsCount: temp});
                      console.log('count', this.state.cartItemsCount);
                    }}
                  />
                </View>
              )}
            />
          </View>

          <EText h4 style={{marginStart: 10, marginTop: 10}}>
            {' '}
            Cuisine Combos
          </EText>

          <List.Section title="Combo Dinners" style={{marginBottom: 50}}>
            <List.Accordion
              title="Dishes"
              description="2 items: Dish Fries - Combo"
              left={props => <List.Icon {...props} icon="folder" />}>
              <FlatList
                data={this.foodList1}
                style={{marginBottom: 10}}
                renderItem={({item}) => (
                  <View
                    style={{
                      margin: 5,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        style={{
                          height: 50,
                          width: 50,
                          alignItems: 'flex-start',
                        }}
                        source={{uri: item.imgURL}}
                      />

                      <View
                        style={{
                          flexDirection: 'column',
                          marginStart: 10,
                          marginBottom: 10,
                        }}>
                        <EText style={{fontSize: 17}}>{item.name} </EText>
                        <EText style={{marginTop: 10, fontSize: 15}}>
                          {item.price}
                        </EText>
                      </View>
                    </View>
                    <Button
                      style={{
                        fontSize: 14,
                        marginBottom: 10,
                        alignContent: 'flex-end',
                      }}
                      title="ADD +"
                      type="outline"
                    />
                  </View>
                )}
              />
            </List.Accordion>

            <List.Accordion
              title="Buns"
              description="Many items: Buns + Fires - Combo"
              left={props => <List.Icon {...props} icon="folder" />}>
              <FlatList
                data={this.foodList2}
                style={{marginBottom: 10}}
                renderItem={({item}) => (
                  <View
                    style={{
                      margin: 5,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        style={{
                          height: 50,
                          width: 50,
                          alignItems: 'flex-start',
                        }}
                        source={{uri: item.imgURL}}
                      />

                      <View
                        style={{
                          flexDirection: 'column',
                          marginStart: 10,
                          marginBottom: 10,
                        }}>
                        <EText style={{fontSize: 17}}>{item.name} </EText>
                        <EText style={{marginTop: 10, fontSize: 15}}>
                          {item.price}
                        </EText>
                      </View>
                    </View>
                    <Button
                      style={{
                        fontSize: 14,
                        marginBottom: 10,
                        alignContent: 'flex-end',
                      }}
                      title="ADD +"
                      type="outline"
                    />
                  </View>
                )}
              />
            </List.Accordion>

            <List.Accordion
              title="Salads"
              description="Many items: Salads + Mixers - Ala Carte"
              left={props => <List.Icon {...props} icon="folder" />}>
              <FlatList
                data={this.foodList3}
                style={{marginBottom: 10}}
                renderItem={({item}) => (
                  <View
                    style={{
                      margin: 5,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        style={{
                          height: 50,
                          width: 50,
                          alignItems: 'flex-start',
                        }}
                        source={{uri: item.imgURL}}
                      />

                      <View
                        style={{
                          flexDirection: 'column',
                          marginStart: 10,
                          marginBottom: 10,
                        }}>
                        <EText style={{fontSize: 17}}>{item.name} </EText>
                        <EText style={{marginTop: 10, fontSize: 15}}>
                          {item.price}
                        </EText>
                      </View>
                    </View>
                    <Button
                      style={{
                        fontSize: 14,
                        marginBottom: 10,
                        alignContent: 'flex-end',
                      }}
                      title="ADD +"
                      type="outline"
                    />
                  </View>
                )}
              />
            </List.Accordion>
          </List.Section>
        </ScrollView>
        <View
          style={{
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            right: 150,
            bottom: 100,
          }}>
          <Button
            icon={
              <Icon
                name="food-fork-drink"
                size={15}
                type="material-community"
                color="white"
              />
            }
            containerViewStyle={{borderRadius: 25}}
            buttonStyle={{
              borderRadius: 25,
              paddingTop: 10,
              paddingBottom: 10,
              paddingStart: 15,
              paddingEnd: 15,
            }}
            style={{
              borderRadius: 30,
              resizeMode: 'contain',
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
            }}
            title="  MENU"
            type="solid"
          />
        </View>

        <View
          style={{
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            bottom: 40,
            width: 350,
            alignSelf: 'center',
            backgroundColor: '#00CC00',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              width: 350,
            }}>
            <View
              style={{
                marginStart: 20,
                flexDirection: 'row',
                width: 350,
                alignContent: 'space-between',
                alignItems: 'center',
              }}>
              <EText
                h4
                style={{
                  flex: 0.8,
                  borderWidth: 0,
                  height: 30,
                  alignItems: 'center',
                }}>
                {this.state.cartItemsCount} items
              </EText>
              <Button
                icon={
                  <Icon
                    name="food-fork-drink"
                    size={15}
                    type="material-community"
                    color="white"
                  />
                }
                title="VIEW CART"
                type="solid"
                style={{flex: 0.2, alignItems: 'flex-end', marginStart: 20}}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }

  componentWillUnmount() {}
  ratingCompleted(rating) {
    console.log('Rating is: ' + rating);
  }
}
