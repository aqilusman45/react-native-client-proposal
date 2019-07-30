/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, useState } from "react";
import {
  Thumbnail,
  Footer,
  FooterTab,
  Button,
  Text, 
  Icon
} from "native-base";

import {
  Header,
  SearchBar,
  Image,
} from "react-native-elements";

import { View, FlatList, ScrollView } from "react-native";

import Carousel from "react-native-snap-carousel";

const data = [
  {
    url:
      "http://twinkleshoppingzone.com/wp-content/uploads/2019/05/TWSBackground.png",
    title: "Back to School"
  },
  {
    url:
      "http://twinkleshoppingzone.com/wp-content/uploads/2019/05/TWSBackground.png",
    title: "Hot Deals"
  },
  {
    url:
      "http://twinkleshoppingzone.com/wp-content/uploads/2019/05/TWSBackground.png",
    title: "Discounts"
  }
];

const data_product = [
  {
    url:
      "https://twinkleshoppingzone.com/wp-content/uploads/2019/05/image3-2-e1562828199870.jpg",
    title: "Unstitched"
  },
  {
    url:
      "https://twinkleshoppingzone.com/wp-content/uploads/2019/05/IMG_20190622_104303-416x428.jpg",
    title: "Tasbeeh"
  },
  {
    url:
      "https://twinkleshoppingzone.com/wp-content/uploads/2019/06/ScarfBlack-e1562756568793.jpg",
    title: "Scarf"
  }
];

const buttons = ["Hello", "World", "Buttons"];

const App = () => {
  const [search, setSearch] = useState("");
  function updateSearch(e) {
    setSearch(e);
  }

  function _renderBanner({ item }) {
    return (
      <View>
        <Image source={{ uri: item.url }} style={{ width: 400, height: 150 }} />
      </View>
    );
  }

  function _renderProducts({ item }) {
    return (
      <View style={{ margin: 10, borderColor: "#4267b278",borderWidth: 2, alignItems: "center"}}>
        <View style={{borderColor: "#4267b278", borderWidth: 2, margin: 5, padding:5}}>
        <Thumbnail height={50} large source={{uri: item.url}} />
        </View>
        <Text style={{margin: 10}}>{item.title}</Text>
      </View>
    );
  }

  return (
    <Fragment>
      <Header
        backgroundColor="#3f51b5"
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{
          text: "Twinkle Shopping Store",
          style: { color: "#fff" }
        }}
        rightComponent={{ icon: "home", color: "#fff" }}
      />
      <SearchBar
        placeholder="Type Here..."
        platform="ios"
        containerStyle={{ height: 50 }}
        inputStyle={{ fontSize: 15 }}
        onChangeText={e => updateSearch(e)}
        value={search}
      />
      <ScrollView>
        <View style={{ margin: "auto", alignItems: "center" }}>
          <Carousel
            data={data}
            renderItem={_renderBanner}
            sliderWidth={360}
            itemWidth={350}
            layout={"default"}
            layoutCardOffset={18}
          />
        </View>
        <Text style={{fontSize: 20, textAlign: "left", textTransform: "uppercase", margin: 10 }}>
        Trending
          </Text>
        <View style={{ margin: "auto", alignItems: "center" }}>
           
          <FlatList
            horizontal={true}
            data={data_product}
            renderItem={_renderProducts}
          />
        </View>
      </ScrollView>
      <Footer>
        <FooterTab>
          <Button>
            <Icon name="apps" />
          </Button>
          <Button>
            <Icon type="FontAwesome" name="shopping-cart" />
          </Button>
          <Button active>
            <Icon  type="Foundation"  name="burst-sale" />
          </Button>
        </FooterTab>
      </Footer>
    </Fragment>
  );
};

export default App;
