import * as React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import { WebView } from "react-native-webview";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Header } from "react-native-elements";

const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Header
        leftComponent={{
          icon: "menu",
          color: "#fff",
          onPress: () => navigation.toggleDrawer(),
        }}
        centerComponent={{ text: "Lunas Gutom", style: { color: "#fff" } }}
        containerStyle={{ backgroundColor: "#e67e22" }}
      />
      <ImageBackground
        source={require("./assets/background1.jpg")}
        style={styles.container}
      >
        <View style={styles.about}>
          <ScrollView horizontal={true}>
            <TouchableOpacity
              onPress={() => navigation.navigate("French Cuisine")}
              title="French Cuisine"
            >
              <View style={styles.icon1}>
                <MaterialCommunityIcons
                  size={40}
                  name="food-croissant"
                  color="#e67e22"
                ></MaterialCommunityIcons>
                <Text>French</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Indian Cuisine")}
              title="Indian Cuisine"
            >
              <View style={styles.icon2}>
                <MaterialCommunityIcons
                  size={40}
                  name="food-variant"
                  color="#e67e22"
                ></MaterialCommunityIcons>
                <Text>Indian</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Filipino Cuisine")}
              title="Filipino Cuisine"
            >
              <View style={styles.icon3}>
                <MaterialCommunityIcons
                  size={40}
                  name="food-fork-drink"
                  color="#e67e22"
                ></MaterialCommunityIcons>
                <Text>Filipino</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Chinese Cuisine")}
              title="Chinese Cuisine"
            >
              <View style={styles.icon4}>
                <MaterialCommunityIcons
                  size={40}
                  name="food-apple"
                  color="#e67e22"
                ></MaterialCommunityIcons>
                <Text>Chinese</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>

          <Text style={{ fontSize: 30, fontWeight: "bold", margin: 10 }}>
            Top Recipes
          </Text>

          <ScrollView horizontal={true}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Ratatoulie")}
              title="Ratatoulie"
            >
              <View>
                <Image
                  style={{
                    borderRadius: 15,
                    marginRight: 10,
                    width: 350,
                    height: 350,
                  }}
                  source={require("./assets/ratata.png")}
                />
                <View style={styles.ImageOverlay}></View>

                <Text style={styles.imageText}>Ratatoulie</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Chicken Biryani")}
              title="Chicken Biryani"
            >
              <View>
                <Image
                  style={{
                    borderRadius: 15,
                    marginRight: 10,
                    width: 350,
                    height: 350,
                  }}
                  source={require("./assets/biryani.jpeg")}
                />
                <View style={styles.ImageOverlay}></View>
                <Text style={styles.imageText}>Biryani</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Chicken Adobo")}
              title="Chicken Adobo"
            >
              <View>
                <Image
                  style={{
                    borderRadius: 15,
                    marginRight: 10,
                    width: 350,
                    height: 350,
                  }}
                  source={require("./assets/adobo.jpg")}
                />
                <View style={styles.ImageOverlay}></View>
                <Text style={styles.imageText}>Chicken Adobo</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Chinese Dumplings")}
              title="Chinese Dumplings"
            >
              <View>
                <Image
                  style={{
                    borderRadius: 15,
                    marginRight: 10,
                    width: 350,
                    height: 350,
                  }}
                  source={require("./assets/dumplings.jpg")}
                />
                <View style={styles.ImageOverlay}></View>
                <Text style={styles.imageText}>Chinese Dumplings</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}

function French({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Header
        leftComponent={{
          icon: "menu",
          color: "#fff",
          onPress: () => navigation.toggleDrawer(),
        }}
        centerComponent={{ text: "French Cuisine", style: { color: "#fff" } }}
        rightComponent={{
          icon: "home",
          color: "#fff",
          onPress: () => navigation.navigate("Home Screen"),
        }}
        containerStyle={{ backgroundColor: "#e67e22" }}
      />
      <ImageBackground
        source={require("./assets/background1.jpg")}
        style={styles.container}
      >
        <ScrollView>
          <TouchableHighlight
            onPress={() => navigation.navigate("Ratatoulie")}
            title="Ratatoulie"
          >
            <View style={styles.FrenchInner}>
              <Image
                style={styles.TouchImages}
                source={require("./assets/ratata.png")}
              />

              <Text style={styles.text2}>Ratatoulie</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => navigation.navigate("Chicken Cordon Bleu Pasta")}
            title="Chicken Cordon Bleu Pasta"
          >
            <View style={styles.FrenchInner}>
              <Image
                style={styles.TouchImages}
                source={require("./assets/bleu.jpg")}
              />
              <Text style={styles.text2}>Chicken Cordon Bleu Pasta</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => navigation.navigate("Vanilla Soufflé")}
            title="Vanilla Soufflé "
          >
            <View style={styles.FrenchInner}>
              <Image
                style={styles.TouchImages}
                source={require("./assets/souffle.jpg")}
              />
              <Text style={styles.text2}>Vanilla Soufflé</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => navigation.navigate("Crêpes")}
            title="Crêpes"
          >
            <View style={styles.FrenchInner}>
              <Image
                style={styles.TouchImages}
                source={require("./assets/crepes.jpg")}
              />
              <Text style={styles.text2}>Crêpes</Text>
            </View>
          </TouchableHighlight>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

function ratatoulie({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Header
        leftComponent={{
          icon: "chevron-left",
          color: "#2c3e50",
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{ text: "Ratatoulie", style: { color: "#2c3e50" } }}
        containerStyle={{ backgroundColor: "transparent" }}
      />
      <ImageBackground
        source={require("./assets/background1.jpg")}
        style={styles.container}
      >
        <ScrollView>
          <Image
            style={styles.images}
            source={require("./assets/ratata.png")}
          />
          <View style={styles.FrenchInner}>
            <View style={styles.ingredients}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontSize: 30,
                  alignSelf: "center",
                }}
              >
                Ingredients
              </Text>
            </View>
            <View style={styles.content}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontSize: 25,
                  alignSelf: "center",
                }}
              >
                Veggies
              </Text>
              <Text style={styles.ingredientstext}>2 eggplants</Text>
              <Text style={styles.ingredientstext}>6 roma tomatoes</Text>
              <Text style={styles.ingredientstext}>2 yellow squashes</Text>
              <Text style={styles.ingredientstext}>2 zucchinis</Text>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 7,
                  fontSize: 25,
                  alignSelf: "center",
                }}
              >
                Sauce
              </Text>
              <Text style={styles.ingredientstext}>
                2 tablespoons olive oil
              </Text>
              <Text style={styles.ingredientstext}>1 onion, diced</Text>
              <Text style={styles.ingredientstext}>
                4 cloves garlic, minced
              </Text>
              <Text style={styles.ingredientstext}>
                1 red bell pepper, diced
              </Text>
              <Text style={styles.ingredientstext}>
                1 yellow bell pepper, diced{" "}
              </Text>
              <Text style={styles.ingredientstext}>salt, to taste</Text>
              <Text style={styles.ingredientstext}>pepper, to taste</Text>
              <Text style={styles.ingredientstext}>
                {" "}
                28 oz can of crushed tomatoes (795 g)
              </Text>
              <Text style={styles.ingredientstext}>
                2 tablespoons chopped fresh basil, from 8-10 leaves
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 7,
                  fontSize: 25,
                  alignSelf: "center",
                }}
              >
                Herbs Seasoning
              </Text>
              <Text style={styles.ingredientstext}>
                2 tablespoons chopped fresh basil, from 8-10 leaves
              </Text>
              <Text style={styles.ingredientstext}>
                1 teaspoon garlic, minced
              </Text>
              <Text style={styles.ingredientstext}>
                2 tablespoons Chopped fresh parsley
              </Text>
              <Text style={styles.ingredientstext}>
                2 teaspoons fresh thyme
              </Text>
              <Text style={styles.ingredientstext}>salt, to taste </Text>
              <Text style={styles.ingredientstext}>pepper, to taste</Text>
              <Text style={styles.ingredientstext}>
                4 tablespoons olive oil
              </Text>
            </View>
          </View>
          <View style={styles.FrenchInner}>
            <WebView
              allowsFullscreenVideo
              allowsInlineMediaPlayback
              mediaPlaybackRequiresUserAction
              style={styles.video}
              source={{ uri: "https://www.youtube.com/embed/iCMGPRiDXQg" }}
            />
          </View>
          <View style={styles.prepBox}>
            <View style={styles.contents}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontSize: 30,
                  alignSelf: "center",
                }}
              >
                Preparation
              </Text>
              <Text style={{ fontSize: 15, alignSelf: "auto", margin: 5 }}>
                1.) Preheat the oven for 375˚F (190˚C).
              </Text>
              <Text style={styles.ingredientstext}>
                2.) Slice the eggplant, tomatoes, squash, and zucchini into
                approximately ¹⁄₁₆-inch (1-mm) rounds, then set aside.
              </Text>
              <Text style={styles.ingredientstext}>
                3.) Make the sauce: Heat the olive oil in a 12-inch (30-cm)
                oven-safe pan over medium-high heat. Sauté the onion, garlic,
                and bell peppers until soft, about 10 minutes. Season with salt
                and pepper, then add the crushed tomatoes. Stir until the
                ingredients are fully incorporated. Remove from heat, then add
                the basil. Stir once more, then smooth the surface of the sauce
                with a spatula.
              </Text>
              <Text style={styles.ingredientstext}>
                4.) Arrange the sliced veggies in alternating patterns, (for
                example, eggplant, tomato, squash, zucchini) on top of the sauce
                from the outer edge to the middle of the pan. Season with salt
                and pepper.
              </Text>
              <Text style={styles.ingredientstext}>
                5.) Make the herb seasoning: In a small bowl, mix together the
                basil, garlic, parsley, thyme, salt, pepper, and olive oil.
                Spoon the herb seasoning over the vegetables
              </Text>
              <Text style={styles.ingredientstext}>
                6.) Cover the pan with foil and bake for 40 minutes. Uncover,
                then bake for another 20 minutes, until the vegetables are
                softened.
              </Text>
              <Text style={styles.ingredientstext}>
                7.) Serve while hot as a main dish or side. The ratatouille is
                also excellent the next day--cover with foil and reheat in a
                350˚F (180˚C) oven for 15 minutes, or simply microwave to
                desired temperature.
              </Text>
              <Text style={styles.ingredientstext}>8.) Enjoy!</Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

function cordon({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Header
        leftComponent={{
          icon: "chevron-left",
          color: "#2c3e50",
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: "Chicken Cordon Bleu Pasta",
          style: { color: "#2c3e50" },
        }}
        containerStyle={{ backgroundColor: "transparent" }}
      />
      <ImageBackground
        source={require("./assets/background1.jpg")}
        style={styles.container}
      >
        <ScrollView>
          <Image style={styles.images} source={require("./assets/bleu.jpg")} />
          <View style={styles.FrenchInner}>
            <View style={styles.ingredients}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontSize: 30,
                  alignSelf: "center",
                }}
              >
                Ingredients
              </Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.ingredientstext}>
                3 cups uncooked penne pasta
              </Text>
              <Text style={styles.ingredientstext}>
                2 cups heavy whipping cream
              </Text>
              <Text style={styles.ingredientstext}>
                1 package (8 ounces) cream cheese,
              </Text>
              <Text style={styles.ingredientstext}>softened and cubed</Text>
              <Text style={styles.ingredientstext}>
                1-1/2 cups shredded Swiss cheese, divided
              </Text>
              <Text style={styles.ingredientstext}>
                1/2 teaspoon onion powder
              </Text>
              <Text style={styles.ingredientstext}>
                1/2 teaspoon garlic salt
              </Text>
              <Text style={styles.ingredientstext}>1/4 teaspoon pepper</Text>
              <Text style={styles.ingredientstext}>
                3 cups sliced cooked chicken breasts
              </Text>
              <Text style={styles.ingredientstext}>
                3/4 cup crumbled cooked bacon
              </Text>
              <Text style={styles.ingredientstext}>
                3/4 cup cubed fully cooked ham
              </Text>
              <Text style={styles.ingredientstext}>
                3 tablespoons dry bread crumbs
              </Text>
            </View>
          </View>
          <View style={styles.FrenchInner}>
            <WebView
              allowsFullscreenVideo
              allowsInlineMediaPlayback
              mediaPlaybackRequiresUserAction
              style={styles.video}
              source={{
                uri:
                  "https://www.youtube.com/embed/inl5K0WgI0I?list=TLPQMDExMDIwMjA6-b0yuR3r3w",
              }}
            />
          </View>
          <View style={styles.prepBox}>
            <View style={styles.contents}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontSize: 30,
                  alignSelf: "center",
                }}
              >
                Preparation
              </Text>
              <Text style={{ fontSize: 15, alignSelf: "auto", margin: 5 }}>
                1.) Preheat oven to 350°. Cook pasta according to package
                directions for al dente.
              </Text>
              <Text style={styles.ingredientstext}>
                2.) Meanwhile, in a large saucepan, heat cream and cream cheese
                over medium heat until smooth, stirring occasionally. Stir in 1
                cup Swiss cheese, onion powder, garlic salt and pepper until
                blended.
              </Text>
              <Text style={styles.ingredientstext}>
                3.) Drain pasta; stir in chicken, bacon and ham. Add sauce; toss
                to coat. Transfer to a greased 13x9-in. baking dish. Sprinkle
                with remaining cheese and the bread crumbs. Bake, uncovered,
                18-22 minutes or until heated through.
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

function souffle({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Header
        leftComponent={{
          icon: "chevron-left",
          color: "#2c3e50",
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: "Vanilla Souffle",
          style: { color: "#2c3e50" },
        }}
        containerStyle={{ backgroundColor: "transparent" }}
      />
      <ImageBackground
        source={require("./assets/background1.jpg")}
        style={styles.container}
      >
        <ScrollView>
          <Image
            style={styles.images}
            source={require("./assets/souffle.jpg")}
          />

          <View style={styles.FrenchInner}>
            <View style={styles.ingredients}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontSize: 30,
                  alignSelf: "center",
                }}
              >
                Ingredients
              </Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.ingredientstext}>
                4 large eggs, separated
              </Text>
              <Text style={styles.ingredientstext}>1 1/4 cup (300ml) milk</Text>
              <Text style={styles.ingredientstext}>5 tbsp (50g) flour</Text>
              <Text style={styles.ingredientstext}>
                3 tbsp (45g) sugar, for egg yolks
              </Text>
              <Text style={styles.ingredientstext}>
                2 tsp (10g) vanilla extract
              </Text>
              <Text style={styles.ingredientstext}>1/4 tsp (1g) salt</Text>
              <Text style={styles.ingredientstext}>
                3 tbsp (45g) sugar, for egg whites
              </Text>
              <Text style={styles.ingredientstext}>
                softened butter and sugar
              </Text>
              <Text style={styles.ingredientstext}>powdered sugar</Text>
            </View>
          </View>
          <View style={styles.FrenchInner}>
            <WebView
              allowsFullscreenVideo
              allowsInlineMediaPlayback
              mediaPlaybackRequiresUserAction
              style={styles.video}
              source={{
                uri:
                  "https://www.youtube.com/embed/dbn6QEvBWg8?list=TLPQMDExMDIwMjA6-b0yuR3r3w",
              }}
            />
          </View>
          <View style={styles.prepBox}>
            <View style={styles.contents}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontSize: 30,
                  alignSelf: "center",
                }}
              >
                Preparation
              </Text>
              <Text style={{ fontSize: 15, alignSelf: "auto", margin: 5 }}>
                Preheat oven to 375 F (190C). Place a baking sheet on the middle
                rack in the oven. Grease with butter 4 ramekins of 8 oz (230ml)
                capacity using a brush and making upward strokes (seems this
                step help the souffle rise evenly). Coat the bottom and sides
                with sugar. Discard excess sugar.
              </Text>
              <Text style={styles.ingredientstext}>
                Separate whites from yolks and set aside until ready to use.
              </Text>
              <Text style={styles.ingredientstext}>
                In a medium saucepan bring milk to a simmer.
              </Text>
              <Text style={styles.ingredientstext}>
                In another saucepan mix yolks with 3 tbsp sugar until slightly
                pale. Add flour and whisk to combine. Pour about a third of the
                hot milk over the egg yolk mixture to temper the yolks. Add the
                rest of the milk and return to heat. Bring to a boil, stirring
                continously; cook 1-2 minutes more or until thickened.
              </Text>
              <Text style={styles.ingredientstext}>
                Remove from heat and stir in vanilla extract. Transfer mixture
                to a larger bowl and let cool slightly.
              </Text>
              <Text style={styles.ingredientstext}>
                In a separate bowl whip whites with a pinch of salt until foamy.
                Gradually add remaining 3 tbsp of sugar and continue whipping
                until stiff peaks form. Gradually fold the whipped whites into
                the yolk mixture
              </Text>
              <Text style={styles.ingredientstext}>
                Divide mixture evenly into the prepared ramekins. Place the
                ramekins onto the preheated baking sheet and bake for 25-30
                minute until golden and puffed.
              </Text>
              <Text style={styles.ingredientstext}>
                Dust with powdered sugar and serve immediately. Enjoy!
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

function crepes({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Header
        leftComponent={{
          icon: "chevron-left",
          color: "#2c3e50",
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{ text: "Crêpes", style: { color: "#2c3e50" } }}
        containerStyle={{ backgroundColor: "transparent" }}
      />
      <ImageBackground
        source={require("./assets/background1.jpg")}
        style={styles.container}
      >
        <ScrollView>
          <Image
            style={styles.images}
            source={require("./assets/crepes.jpg")}
          />

          <View style={styles.FrenchInner}>
            <View style={styles.ingredients}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontSize: 30,
                  alignSelf: "center",
                }}
              >
                Ingredients
              </Text>
            </View>

            <View style={styles.content}>
              <Text style={styles.ingredientstext}>1 c. all-purpose flour</Text>
              <Text style={styles.ingredientstext}>2 large eggs</Text>
              <Text style={styles.ingredientstext}>
                1 tbsp. granulated sugar
              </Text>
              <Text style={styles.ingredientstext}>1/4 tsp. kosher sal</Text>
              <Text style={styles.ingredientstext}>1 1/2 c. whole milk</Text>
              <Text style={styles.ingredientstext}>1 tbsp. butter</Text>
              <Text style={styles.ingredientstext}>
                Fresh fruit, for serving
              </Text>
              <Text style={styles.ingredientstext}>
                Powdered sugar, for serving
              </Text>
            </View>
          </View>
          <View style={styles.FrenchInner}>
            <WebView
              allowsFullscreenVideo
              allowsInlineMediaPlayback
              mediaPlaybackRequiresUserAction
              style={styles.video}
              source={{ uri: "https://www.youtube.com/embed/SpSrBGnjurA" }}
            />
          </View>
          <View style={styles.prepBox}>
            <View style={styles.contents}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontSize: 30,
                  alignSelf: "center",
                }}
              >
                Preparation
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  alignSelf: "auto",
                  margin: 5,
                }}
              >
                1.) In a large mixing bowl whisk the flour, sugar and salt until
                combined. Then create a well with flour and add the eggs.
                Gradually pour in milk, whisking to combine after each addition.
                Let batter stand at room temperature until slightly bubbly on
                top, 15 to 20 minutes.
              </Text>
              <Text style={styles.ingredientstext}>
                2.) In a small skillet over medium heat, melt butter. About 1/4
                cup at a time, drop batter evenly onto pan, swirling it to
                evenly coat.
              </Text>
              <Text style={styles.ingredientstext}>
                3.) Cook 2 minutes, then flip and cook 1 minute more. Repeat
                with remaining batter.
              </Text>
              <Text style={styles.ingredientstext}>
                4.) Serve crêpes warm with fresh fruit and powdered sugar.
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

function IndianScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Header
        leftComponent={{
          icon: "menu",
          color: "#fff",
          onPress: () => navigation.toggleDrawer(),
        }}
        centerComponent={{ text: "Indian Cuisine", style: { color: "#fff" } }}
        rightComponent={{
          icon: "home",
          color: "#fff",
          onPress: () => navigation.navigate("Home Screen"),
        }}
        containerStyle={{ backgroundColor: "#e67e22" }}
      />
      <ImageBackground
        source={require("./assets/background1.jpg")}
        style={styles.container}
      >
        <ScrollView>
          <TouchableHighlight
            onPress={() => navigation.navigate("Chicken Biryani")}
            title="Chicken Biryani"
          >
            <View style={styles.FrenchInner}>
              <Image
                style={styles.TouchImages}
                source={require("./assets/biryani.jpeg")}
              />
              <Text style={styles.text2}>Chicken Biryani</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => navigation.navigate("Indian-Style Chicken Curry")}
            title="Indian-Style Chicken Curry"
          >
            <View style={styles.FrenchInner}>
              <Image
                style={styles.TouchImages}
                source={require("./assets/curry.jpg")}
              />
              <Text style={styles.text2}>Indian-Style Chicken Curry</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => navigation.navigate("Malai kofta")}
            title="Malai kofta"
          >
            <View style={styles.FrenchInner}>
              <Image
                style={styles.TouchImages}
                source={require("./assets/malai.jpg")}
              />
              <Text style={styles.text2}>Malai Kofta</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => navigation.navigate("Chicken Vindaloo")}
            title="Chicken Vindaloo"
          >
            <View style={styles.FrenchInner}>
              <Image
                style={styles.TouchImages}
                source={require("./assets/Vindaloo.jpg")}
              />
              <Text style={styles.text2}>Chicken Vindaloo</Text>
            </View>
          </TouchableHighlight>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

function biryani({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Header
        leftComponent={{
          icon: "chevron-left",
          color: "#2c3e50",
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: "Chicken Biryani",
          style: { color: "#2c3e50" },
        }}
        containerStyle={{ backgroundColor: "transparent" }}
      />
      <ImageBackground
        source={require("./assets/background1.jpg")}
        style={styles.container}
      >
        <ScrollView>
          <Image
            style={styles.images}
            source={require("./assets/biryani.jpeg")}
          />

          <View style={styles.FrenchInner}>
            <View style={styles.ingredients}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontSize: 30,
                  alignSelf: "center",
                }}
              >
                Ingredients
              </Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.ingredientstext}>
                1 cup whole milk yogurt
              </Text>
              <Text style={styles.ingredientstext}>Kosher salt </Text>
              <Text style={styles.ingredientstext}>
                2 teaspoons Kashmiri chili powder (see Cook's Note){" "}
              </Text>
              <Text style={styles.ingredientstext}>
                1/2 teaspoon ground turmeric{" "}
              </Text>
              <Text style={styles.ingredientstext}>
                1 1/2 cups vegetable oil{" "}
              </Text>
              <Text style={styles.ingredientstext}>
                2 large red onions, thinly sliced{" "}
              </Text>
              <Text style={styles.ingredientstext}>2 cups basmati rice </Text>
              <Text style={styles.ingredientstext}>8 whole cloves </Text>
              <Text style={styles.ingredientstext}>7 green cardamom pods </Text>
              <Text style={styles.ingredientstext}>3 bay leaves </Text>
              <Text style={styles.ingredientstext}>
                1/4 teaspoon whole black peppercorns{" "}
              </Text>
              <Text style={styles.ingredientstext}>
                2 large pinches saffron{" "}
              </Text>
              <Text style={styles.ingredientstext}>1/4 cup whole milk</Text>
              <Text style={styles.ingredientstext}>1/2 cinnamon stick </Text>
              <Text style={styles.ingredientstext}>
                1 teaspoon cumin seeds{" "}
              </Text>
              <Text style={styles.ingredientstext}>
                1 tablespoon finely grated ginger{" "}
              </Text>
              <Text style={styles.ingredientstext}>
                5 cloves garlic, finely grated{" "}
              </Text>
              <Text style={styles.ingredientstext}>
                2 medium tomatoes, chopped into 1/2-inch pieces{" "}
              </Text>
              <Text style={styles.ingredientstext}>
                1/2 cup cilantro leaves{" "}
              </Text>
              <Text style={styles.ingredientstext}>1/2 cup mint leaves </Text>
            </View>
          </View>
          <View style={styles.FrenchInner}>
            <WebView
              allowsFullscreenVideo
              allowsInlineMediaPlayback
              mediaPlaybackRequiresUserAction
              style={styles.video}
              source={{ uri: "https://www.youtube.com/embed/imuTZ3EwCWA" }}
            />
          </View>
          <View style={styles.prepBox}>
            <View style={styles.contents}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontSize: 30,
                  alignSelf: "center",
                }}
              >
                Preparation
              </Text>
              <Text style={{ fontSize: 15, alignSelf: "auto", margin: 5 }}>
                1.) Whisk together the yogurt, 3 tablespoons salt, chili powder
                and turmeric in a large bowl. Add the chicken and turn to coat.
                Let sit at room temperature until ready to use.
              </Text>
              <Text style={styles.ingredientstext}>
                2.) Meanwhile, heat the oil in a large heavy-bottomed saucepan
                over high heat until a deep-fry thermometer reaches 350 degrees
                F. Fry half of the onions, stirring frequently for even cooking,
                until deep golden brown, 10 to 12 minutes.
              </Text>
              <Text style={styles.ingredientstext}>
                3.) Wash, rinse and drain the rice in a bowl full of cold water
                until the water is almost clear, about 5 times. Bring the rice,
                1/4 cup salt, 4 of the cloves, 3 of the cardamom pods, 1 of the
                bay leaves, the peppercorns and 3 quarts of water to a boil in a
                large pot over high heat.
              </Text>
              <Text style={styles.ingredientstext}>
                4.) Position a rack in the lower third of the oven and preheat
                to 300 degrees F.
              </Text>
              <Text style={styles.ingredientstext}>
                5.) Stir together the saffron and milk in a small bowl until
                combined.
              </Text>
              <Text style={styles.ingredientstext}>
                6.) Heat 3 tablespoons of the reserved onion oil in a large
                Dutch oven over medium heat. Add the cinnamon stick, cumin seeds
                and the remaining 4 cloves, 4 cardamom pods and 2 bay leaves.
                Cook, stirring frequently, until the spices are very fragrant
                and beginning to brown, about 1 minute. Add the ginger and
                garlic and cook, stirring frequently, until very fragrant and
                beginning to stick to the bottom of the pan, about 1 minute.
              </Text>
              <Text style={styles.ingredientstext}>
                7.) Remove the chicken from the marinade and layer on top of the
                tomatoes. Top with the rice and spices and then drizzle the
                saffron milk over the rice.
              </Text>
              <Text style={styles.ingredientstext}>
                8.) Let sit covered for 10 minutes, then transfer the biryani to
                a large serving platter. Top with the remaining fried onions,
                cilantro and mint leaves.
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

function curry({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Header
        leftComponent={{
          icon: "chevron-left",
          color: "#2c3e50",
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: "Indian-Style Chicken Curry",
          style: { color: "#2c3e50" },
        }}
        containerStyle={{ backgroundColor: "transparent" }}
      />
      <ImageBackground
        source={require("./assets/background1.jpg")}
        style={styles.container}
      >
        <ScrollView>
          <Image style={styles.images} source={require("./assets/curry.jpg")} />

          <View style={styles.FrenchInner}>
            <View style={styles.ingredients}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontSize: 30,
                  alignSelf: "center",
                }}
              >
                Ingredients
              </Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.ingredientstext}>
                3 tablespoons coriander seeds
              </Text>
              <Text style={styles.ingredientstext}>
                1/4 teaspoon fenugreek seeds{" "}
              </Text>
              <Text style={styles.ingredientstext}>
                2 teaspoons peppercorns
              </Text>
              <Text style={styles.ingredientstext}>
                6 tablespoons ghee (or any vegetable cooking oil){" "}
              </Text>
              <Text style={styles.ingredientstext}>
                1 teaspoon mustard seedsl{" "}
              </Text>
              <Text style={styles.ingredientstext}>
                1 (2-inch) stick cinnamon
              </Text>
              <Text style={styles.ingredientstext}>
                3 1/2 pounds chicken (skinless, bone-in, cut into small pieces){" "}
              </Text>
              <Text style={styles.ingredientstext}>2 medium onions</Text>
              <Text style={styles.ingredientstext}>
                5 cloves garlic, cut into slivers
              </Text>
              <Text style={styles.ingredientstext}>
                Optional: 1 teaspoon finely grated ginger{" "}
              </Text>
              <Text style={styles.ingredientstext}>
                1 teaspoon turmeric powder (divided)
              </Text>
              <Text style={styles.ingredientstext}>
                3 medium tomatoes, chopped{" "}
              </Text>
              <Text style={styles.ingredientstext}>
                1 teaspoon red chili powder
              </Text>
              <Text style={styles.ingredientstext}>
                1 1/2 teaspoons Kosher salt{" "}
              </Text>
              <Text style={styles.ingredientstext}>
                1 tablespoon lemon juice{" "}
              </Text>
              <Text style={styles.ingredientstext}>
                1 400 ml can coconut milk
              </Text>
              <Text style={styles.ingredientstext}>1/4 cup water</Text>
              <Text style={styles.ingredientstext}>
                2 medium tomatoes, chopped into 1/2-inch pieces{" "}
              </Text>
              <Text style={styles.ingredientstext}>
                2 to 3 green chiles (fresh, split in half lengthwise){" "}
              </Text>
            </View>
          </View>
          <View style={styles.FrenchInner}>
            <WebView
              allowsFullscreenVideo
              allowsInlineMediaPlayback
              mediaPlaybackRequiresUserAction
              style={styles.video}
              source={{ uri: "https://www.youtube.com/embed/gXpiGKf7ixA" }}
            />
          </View>
          <View style={styles.prepBox}>
            <View style={styles.contents}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontSize: 30,
                  alignSelf: "center",
                }}
              >
                Preparation
              </Text>
              <Text style={{ fontSize: 15, alignSelf: "auto", margin: 5 }}>
                1.) Set a small cast-iron frying skillet over medium-to-high
                heat for 2 to 3 minutes.
              </Text>
              <Text style={styles.ingredientstext}>
                2.) Put the coriander seeds, the fenugreek seeds, and the black
                peppercorns in the skillet and dry-roast until slightly darker
                and fragrant.
              </Text>
              <Text style={styles.ingredientstext}>
                3.) Pour the ghee into a wide pan and set on medium-high heat.
              </Text>
              <Text style={styles.ingredientstext}>
                4.) When the ghee is hot, add in the black mustard seeds and the
                cinnamon stick.
              </Text>
              <Text style={styles.ingredientstext}>
                5.) As soon as the mustard seeds start to splutter, add the
                chicken pieces in a single layer. Be careful of not overcrowding
                the pan.
              </Text>
              <Text style={styles.ingredientstext}>
                6.) Brown the chicken pieces in as many batches as required. Set
                browned chicken aside.
              </Text>
              <Text style={styles.ingredientstext}>
                7.) Using the same pan in which you cooked the chicken, sauté
                the onions and garlic on medium heat.
              </Text>
              <Text style={styles.ingredientstext}>
                8.) Stir often until the onions are light brown.
              </Text>
              <Text style={styles.ingredientstext}>
                9.) If using, add the ginger, 1/2 teaspoon of the turmeric, and
                tomatoes. Stir and cook until the tomatoes have turned soft and
                mushy.
              </Text>
              <Text style={styles.ingredientstext}>
                10.) Reduce the heat and add the roasted spice mixture made
                earlier. Add the remaining 1/2 teaspoon of turmeric, the red
                chili powder, salt, and lemon juice. Stir well.
              </Text>
              <Text style={styles.ingredientstext}>
                13.) Return the chicken to the pan, pour the water and coconut
                milk mixture onto the chicken, and bring to a boil.
              </Text>
              <Text style={styles.ingredientstext}>
                14.) Cover, turn heat to low, and simmer for about 30 minutes,
                stirring every few minutes.
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

function kofta({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Header
        leftComponent={{
          icon: "chevron-left",
          color: "#2c3e50",
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: "Malai Kofta",
          color: "#2c3e50",
        }}
        containerStyle={{ backgroundColor: "transparent" }}
      />
      <ImageBackground
        source={require("./assets/background1.jpg")}
        style={styles.container}
      >
        <ScrollView>
          <Image style={styles.images} source={require("./assets/malai.jpg")} />

          <View style={styles.FrenchInner}>
            <View style={styles.ingredients}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontSize: 30,
                  alignSelf: "center",
                }}
              >
                Ingredients
              </Text>
            </View>
            <View style={styles.content}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 7,
                  fontSize: 25,
                  alignSelf: "center",
                }}
              >
                For Kofta
              </Text>
              <Text style={styles.ingredientstext}>
                3 potato / aloo, boiled and mashed
              </Text>
              <Text style={styles.ingredientstext}>
                ¾ cup paneer / cottage cheese, grated
              </Text>
              <Text style={styles.ingredientstext}>
                1 chilli, finely chopped
              </Text>
              <Text style={styles.ingredientstext}>
                2 tbsp coriander, finely chopped
              </Text>
              <Text style={styles.ingredientstext}>¼ tsp cumin powder</Text>
              <Text style={styles.ingredientstext}>½ tsp salt</Text>
              <Text style={styles.ingredientstext}>2 tbsp raisins</Text>
              <Text style={styles.ingredientstext}>
                2 tbsp cashew / kaju, chopped
              </Text>
              <Text style={styles.ingredientstext}>
                2 tbsp maida / plain flour
              </Text>
              <Text style={styles.ingredientstext}>oil for frying</Text>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 7,
                  fontSize: 25,
                  alignSelf: "center",
                }}
              >
                Onion Tomato Puree
              </Text>
              <Text style={styles.ingredientstext}>2 tbsp oil</Text>
              <Text style={styles.ingredientstext}>1 onion, sliced</Text>
              <Text style={styles.ingredientstext}>
                1 tsp ginger garlic paste
              </Text>
              <Text style={styles.ingredientstext}>
                1 red bell pepper, diced
              </Text>
              <Text style={styles.ingredientstext}>2 tomato, sliced</Text>
              <Text style={styles.ingredientstext}>2 tbsp cashew / kaju</Text>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 7,
                  fontSize: 25,
                  alignSelf: "center",
                }}
              >
                For Curry
              </Text>
              <Text style={styles.ingredientstext}>1 tbsp butter</Text>
              <Text style={styles.ingredientstext}>2 tbsp oil</Text>
              <Text style={styles.ingredientstext}>1 tsp cumin / jeera</Text>
              <Text style={styles.ingredientstext}>2 pod cardamom</Text>
              <Text style={styles.ingredientstext}>1 bay leaf</Text>
              <Text style={styles.ingredientstext}>1 inch cinnamon</Text>
              <Text style={styles.ingredientstext}>2 cloves garlic</Text>
              <Text style={styles.ingredientstext}>
                1 tsp kashmiri red chilli powder
              </Text>
              <Text style={styles.ingredientstext}>½ tsp turmeric</Text>
              <Text style={styles.ingredientstext}>¾ tsp coriander powder</Text>
              <Text style={styles.ingredientstext}>¼ tsp cumin powder</Text>
              <Text style={styles.ingredientstext}>1 tsp salt1 </Text>
              <Text style={styles.ingredientstext}>¼ cup cream / malai</Text>
              <Text style={styles.ingredientstext}>½ cup water</Text>
              <Text style={styles.ingredientstext}>
                1 tsp kasuri methi, crushed
              </Text>
              <Text style={styles.ingredientstext}>¼ tsp garam masala</Text>
            </View>
          </View>
          <View style={styles.FrenchInner}>
            <WebView
              allowsFullscreenVideo
              allowsInlineMediaPlayback
              mediaPlaybackRequiresUserAction
              style={styles.video}
              source={{ uri: "https://www.youtube.com/embed/c8Lh4vzSQG0" }}
            />
          </View>
          <View style={styles.prepBox}>
            <View style={styles.contents}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontSize: 30,
                  alignSelf: "center",
                }}
              >
                Preparation
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 7,
                  fontSize: 25,
                  alignSelf: "center",
                }}
              >
                Kofta Preparation
              </Text>
              <Text style={{ fontSize: 15, alignSelf: "center", margin: 5 }}>
                1.) firstly, in a large mixing bowl take 3 potato and ¾ cup
                paneer.
              </Text>
              <Text style={styles.ingredientstext}>
                2.) also add 1 chilli, 2 tbsp coriander, ¼ tsp cumin powder and
                ½ tsp salt.
              </Text>
              <Text style={styles.ingredientstext}>
                3.) add 2 tbsp raisins and 2 tbsp cashew to have crunchy bite in
                kofta.
              </Text>
              <Text style={styles.ingredientstext}>
                4.) mix well making sure all the spices are well combined
              </Text>
              <Text style={styles.ingredientstext}>
                5.) now add 2 tbsp maida and mix well forming a soft dough.
                maida helps to absorb moisture and bind the mixture well.
              </Text>
              <Text style={styles.ingredientstext}>
                6.) prepare a small ball sized kofta by greasing hand with oil.
              </Text>
              <Text style={styles.ingredientstext}>
                7.) deep fry on medium hot oil
              </Text>
              <Text style={styles.ingredientstext}>
                8.) stir occasionally, making sure the koftas are cooked
                uniformly.
              </Text>
              <Text style={styles.ingredientstext}>
                9.) fry until the kofta turn golden brown and crisp.
              </Text>
              <Text style={styles.ingredientstext}>
                10.) drain off the koftas and keep aside.
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontSize: 25,
                  alignSelf: "center",
                }}
              >
                Curry Preparation
              </Text>
              <Text style={{ fontSize: 15, alignSelf: "auto", margin: 5 }}>
                1.) firstly, in a pan heat 2 tbsp oil and saute 1 onion, 1 tsp
                ginger garlic paste.
              </Text>
              <Text style={styles.ingredientstext}>
                2.) saute until onions changes colour slightly.
              </Text>
              <Text style={styles.ingredientstext}>
                3.) further add 2 tomato and saute slightly.
              </Text>
              <Text style={styles.ingredientstext}>
                4.) now add 2 tbsp cashew and continue to saute until tomatoes
                soften completely.
              </Text>
              <Text style={styles.ingredientstext}>
                5.) cool completely and transfer to a blender.
              </Text>
              <Text style={styles.ingredientstext}>
                6.) blend to smooth paste adding water if required.
              </Text>
              <Text style={styles.ingredientstext}>
                7.) now filter the mixture to get rid of skin and seeds.
              </Text>
              <Text style={styles.ingredientstext}>
                8.) filter until silky smooth onion-tomato puree is attained.
                keep aside.
              </Text>
              <Text style={styles.ingredientstext}>
                9.) in a large kadai heat 1 tbsp butter and 2 tbsp oil.
              </Text>
              <Text style={styles.ingredientstext}>
                10.) saute 1 tsp cumin, 2 pod cardamom, 1 bay leaf, 1 inch
                cinnamon, 2 clove until it turns aromatic.
              </Text>
              <Text style={styles.ingredientstext}>
                11.) further keeping the flame on low, add 1 tsp chilli powder,
                ½ tsp turmeric, ¾ tsp coriander powder and ¼ tsp cumin powder.
              </Text>
              <Text style={styles.ingredientstext}>
                12.) saute until the spices turn aromatic.
              </Text>
              <Text style={styles.ingredientstext}>
                13.) further add in the prepared onion tomato puree, 1 tsp salt
                and mix well.
              </Text>
              <Text style={styles.ingredientstext}>
                14.) cover and cook until the mixture starts to thicken and oil
                separates from sides.
              </Text>
              <Text style={styles.ingredientstext}>
                15.) now add ¼ cup cream and mix on low flame until it's well
                combined.
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

function vindalo({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Header
        leftComponent={{
          icon: "chevron-left",
          color: "#2c3e50",
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: "Chicken Vindaloo",
          color: "#2c3e50",
        }}
        containerStyle={{ backgroundColor: "transparent" }}
      />
      <ImageBackground
        source={require("./assets/background1.jpg")}
        style={styles.container}
      >
        <ScrollView>
          <Image
            style={styles.images}
            source={require("./assets/Vindaloo.jpg")}
          />
          <View style={styles.FrenchInner}>
            <View style={styles.ingredients}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontSize: 30,
                  alignSelf: "center",
                }}
              >
                Ingredients
              </Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.ingredientstext}>
                2 teaspoons cumin seeds
              </Text>
              <Text style={styles.ingredientstext}>
                1 teaspoon mustard seeds
              </Text>
              <Text style={styles.ingredientstext}>
                1 teaspoon whole black peppercorns
              </Text>
              <Text style={styles.ingredientstext}>
                4 cardamom pods (seeds only)
              </Text>
              <Text style={styles.ingredientstext}>6 whole cloves</Text>
              <Text style={styles.ingredientstext}>
                1 teaspoon hot chili flakes
              </Text>
              <Text style={styles.ingredientstext}>
                1 teaspoon ground turmeric
              </Text>
              <Text style={styles.ingredientstext}>
                2 teaspoons soft brown sugar
              </Text>
              <Text style={styles.ingredientstext}>
                1 tablespoon ginger paste
              </Text>
              <Text style={styles.ingredientstext}>
                2 tablespoons tomato puree
              </Text>
              <Text style={styles.ingredientstext}>
                1 teaspoon garam masala
              </Text>
              <Text style={styles.ingredientstext}>
                1/2 cup apple cider vinegar
              </Text>
              <Text style={styles.ingredientstext}>
                4 free-range chicken breasts (cut into large bite-sized cubes)
              </Text>
              <Text style={styles.ingredientstext}>
                2 tablespoons vegetable oil
              </Text>
              <Text style={styles.ingredientstext}>
                1 medium onion (finely sliced)
              </Text>
              <Text style={styles.ingredientstext}>1 cup chicken stock</Text>
              <Text style={styles.ingredientstext}>
                4 tablespoons fresh cilantro leaves (chopped)
              </Text>
            </View>
          </View>
          <View style={styles.FrenchInner}>
            <WebView
              allowsFullscreenVideo
              allowsInlineMediaPlayback
              mediaPlaybackRequiresUserAction
              style={styles.video}
              source={{ uri: "https://www.youtube.com/embed/asUQn1m_WrA" }}
            />
          </View>
          <View style={styles.prepBox}>
            <View style={styles.contents}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontSize: 30,
                  alignSelf: "center",
                }}
              >
                Preparation
              </Text>
              <Text style={{ fontSize: 15, alignSelf: "auto", margin: 5 }}>
                1.) Heat a heavy skillet to hot but not smoking, add the cumin
                seeds, mustard seeds, peppercorn, cardamom seeds, and cloves.
                Toast the seeds for 30 to 45 seconds, constantly shaking the pan
                to prevent burning until the spices give off a delicious
                fragrance.
              </Text>
              <Text style={styles.ingredientstext}>
                2.) Tip the toasted seeds into a food processor or spice grinder
                and blitz to create a powder. Add the turmeric, sugar, ginger
                and garlic paste and whizz again. Finally, add the tomato puree,
                garam masala, and blitz again. You should now have a thick,
                pungent paste
              </Text>
              <Text style={styles.ingredientstext}>
                3.) Place the paste into a glass bowl, add the vinegar, and stir
                thoroughly. Add the cubed chicken and stir to coat all the
                pieces evenly. Cover and leave to marinate for 30 to 45 minutes
              </Text>
              <Text style={styles.ingredientstext}>
                4.) Heat a skillet large enough to hold all the ingredients over
                medium heat, add the oil and when hot, add the sliced onions and
                cook slowly to soften but not brown for 15 minutes. Add the
                chicken plus the marinade and the stock, and stir well. Cook
                over medium heat for 30 to 40 minutes until the chicken is
                cooked through and the sauce thickened. Taste and add salt and
                pepper to your liking. If the vindaloo is too vinegary, add soft
                dark brown sugar a little at a time to your taste.
              </Text>
              <Text style={styles.ingredientstext}>
                5.) Heat a skillet large enough to hold all the ingredients over
                medium heat, add the oil and when hot, add the sliced onions and
                cook slowly to soften but not brown for 15 minutes. Add the
                chicken plus the marinade and the stock, and stir well. Cook
                over medium heat for 30 to 40 minutes until the chicken is
                cooked through and the sauce thickened. Taste and add salt and
                pepper to your liking. If the vindaloo is too vinegary, add soft
                dark brown sugar a little at a time to your taste.
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

function FilipinoScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Header
        leftComponent={{
          icon: "menu",
          color: "#fff",
          onPress: () => navigation.toggleDrawer(),
        }}
        centerComponent={{ text: "Filipino Cuisine", style: { color: "#fff" } }}
        rightComponent={{
          icon: "home",
          color: "#fff",
          onPress: () => navigation.navigate("Home Screen"),
        }}
        containerStyle={{ backgroundColor: "#e67e22" }}
      />
      <ImageBackground
        source={require("./assets/background1.jpg")}
        style={styles.container}
      >
        <ScrollView>
          <TouchableHighlight
            onPress={() => navigation.navigate("Chicken Adobo")}
            title="Chicken Adobo"
          >
            <View style={styles.FrenchInner}>
              <Image
                style={styles.TouchImages}
                source={require("./assets/adobo.jpg")}
              />
              <Text style={styles.text2}>Chicken Adobo</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => navigation.navigate("Pork Sinigang")}
            title="Pork Sinigang"
          >
            <View style={styles.FrenchInner}>
              <Image
                style={styles.TouchImages}
                source={require("./assets/sinigang.jpg")}
              />
              <Text style={styles.text2}>Pork Sinigang</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => navigation.navigate("Tinolang Manok")}
            title="Tinolang Manok"
          >
            <View style={styles.FrenchInner}>
              <Image
                style={styles.TouchImages}
                source={require("./assets/tinola.jpg")}
              />
              <Text style={styles.text2}>Tinolang Manok</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => navigation.navigate("Pork Sisig")}
            title="Pork Sisig"
          >
            <View style={styles.FrenchInner}>
              <Image
                style={styles.TouchImages}
                source={require("./assets/sisig.jpg")}
              />
              <Text style={styles.text2}>Pork Sisig</Text>
            </View>
          </TouchableHighlight>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

function adobo({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Header
        leftComponent={{
          icon: "chevron-left",
          color: "#2c3e50",
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: "Chicken Adobo",
          color: "##2c3e50",
        }}
        containerStyle={{ backgroundColor: "transparent" }}
      />
      <ImageBackground
        source={require("./assets/background1.jpg")}
        style={styles.container}
      >
        <ScrollView>
          <Image style={styles.images} source={require("./assets/adobo.jpg")} />

          <View style={styles.FrenchInner}>
            <View style={styles.ingredients}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontSize: 30,
                  alignSelf: "center",
                }}
              >
                Ingredients
              </Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.ingredientstext}>
                2 lbs chicken cut into serving pieces
              </Text>
              <Text style={styles.ingredientstext}>
                3 pieces dried bay leaves
              </Text>
              <Text style={styles.ingredientstext}>
                8 tablespoons soy sauce
              </Text>
              <Text style={styles.ingredientstext}>
                4 tablespoons white vinegar
              </Text>
              <Text style={styles.ingredientstext}>
                5 cloves garlic crushed
              </Text>
              <Text style={styles.ingredientstext}>1 1/2 cups water</Text>
              <Text style={styles.ingredientstext}>
                3 tablespoons cooking oil
              </Text>
              <Text style={styles.ingredientstext}>1 teaspoon sugar</Text>
              <Text style={styles.ingredientstext}>
                1/4 teaspoon salt optional
              </Text>
              <Text style={styles.ingredientstext}>
                1 teaspoon whole peppercorn
              </Text>
            </View>
          </View>
          <View style={styles.FrenchInner}>
            <WebView
              allowsFullscreenVideo
              allowsInlineMediaPlayback
              mediaPlaybackRequiresUserAction
              style={styles.video}
              source={{ uri: "https://www.youtube.com/embed/mtyULaM6RfQ" }}
            />
          </View>
          <View style={styles.prepBox}>
            <View style={styles.contents}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontSize: 30,
                  alignSelf: "center",
                }}
              >
                Preparation
              </Text>
              <Text style={{ fontSize: 15, alignSelf: "auto", margin: 5 }}>
                1.) Combine chicken, soy sauce, and garlic in a large bowl. Mix
                well. Marinate the chicken for at least 1 hour. Note: the longer
                the time, the better
              </Text>
              <Text style={styles.ingredientstext}>
                2.) Heat a cooking pot. Pour cooking oil.
              </Text>
              <Text style={styles.ingredientstext}>
                3.) When the oil is hot enough, pan-fry the marinated chicken
                for 2 minutes per side.
              </Text>
              <Text style={styles.ingredientstext}>
                4.) Pour-in the remaining marinade, including garlic. Add water.
                Bring to a boil
              </Text>
              <Text style={styles.ingredientstext}>
                5.) Add dried bay leaves and whole peppercorn. Simmer for 30
                minutes or until the chicken gets tender
              </Text>
              <Text style={styles.ingredientstext}>
                6.) Add vinegar. Stir and cook for 10 minutes.
              </Text>
              <Text style={styles.ingredientstext}>
                7.) Put-in the sugar, and salt. Stir and turn the heat off.Serve
                hot. Share and Enjoy!
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

function sinigang({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Header
        leftComponent={{
          icon: "chevron-left",
          color: "#2c3e50",
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: "Pork Sinigang",
          color: "#2c3e50",
        }}
        containerStyle={{ backgroundColor: "transparent" }}
      />
      <ImageBackground
        source={require("./assets/background1.jpg")}
        style={styles.container}
      >
        <ScrollView>
          <Image
            style={styles.images}
            source={require("./assets/sinigang.jpg")}
          />

          <View style={styles.FrenchInner}>
            <View style={styles.ingredients}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontSize: 30,
                  alignSelf: "center",
                }}
              >
                Ingredients
              </Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.ingredientstext}>2 lbs pork belly</Text>
              <Text style={styles.ingredientstext}>
                1 bunch spinach or kang-kong
              </Text>
              <Text style={styles.ingredientstext}>
                3 tablespoons fish sauce
              </Text>
              <Text style={styles.ingredientstext}>
                12 pieces string beans sitaw, cut in 2 inch length
              </Text>
              <Text style={styles.ingredientstext}>
                2 pieces tomato quartered
              </Text>
              <Text style={styles.ingredientstext}>
                3 pieces chili or banana pepper
              </Text>
              <Text style={styles.ingredientstext}>
                1 tablespoons cooking oil
              </Text>
              <Text style={styles.ingredientstext}>2 quarts water</Text>
              <Text style={styles.ingredientstext}>1 piece onion sliced</Text>
              <Text style={styles.ingredientstext}>
                2 pieces taro gabi, quartered
              </Text>
              <Text style={styles.ingredientstext}>
                1 pack sinigang mix good for 2 liters water
              </Text>
            </View>
          </View>
          <View style={styles.FrenchInner}>
            <WebView
              allowsFullscreenVideo
              allowsInlineMediaPlayback
              mediaPlaybackRequiresUserAction
              style={styles.video}
              source={{ uri: "https://www.youtube.com/embed/4uKiWKqoZZk" }}
            />
          </View>
          <View style={styles.prepBox}>
            <View style={styles.contents}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontSize: 30,
                  alignSelf: "center",
                }}
              >
                Preparation
              </Text>
              <Text style={{ fontSize: 15, alignSelf: "auto", margin: 5 }}>
                1.) Heat the pot and put-in the cooking oil
              </Text>
              <Text style={styles.ingredientstext}>
                2.) Sauté the onion until its layers separate from each other
              </Text>
              <Text style={styles.ingredientstext}>
                3.) Add the pork belly and cook until outer part turns light
                brown
              </Text>
              <Text style={styles.ingredientstext}>
                4.) Put-in the fish sauce and mix with the ingredients
              </Text>
              <Text style={styles.ingredientstext}>
                5.) Pour the water and bring to a boil
              </Text>
              <Text style={styles.ingredientstext}>
                6.) Add the taro and tomatoes then simmer for 40 minutes or
                until pork is tender
              </Text>
              <Text style={styles.ingredientstext}>
                7.) Put-in the sinigang mix and chili
              </Text>
              <Text style={styles.ingredientstext}>
                8.) Add the string beans (and other vegetables if there are any)
                and simmer for 5 to 8 minutes
              </Text>
              <Text style={styles.ingredientstext}>
                9.) Put-in the spinach, turn off the heat, and cover the pot.
                Let the spinach cook using the remaining heat in the pot.
              </Text>
              <Text style={styles.ingredientstext}>
                10.) Serve hot. Share and enjoy!
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

function tinola({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Header
        leftComponent={{
          icon: "chevron-left",
          color: "#2c3e50",
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: "Chicken Tinola",
          color: "#2c3e50",
        }}
        containerStyle={{ backgroundColor: "transparent" }}
      />
      <ImageBackground
        source={require("./assets/background1.jpg")}
        style={styles.container}
      >
        <ScrollView>
          <Image
            style={styles.images}
            source={require("./assets/tinola.jpg")}
          />

          <View style={styles.FrenchInner}>
            <View style={styles.ingredients}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontSize: 30,
                  alignSelf: "center",
                }}
              >
                Ingredients
              </Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.ingredientstext}>
                2 lbs. chicken cut into serving pieces
              </Text>
              <Text style={styles.ingredientstext}>1 cup malunggay leaves</Text>
              <Text style={styles.ingredientstext}>
                1 cup hot pepper leaves
              </Text>
              <Text style={styles.ingredientstext}>
                1/8 teaspoon ground black pepper
              </Text>
              <Text style={styles.ingredientstext}>
                1 piece unripe papaya wedged
              </Text>
              <Text style={styles.ingredientstext}>6 cups water</Text>
              <Text style={styles.ingredientstext}>
                1 piece Knorr chicken cube
              </Text>
              <Text style={styles.ingredientstext}>1 piece onion sliced</Text>
              <Text style={styles.ingredientstext}>
                4 cloves garlic crushed and chopped
              </Text>
              <Text style={styles.ingredientstext}>
                3 thumbs ginger julienne
              </Text>
              <Text style={styles.ingredientstext}>
                3 tablespoons vegetable oil
              </Text>
            </View>
          </View>
          <View style={styles.FrenchInner}>
            <WebView
              allowsFullscreenVideo
              allowsInlineMediaPlayback
              mediaPlaybackRequiresUserAction
              style={styles.video}
              source={{ uri: "https://www.youtube.com/embed/pEMMBceYyMw" }}
            />
          </View>
          <View style={styles.prepBox}>
            <View style={styles.contents}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontSize: 30,
                  alignSelf: "center",
                }}
              >
                Preparation
              </Text>
              <Text style={{ fontSize: 15, alignSelf: "auto", margin: 5 }}>
                1.) Heat oil in a pot
              </Text>
              <Text style={styles.ingredientstext}>
                2.) Sauté garlic, onion, and ginger. Add the ground black
                pepper.
              </Text>
              <Text style={styles.ingredientstext}>
                3.) When the onion starts to get soft, add the chicken. Cook for
                5 minutes or until it turns light brown.
              </Text>
              <Text style={styles.ingredientstext}>
                4.) Pour the water. Let boil. Cover and then set the heat to
                low. Boil for 40 minutes.
              </Text>
              <Text style={styles.ingredientstext}>
                5.) Scoop and discard the scums and oil on the soup.
              </Text>
              <Text style={styles.ingredientstext}>
                6.) Add the Knorr chicken cube and chayote or papaya. Stir.
                Cover and cook for 5 minutes.
              </Text>
              <Text style={styles.ingredientstext}>
                7.) Put the malunggay and hot pepper leaves in the pot and pour
                the fish sauce in. Continue to cook for 2 minutes.
              </Text>
              <Text style={styles.ingredientstext}>
                8.) Transfer to a serving bowl. Serve.
              </Text>
              <Text style={styles.ingredientstext}>9.) Share and enjoy!</Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

function sisig({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Header
        leftComponent={{
          icon: "chevron-left",
          color: "#2c3e50",
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: "Pork Sisig",
          color: "#2c3e50",
        }}
        containerStyle={{ backgroundColor: "transparent" }}
      />
      <ImageBackground
        source={require("./assets/background1.jpg")}
        style={styles.container}
      >
        <ScrollView>
          <Image style={styles.images} source={require("./assets/sisig.jpg")} />

          <View style={styles.FrenchInner}>
            <View style={styles.ingredients}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontSize: 30,
                  alignSelf: "center",
                }}
              >
                Ingredients
              </Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.ingredientstext}>1 lb. pig ears</Text>
              <Text style={styles.ingredientstext}>1 1/2 lb pork belly</Text>
              <Text style={styles.ingredientstext}>1 piece onion minced</Text>
              <Text style={styles.ingredientstext}>
                3 tablespoons soy sauce
              </Text>
              <Text style={styles.ingredientstext}>
                1/4 teaspoon ground black pepper
              </Text>
              <Text style={styles.ingredientstext}>
                1 knob ginger minced (optional)
              </Text>
              <Text style={styles.ingredientstext}>
                3 tablespoons chili flakes
              </Text>
              <Text style={styles.ingredientstext}>
                1/2 teaspoon garlic powder
              </Text>
              <Text style={styles.ingredientstext}>
                1 piece lemon or 3 to 5 pieces calamansi
              </Text>
              <Text style={styles.ingredientstext}>
                ½ cup butter or margarine
              </Text>
              <Text style={styles.ingredientstext}>¼ lb chicken liver</Text>
              <Text style={styles.ingredientstext}>6 cups water</Text>
              <Text style={styles.ingredientstext}>
                3 tablespoons mayonnaise
              </Text>
              <Text style={styles.ingredientstext}>1/2 teaspoon salt</Text>
              <Text style={styles.ingredientstext}>1 piece egg (optional)</Text>
            </View>
          </View>

          <View style={styles.FrenchInner}>
            <WebView
              allowsFullscreenVideo
              allowsInlineMediaPlayback
              mediaPlaybackRequiresUserAction
              style={styles.video}
              source={{ uri: "https://www.youtube.com/embed/JTpEXG16Gys" }}
            />
          </View>

          <View style={styles.prepBox}>
            <View style={styles.contents}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontSize: 30,
                  alignSelf: "center",
                }}
              >
                Preparation
              </Text>
              <Text style={{ fontSize: 15, alignSelf: "auto", margin: 5 }}>
                1.) Pour the water in a pan and bring to a boil Add salt and
                pepper.
              </Text>
              <Text style={styles.ingredientstext}>
                2.) Put-in the pig’s ears and pork belly then simmer for 40
                minutes to 1 hour (or until tender).
              </Text>
              <Text style={styles.ingredientstext}>
                3.) Remove the boiled ingredients from the pot then drain excess
                water
              </Text>
              <Text style={styles.ingredientstext}>
                4.) Grill the boiled pig ears and pork belly until done
              </Text>
              <Text style={styles.ingredientstext}>
                5.) Chop the pig ears and pork belly into fine pieces
              </Text>
              <Text style={styles.ingredientstext}>
                6.) In a wide pan, melt the butter or margarine. Add the onions.
                Cook until onions are soft.
              </Text>
              <Text style={styles.ingredientstext}>
                7.) Put-in the ginger and cook for 2 minutes
              </Text>
              <Text style={styles.ingredientstext}>
                8.) Add the chicken liver. Crush the chicken liver while cooking
                it in the pan.
              </Text>
              <Text style={styles.ingredientstext}>
                9.) Add the chopped pig ears and pork belly. Cook for 10 to 12
                minutes
              </Text>
              <Text style={styles.ingredientstext}>
                10.) Put-in the soy sauce, garlic powder, and chili. Mix well
              </Text>
              <Text style={styles.ingredientstext}>
                11.) Add salt and pepper to taste
              </Text>
              <Text style={styles.ingredientstext}>
                12.) Put-in the mayonnaise and mix with the other ingredients
              </Text>
              <Text style={styles.ingredientstext}>
                13.) Transfer to a serving plate. Top with chopped green onions
                and raw egg.
              </Text>
              <Text style={styles.ingredientstext}>
                14.) Serve hot. Share and Enjoy (add the lemon or calamansi
                before eating)
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

function ChinaScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Header
        leftComponent={{
          icon: "menu",
          color: "#fff",
          onPress: () => navigation.toggleDrawer(),
        }}
        centerComponent={{ text: "Chinese Cuisine", style: { color: "#fff" } }}
        rightComponent={{
          icon: "home",
          color: "#fff",
          onPress: () => navigation.navigate("Home Screen"),
        }}
        containerStyle={{ backgroundColor: "#e67e22" }}
      />
      <ImageBackground
        source={require("./assets/background1.jpg")}
        style={styles.container}
      >
        <ScrollView>
          <TouchableHighlight
            onPress={() => navigation.navigate("Chinese Dumplings")}
            title="Chinese Dumplings"
          >
            <View style={styles.FrenchInner}>
              <Image
                style={styles.TouchImages}
                source={require("./assets/dumplings.jpg")}
              />
              <Text style={styles.text2}>Chinese Dumplings</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => navigation.navigate("Chinese Noodle Stir-Fry")}
            title="Chinese Noodle Stir-Fry"
          >
            <View style={styles.FrenchInner}>
              <Image
                style={styles.TouchImages}
                source={require("./assets/noodles.jpg")}
              />
              <Text style={styles.text2}>Chinese Noodle Stir-Fry</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => navigation.navigate("Chinese Sichuan Mapo Tofu")}
            title="Chinese Sichuan Mapo Tofu"
          >
            <View style={styles.FrenchInner}>
              <Image
                style={styles.TouchImages}
                source={require("./assets/tofu.jpg")}
              />
              <Text style={styles.text2}>Chinese Sichuan Mapo Tofu</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => navigation.navigate("Red Bean Soup")}
            title="Red Bean Soup"
          >
            <View style={styles.FrenchInner}>
              <Image
                style={styles.TouchImages}
                source={require("./assets/redBean.jpg")}
              />
              <Text style={styles.text2}>Red Bean Soup</Text>
            </View>
          </TouchableHighlight>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

function dumplings({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Header
        leftComponent={{
          icon: "chevron-left",
          color: "#2c3e50",
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: "Chinese Dumpling",
          color: "#2c3e50",
        }}
        containerStyle={{ backgroundColor: "transparent" }}
      />
      <ImageBackground
        source={require("./assets/background1.jpg")}
        style={styles.container}
      >
        <ScrollView>
          <Image
            style={styles.images}
            source={require("./assets/dumplings.jpg")}
          />

          <View style={styles.FrenchInner}>
            <View style={styles.ingredients}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontSize: 30,
                  alignSelf: "center",
                }}
              >
                Ingredients
              </Text>
            </View>
            <View style={styles.content}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 7,
                  fontSize: 25,
                  alignSelf: "center",
                }}
              >
                Make the Jiaozi Dough
              </Text>
              <Text style={styles.ingredientstext}>1/4 teaspoon salt</Text>
              <Text style={styles.ingredientstext}>
                3 cups all-purpose flour
              </Text>
              <Text style={styles.ingredientstext}>
                Up to 1 1/4 cups cold water
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 7,
                  fontSize: 25,
                  alignSelf: "center",
                }}
              >
                Make the Filling
              </Text>
              <Text style={styles.ingredientstext}>1 tablespoon soy sauce</Text>
              <Text style={styles.ingredientstext}>1 teaspoon salt</Text>
              <Text style={styles.ingredientstext}>
                1 tablespoon Chinese rice wine (or dry sherry)
              </Text>
              <Text style={styles.ingredientstext}>
                1/4 teaspoon freshly ground white pepper
              </Text>
              <Text style={styles.ingredientstext}>
                1 cup ground pork or beef{" "}
              </Text>
              <Text style={styles.ingredientstext}>
                3 tablespoons sesame oil
              </Text>
              <Text style={styles.ingredientstext}>
                1/2 scallion, finely minced
              </Text>
              <Text style={styles.ingredientstext}>
                1 1/2 cups finely shredded Napa cabbage
              </Text>
              <Text style={styles.ingredientstext}>
                4 tablespoons shredded bamboo shoots
              </Text>
              <Text style={styles.ingredientstext}>
                2 slices fresh ginger, finely minced
              </Text>
              <Text style={styles.ingredientstext}>
                1 clove garlic, finely minced
              </Text>
            </View>
          </View>
          <View style={styles.FrenchInner}>
            <WebView
              allowsFullscreenVideo
              allowsInlineMediaPlayback
              mediaPlaybackRequiresUserAction
              style={styles.video}
              source={{ uri: "https://www.youtube.com/embed/J6xFRlG5Qxg" }}
            />
          </View>
          <View style={styles.prepBox}>
            <View style={styles.contents}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontSize: 30,
                  alignSelf: "center",
                }}
              >
                Preparation
              </Text>
              <Text style={styles.ingredientstext}>
                1.) Stir the salt into the flour. Slowly stir in the cold water,
                adding as much as is necessary to form a smooth dough.
              </Text>
              <Text style={styles.ingredientstext}>
                2.) Knead the dough into a smooth ball.
              </Text>
              <Text style={styles.ingredientstext}>
                3.) Cover the dough and let it rest for at least 30 minutes.
              </Text>
              <Text style={styles.ingredientstext}>
                4.) While the dough is resting, make the filling; add the soy
                sauce, salt, rice wine, and white pepper to the meat, stirring
                in only one direction.
              </Text>
              <Text style={styles.ingredientstext}>
                5.) Add the remaining ingredients, stirring in the same
                direction, and mix well.
              </Text>
              <Text style={styles.ingredientstext}>
                6.) To make the dumpling dough, knead the dough until it forms a
                smooth ball.
              </Text>
              <Text style={styles.ingredientstext}>
                7.) Divide the dough into 60 pieces. Roll each piece out into a
                circle about 3 inches in diameter.
              </Text>
              <Text style={styles.ingredientstext}>
                8.) Place a small portion (about 1 level tablespoon) of the
                filling into the middle of each wrapper.
              </Text>
              <Text style={styles.ingredientstext}>
                9.) Add the chopped pig ears and pork belly. Cook for 10 to 12
                minutes
              </Text>
              <Text style={styles.ingredientstext}>
                10.) Fold the dough over the filling into a half moon shape and
                pinch the edges to seal. Continue with the remainder of the
                dumplings.
              </Text>
              <Text style={styles.ingredientstext}>
                11.) To cook, bring a large pot of water to a boil. Add half the
                dumplings, giving them a gentle stir so they don't stick
                together. Bring the water to a boil, and add 1/2 cup of cold
                water. Cover and repeat.
              </Text>
              <Text style={styles.ingredientstext}>
                12.) When the dumplings come to a boil for the third time, they
                are ready. Drain and remove.
              </Text>
              <Text style={styles.ingredientstext}>
                13.) If desired, they can be pan-fried at this point.
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

function noodles({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Header
        leftComponent={{
          icon: "chevron-left",
          color: "#2c3e50",
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: "Chinese Noodle Stir-Fry",
          color: "#2c3e50",
        }}
        containerStyle={{ backgroundColor: "transparent" }}
      />
      <ImageBackground
        source={require("./assets/background1.jpg")}
        style={styles.container}
      >
        <ScrollView>
          <Image
            style={styles.images}
            source={require("./assets/noodles.jpg")}
          />

          <View style={styles.FrenchInner}>
            <View style={styles.ingredients}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontSize: 30,
                  alignSelf: "center",
                }}
              >
                Ingredients
              </Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.ingredientstext}>2 teaspoons soy sauce</Text>
              <Text style={styles.ingredientstext}>
                1/4 teaspoon salt, or totaste
              </Text>
              <Text style={styles.ingredientstext}>1/2 teaspoon sugar</Text>
              <Text style={styles.ingredientstext}>
                1/4 teaspoon sesame oil
              </Text>
              <Text style={styles.ingredientstext}>
                1/8 teaspoon ground white pepper
              </Text>
              <Text style={styles.ingredientstext}>
                1/2 cup water, or stock
              </Text>
              <Text style={styles.ingredientstext}>
                2 tablespoons chili garlic sauce, Optional
              </Text>
              <Text style={styles.ingredientstext}>
                1 cup canned straw mushrooms, drained well
              </Text>
              <Text style={styles.ingredientstext}>200 grams egg noodles</Text>
              <Text style={styles.ingredientstext}>
                1 tablespoon oil, for frying
              </Text>
              <Text style={styles.ingredientstext}>
                2 cloves garlic, chopped finely
              </Text>
              <Text style={styles.ingredientstext}>
                1/2 teaspoon cooking wine
              </Text>
              <Text style={styles.ingredientstext}>
                2 tablespoons chives, chopped
              </Text>
            </View>
          </View>
          <View style={styles.FrenchInner}>
            <WebView
              allowsFullscreenVideo
              allowsInlineMediaPlayback
              mediaPlaybackRequiresUserAction
              style={styles.video}
              source={{ uri: "https://www.youtube.com/embed/V0zulzQeAfI" }}
            />
          </View>
          <View style={styles.prepBox}>
            <View style={styles.contents}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontSize: 30,
                  alignSelf: "center",
                }}
              >
                Preparation
              </Text>
              <Text style={styles.ingredientstext}>
                1.) Make the sauce: Mix all the ingredients together in a small
                bowl. Set aside until ready to use.
              </Text>
              <Text style={styles.ingredientstext}>
                2.) Briefly rinse straw mushrooms. Depending on the size or your
                liking, halve or quarter each. Set aside.
              </Text>
              <Text style={styles.ingredientstext}>
                3.) HIn a wok, bring about 4 cups of water to a boil. Blanch
                noodles in the boiling water over high heat until just soft,
                roughly 30 seconds to one minute. Immediately transfer the
                noodles to a colander and rinse them under running cold water.
                Shake and turn the noodles in the colander a couple of times to
                get rid of excess water. Drain.
              </Text>
              <Text style={styles.ingredientstext}>
                4.) Discard water in wok and wipe dry. Heat oil over medium
                heat, sauté garlic, toss in straw mushrooms, and stir-fry until
                lightly brown, about 30 seconds to one minute. Sprinkle wine on
                the side of the wok and give it a few quick stirs.
              </Text>
              <Text style={styles.ingredientstext}>
                5.)Pour prepared sauce in the center of the wok. Bring it to a
                simmer, then pour in noodles. Toss to combine. You need to
                constantly flip and mix to avoid sticking to the wok, making
                sure the noodles are evenly coated with the sauce. Add chives
                and give it a quick toss. Serve immediately.
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

function tofu({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Header
        leftComponent={{
          icon: "chevron-left",
          color: "#2c3e50",
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: "Chinese Sichuan Mapo Tofu",
          color: "#2c3e50",
        }}
        containerStyle={{ backgroundColor: "transparent" }}
      />
      <ImageBackground
        source={require("./assets/background1.jpg")}
        style={styles.container}
      >
        <ScrollView>
          <Image style={styles.images} source={require("./assets/tofu.jpg")} />

          <View style={styles.FrenchInner}>
            <View style={styles.ingredients}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontSize: 30,
                  alignSelf: "center",
                }}
              >
                Ingredients
              </Text>
            </View>
            <View style={styles.content}>
              <Text
                style={{ fontWeight: "bold", marginBottom: 7, fontSize: 25 }}
              >
                ----For The Sauce----
              </Text>
              <Text style={styles.ingredientstext}>
                3 Tbsp dou ban jiang (red fermented broad bean paste)
              </Text>
              <Text style={styles.ingredientstext}>1 Tbsp sugar</Text>
              <Text style={styles.ingredientstext}>
                1 Tbsp douchi (salted black bean)
              </Text>
              <Text style={styles.ingredientstext}>1 Tbsp cornstarch</Text>
              <Text style={styles.ingredientstext}>
                1 1/2 C water or chicken broth{" "}
              </Text>
              <Text
                style={{ fontWeight: "bold", marginBottom: 7, fontSize: 25 }}
              >
                ----For The Dish----
              </Text>
              <Text style={styles.ingredientstext}>1 Tbsp vegetable oil</Text>
              <Text style={styles.ingredientstext}>
                150 g (1/3 lb) lean ground pork
              </Text>
              <Text style={styles.ingredientstext}>
                1 large white onion, diced
              </Text>
              <Text style={styles.ingredientstext}>
                1 package medium firm tofu, cut into cubes
              </Text>
              <Text style={styles.ingredientstext}>
                1 tsp chili oil (optional, if you like more spice, add more, if
                not, omit)
              </Text>
              <Text style={styles.ingredientstext}>
                ¼ tsp ground Sichuan peppercorn (optional)
              </Text>
              <Text style={styles.ingredientstext}>
                chopped green onions (for garnish)
              </Text>
            </View>
          </View>

          <View style={styles.FrenchInner}>
            <WebView
              allowsFullscreenVideo
              allowsInlineMediaPlayback
              mediaPlaybackRequiresUserAction
              style={styles.video}
              source={{ uri: "https://www.youtube.com/embed/ZfsZwwrTFD4" }}
            />
          </View>
          <View style={styles.prepBox}>
            <View style={styles.contents}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontSize: 30,
                  alignSelf: "center",
                }}
              >
                Preparation
              </Text>
              <Text style={styles.ingredientstext}>
                1.) In a small bowl, mix together the dou ban jiang (red broad
                bean paste), sugar, and douchi (salted black bean). Set aside.
              </Text>
              <Text style={styles.ingredientstext}>
                2.) In another small bowl, mix together 1 Tbsp cornstarch and
                1/2 C water or chicken broth. Mix until the cornstarch is
                dissolved.
              </Text>
              <Text style={styles.ingredientstext}>
                3.) Heat a large wok over high heat. Add in 1 Tbsp oil. Add in
                the ground pork and using a spatula, break it up into small
                pieces. Fry for about 2 minutes. Add in the diced onion and fry
                with the pork until fragrant, about another 3-4 minutes.
              </Text>
              <Text style={styles.ingredientstext}>
                4.) Next, add the cubed tofu to the pork mixture and stir gently
                to mix.
              </Text>
              <Text style={styles.ingredientstext}>
                5.) Add the remaining 1 C of water/chicken broth, along with the
                dou ban jiang sauce mixture and stir to coat the pork and tofu.
              </Text>
              <Text style={styles.ingredientstext}>
                6.) Bring the mixture up to a boil, and then add in the
                cornstarch slurry. The sauce will thicken and coat all of the
                pork, tofu and onion.
              </Text>
              <Text style={styles.ingredientstext}>
                7.) Add in chili oil and ground Sichuan peppercorn, if you wish.
              </Text>
              <Text style={styles.ingredientstext}>
                8.) When the mapo tofu comes to a simmer, remove it from heat
                and garnish with chopped green onions.
              </Text>
              <Text style={styles.ingredientstext}>
                9.) Serve hot over steamed rice.
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

function soup({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Header
        leftComponent={{
          icon: "chevron-left",
          color: "#2c3e50",
          onPress: () => navigation.goBack(),
        }}
        centerComponent={{
          text: "Red Bean Soup",
          color: "#2c3e50",
        }}
        containerStyle={{ backgroundColor: "transparent" }}
      />
      <ImageBackground
        source={require("./assets/background1.jpg")}
        style={styles.container}
      >
        <ScrollView>
          <Image
            style={styles.images}
            source={require("./assets/redBean.jpg")}
          />

          <View style={styles.FrenchInner}>
            <View style={styles.ingredients}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontSize: 30,
                  alignSelf: "center",
                }}
              >
                Ingredients
              </Text>
            </View>

            <View style={styles.content}>
              <Text style={styles.ingredientstext}>
                1 cup (200g) adzuki beans (azuki or red mung beans
              </Text>
              <Text style={styles.ingredientstext}>
                1 piece (2g) chenpi dried mandarin peel
              </Text>
              <Text style={styles.ingredientstext}>
                6 cups (1500ml) cold water
              </Text>
              <Text style={styles.ingredientstext}>
                2 pieces (130g) brown sugar in pieces
              </Text>
              <Text style={styles.ingredientstext}>2 pinches kosher salt</Text>
            </View>
          </View>

          <View style={styles.FrenchInner}>
            <WebView
              allowsFullscreenVideo
              allowsInlineMediaPlayback
              mediaPlaybackRequiresUserAction
              style={styles.video}
              source={{ uri: "https://www.youtube.com/embed/nbZ1QPT9wsU" }}
            />
          </View>

          <View style={styles.prepBox}>
            <View style={styles.contents}>
              <Text
                style={{
                  fontWeight: "bold",
                  marginBottom: 15,
                  fontSize: 30,
                  alignSelf: "center",
                }}
              >
                Preparation
              </Text>
              <Text style={styles.ingredientstext}>
                1.) Rehydrate chenpi in cold water for 15 - 20 minutes. Use a
                spoon to scrub off chenpi’s white bitter part. Pick and rinse 1
                cup (200g) adzuki beans in cold tap water. Drain well.
              </Text>
              <Text style={styles.ingredientstext}>
                2.) Add 1 cup (200g) cleaned adzuki beans, 1 piece (2g) chenpi,
                2 pinches of kosher salt, and 2 pieces (130g) brown sugar in
                pieces in Instant Pot. Then, add in 6 cups cold water (1500ml).
                Pressure Cook at High Pressure for 30 minutes + 20 minutes
                Natural Release
              </Text>
              <Text style={styles.ingredientstext}>
                3.) Bring the red bean soup to a boil using the "Saute High"
                function. Let it boil for 15 - 20 minutes until desired
                thickness. Stir occasionally. You can stir and boil as long as
                required until it reaches your desired thickness (Check out the
                thickness comparison photo from our experiment). Taste and add
                in more sugar if desired. For reference: we added roughly 2 more
                tbsp (30g) sugar.
              </Text>
              <Text style={styles.ingredientstext}>
                4.) You can serve red bean soup hot, warm, or cold. A
                deliciously satisfying dessert for all types of weather! You can
                also drizzle some coconut milk for another layer of flavor.
                Enjoy~
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator headerMode="none">
        <Tab.Screen name="Home Screen" component={PreNav} />
        <Tab.Screen name="French Cuisine" component={French} />
        <Tab.Screen name="Indian Cuisine" component={IndianScreen} />
        <Tab.Screen name="Filipino Cuisine" component={FilipinoScreen} />
        <Tab.Screen name="Chinese cuisine" component={ChinaScreen} />

        <Tab.Screen name="Ratatoulie" component={ratatoulie} />
        <Tab.Screen name="Chicken Cordon Bleu Pasta" component={cordon} />
        <Tab.Screen name="Vanilla Soufflé" component={souffle} />
        <Tab.Screen name="Crêpes" component={crepes} />
        <Tab.Screen name="Chicken Biryani" component={biryani} />
        <Tab.Screen name="Indian-Style Chicken Curry" component={curry} />
        <Tab.Screen name="Malai kofta" component={kofta} />
        <Tab.Screen name="Chicken Vindaloo" component={vindalo} />
        <Tab.Screen name="Chicken Adobo" component={adobo} />
        <Tab.Screen name="Pork Sinigang" component={sinigang} />
        <Tab.Screen name="Tinolang Manok" component={tinola} />
        <Tab.Screen name="Pork Sisig" component={sisig} />
        <Tab.Screen name="Chinese Dumplings" component={dumplings} />
        <Tab.Screen name="Chinese Noodle Stir-Fry" component={noodles} />
        <Tab.Screen name="Chinese Sichuan Mapo Tofu" component={tofu} />
        <Tab.Screen name="Red Bean Soup" component={soup} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Tab = createStackNavigator();
const PreNav = () => (
  <Drawer.Navigator
    drawerContentOptions={{
      activeTintColor: "#e67e22",
    }}
  >
    <Drawer.Screen
      name="Home Screen"
      component={HomeScreen}
      options={{
        drawerIcon: () => (
          <MaterialIcons size={30} name="restaurant-menu"></MaterialIcons>
        ),
      }}
    />
    <Drawer.Screen
      name="French Cuisine"
      component={French}
      options={{
        drawerIcon: () => (
          <MaterialCommunityIcons
            size={30}
            name="food-croissant"
          ></MaterialCommunityIcons>
        ),
      }}
    />
    <Drawer.Screen
      name="Indian Cuisine"
      component={IndianScreen}
      options={{
        drawerIcon: () => (
          <MaterialCommunityIcons
            size={30}
            name="food-variant"
          ></MaterialCommunityIcons>
        ),
      }}
    />
    <Drawer.Screen
      name="Filipino Cuisine"
      component={FilipinoScreen}
      options={{
        drawerIcon: () => (
          <MaterialCommunityIcons
            size={30}
            name="food-fork-drink"
          ></MaterialCommunityIcons>
        ),
      }}
    />
    <Drawer.Screen
      name="Chinese Cuisine"
      component={ChinaScreen}
      options={{
        drawerIcon: () => (
          <MaterialCommunityIcons
            size={30}
            name="food-apple"
          ></MaterialCommunityIcons>
        ),
      }}
    />
  </Drawer.Navigator>
);

<Drawer.Navigator>
  <Drawer.Screen
    name="Home Screen"
    component={HomeScreen}
    options={{
      drawerIcon: () => (
        <MaterialIcons size={30} name="restaurant-menu"></MaterialIcons>
      ),
    }}
  />
  <Drawer.Screen
    name="French Cuisine"
    component={French}
    options={{
      drawerIcon: () => (
        <MaterialCommunityIcons
          size={30}
          name="food-croissant"
        ></MaterialCommunityIcons>
      ),
    }}
  />
  <Drawer.Screen
    name="Indian Cuisine"
    component={IndianScreen}
    options={{
      drawerIcon: () => (
        <MaterialCommunityIcons
          size={30}
          name="food-variant"
        ></MaterialCommunityIcons>
      ),
    }}
  />
  <Drawer.Screen
    name="Filipino Cuisine"
    component={FilipinoScreen}
    options={{
      drawerIcon: () => (
        <MaterialCommunityIcons
          size={30}
          name="food-fork-drink"
        ></MaterialCommunityIcons>
      ),
    }}
  />
  <Drawer.Screen
    name="Chinese Cuisine"
    component={ChinaScreen}
    options={{
      drawerIcon: () => (
        <MaterialCommunityIcons
          size={30}
          name="food-apple"
        ></MaterialCommunityIcons>
      ),
    }}
  />
</Drawer.Navigator>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 25,
    color: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 300,
    top: 15,
  },
  BackgroundInner: {
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    width: 400,
    backgroundColor: "rgba(255, 255 , 255, .7)",
    borderRadius: 100,
    padding: 5,
    top: 40,
  },
  InnerBody: {
    justifyContent: "center",
    height: "auto",
    width: 400,
    backgroundColor: "rgba(255, 255 , 255, .7)",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    top: "10%",
  },

  about: {
    justifyContent: "center",
    height: 660,
    width: "100%",
    backgroundColor: "rgba(255, 255 , 255, .7)",
    padding: 20,
  },
  FrenchInner: {
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    width: "100%",
    backgroundColor: "rgba(255, 255 , 255, 0.7)",
    marginBottom: 10,
  },
  TouchImages: {
    width: 400,
    height: 400,
  },
  HomeImages: {
    width: 350,
    height: 350,
    margin: 20,
    top: 50,
  },
  images: {
    width: "100%",
    height: 340,
    top: "auto",
  },
  scrollContainer: {
    textAlign: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    backgroundColor: "rgba(255, 255 , 255, 0.7)",
    padding: 15,
  },
  scrollImage: {
    width: 200,
    height: 200,
    margin: 20,
  },
  ratat: {
    alignItems: "center",
    justifyContent: "center",
    height: 390,
    width: 400,
    backgroundColor: "rgba(255, 255 , 255, 0.7)",
    padding: 5,
    borderRadius: 50,
    marginBottom: 10,
  },
  prepBox: {
    textAlign: "right",
    justifyContent: "center",
    height: "auto",
    width: "auto",
    backgroundColor: "rgba(255, 255 , 255, 0.7)",

    padding: 20,
  },
  text2: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
    color: "#d35400",
  },
  video: {
    width: 401,
    height: 230,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "center",
    margin: 5,
    fontSize: 30,
  },

  content: {
    justifyContent: "center",
    padding: 4,
    borderColor: "#e67e22",
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: 10,
    bottom: 10,
    right: 3,
    width: "95%",
  },
  contents: {
    justifyContent: "center",
    padding: 4,
    borderColor: "#e67e22",
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: 10,
    bottom: 10,
    left: 4.5,
    width: "95%",
  },
  ingredientstext: {
    padding: 4,
    fontSize: 15,
  },
  ImageText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    fontStyle: "italic",
  },
  icon1: {
    margin: 25,
  },
  icon2: { margin: 25 },
  icon3: { margin: 25 },
  icon4: { margin: 25 },

  ImageOverlay: {
    width: 350,
    height: 350,
    marginRight: 8,
    borderRadius: 10,
    position: "absolute",
    backgroundColor: "#000",
    opacity: 0.3,
  },
  imageText: {
    position: "absolute",
    color: "white",
    marginTop: 4,
    left: 30,
    bottom: 40,
    fontSize: 20,
  },
  imageRating: {
    position: "absolute",
    left: 30,
    bottom: 70,
  },
});
