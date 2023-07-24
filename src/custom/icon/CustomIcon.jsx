import React from 'react';
import { icons } from 'lucide-react-native'

function CustomIcon ({ name, color, size, }) {
    const LucideIcon = icons[name];

    if (!LucideIcon) {
      return null;
    }

    return <LucideIcon color={color} size={size} />;
}

export default CustomIcon;