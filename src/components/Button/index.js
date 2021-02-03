import React from 'react';
import { Button as BaseButton } from 'antd';

import './Button.scss';

function Button({ children }) {
  return <BaseButton>{children}</BaseButton>;
}

export default Button;
