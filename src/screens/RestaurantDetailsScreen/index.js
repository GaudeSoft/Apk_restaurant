import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import DishListItem from '../../components/DishListItem';
import Header  from './Header';
import styles from "./style";
import {Ionicons} from "@expo/vector-icons";
const restaurant = restaurants[0];
const RestaurantDetailsPage = () =>{
    return(
        <View style={styles.page}>
            <FlatList 
                ListHeaderComponent={() => <Header restaurant={restaurant}/>}
                data = {restaurant.dishes}
                renderItem={({item}) => <DishListItem dish = {item}/>}  
            />
            <Ionicons 
                name="arrow-back-circle"
                size={45}
                color="white"
                style={styles.iconContainer}
            />
        </View>
    )
}


export default RestaurantDetailsPage;