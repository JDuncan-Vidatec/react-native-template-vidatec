import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

import './rn-addons';

// import stories
configure(() => {
  require('./stories');
}, module);

// Refer to https://github.com/storybooks/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

class StorybookUIHMRRoot extends Component {
  return (
    <View style={{ backgroundColor: 'grey', flex: 1 }}>
      <StorybookUIRoot />
    </View>
  );
}

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent('HelloWorld', () => StorybookUIHMRRoot);
export default StorybookUIHMRRoot;
