import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Button,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}

const WIDTH = Dimensions.get("screen").width;
const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchProduct, setSearchProduct] = useState("");
  const filteredProducts =
    searchProduct !== ""
      ? products.filter((product) =>
          product.title
            .toLocaleLowerCase()
            .includes(searchProduct.toLocaleLowerCase())
        )
      : products;

  const getProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    if (res.ok) {
      const data = await res.json();
      setProducts(data);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="search"
        style={{
          height: 40,
          width: "80%",
          backgroundColor: "white",
          padding: 8,
          marginVertical: 10,
          borderColor: "black",
          borderWidth: 1,
        }}
        value={searchProduct}
        onChangeText={(text) => setSearchProduct(text)}
      />
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width: WIDTH / 2 - 20,
                alignItems: "center",
                backgroundColor: "white",
                margin: 4,
                paddingVertical: 10,
                borderRadius: 10,
              }}
            >
              <Image
                source={{ uri: item.image }}
                width={WIDTH / 2.8}
                height={150}
                style={{ objectFit: "cover" }}
              />

              <View style={{ flex: 1, justifyContent: "space-between" }}>
                <Text>{item.title}</Text>
                <Button title="Add to Cart" />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
