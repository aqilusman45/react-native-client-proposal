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
      "https://laz-img-cdn.alicdn.com/images/ims-web/TB1Vsulbrj1gK0jSZFuXXcrHpXa.jpg_1200x1200.jpg",
    title: "Back to School"
  },
  {
    url:
      "https://laz-img-cdn.alicdn.com/images/ims-web/TB1e_9HbBr0gK0jSZFnXXbRRXXa.jpg_1200x1200Q100.jpg_.webp",
    title: "Hot Deals"
  },
  {
    url:
      "https://laz-img-cdn.alicdn.com/images/ims-web/TB1srkGblr0gK0jSZFnXXbRRXXa.jpg_1200x1200Q100.jpg_.webp",
    title: "Discounts"
  }
];

const data_product = [
  {
    url:
      "https://static-01.daraz.pk/p/61bb45b7426ebb344034d8624fb4c83f.jpg_200x200q80-product.jpg_.webp",
    title: "Headphones"
  },
  {
    url:
      "https://static-01.daraz.pk/p/7ef25b39cdda1440aad9f63abb2f353f.jpg_200x200q80-product.jpg_.webp",
    title: "Mashrooms"
  },
  {
    url:
      "https://static-01.daraz.pk/p/7ef25b39cdda1440aad9f63abb2f353f.jpg_200x200q80-product.jpg_.webp",
    title: "Mashrooms"
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
      <View style={{ margin: 10}}>
        <Thumbnail height={50} large source={{uri: item.url}} />
        <Text>{item.title}</Text>
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
