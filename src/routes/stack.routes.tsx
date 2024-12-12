import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";
import { Form } from "../screens/Form/Form";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Navigator>
            <Screen name="Home" component={Home} options={{headerShown:false }} />
            <Screen name="Form" component={Form} options={{title: 'Formulário'}} />
        </Navigator>
    );
}