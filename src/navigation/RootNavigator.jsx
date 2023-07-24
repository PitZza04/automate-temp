import React, { 
    useState, 
    useEffect 
} from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { CustomLoading } from "../custom";
import { LandingScreen, HomeScreen } from "../screens";

function RootNavigator () {

    const Stack = createStackNavigator();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }, []);

    return isLoading ? (
        <CustomLoading />
    ) : (
        <Stack.Navigator initialRouteName={"Landing"}>
            <Stack.Group>
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="Landing"
                    component={LandingScreen}
                >
                </Stack.Screen>
            </Stack.Group>

            <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="Home"
                    component={HomeScreen}
                >
                </Stack.Screen>
        </Stack.Navigator>
    )

}

export default RootNavigator