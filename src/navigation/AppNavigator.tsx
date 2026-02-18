import React, { useState } from 'react'
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';

type Screen = 'Home' | 'Search' | 'Details';

interface Route {
  name: Screen;
  params?: any;
}

const AppNavigator = () => {
  const [stack, setStack] = useState<Route[]>([{ name: 'Home' }]);

  const current = stack[stack.length - 1];

  const push = (route: Route) => setStack([...stack, route]);
  const pop = () => setStack(stack.slice(0, stack.length - 1));

  console.log("AppNavigator rendered, current:", current.name);

  let ScreenComponent: React.FC<any> = HomeScreen;
  if (current.name === 'Search') ScreenComponent = SearchScreen;
  if (current.name === 'Details') ScreenComponent = MovieDetailsScreen;

  return <ScreenComponent push={push} pop={pop} params={current.params} />;
}

export default AppNavigator;
