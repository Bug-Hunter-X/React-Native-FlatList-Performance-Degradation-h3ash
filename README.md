# React Native FlatList Performance Issue

This repository demonstrates a common performance problem encountered when using `FlatList` in React Native with extensive datasets. The initial implementation renders all items simultaneously, leading to significant lag and potential application crashes.  The solution showcases improved performance using techniques like windowing and virtualization.