import React from "react";
import { createDrawerNavigator } from "@react-navigator/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screem name="Profile" component={Profile} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;