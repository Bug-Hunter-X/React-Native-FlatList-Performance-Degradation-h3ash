The solution involves implementing windowing or virtualization to improve performance.  Here's an example using `windowSize`:
```javascript
<FlatList
  data={largeArray}
  renderItem={({item}) => <Text>{item.name}</Text>}
  keyExtractor={(item) => item.id}
  windowSize={10} // Adjust as needed
/>
```
Alternatively, consider using a library like react-native-virtualized-list for more advanced virtualization features.