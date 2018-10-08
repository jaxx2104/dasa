import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Blink from './Blink';

storiesOf('Blink', module)
  .add('blink', () => (
    <Blink>
      😀 😎 👍 💯
    </Blink>
  ));
