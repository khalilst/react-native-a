# React Native Hyperlink
Hyperlink Component for React Native (`<A>` Native tag) .

## Installation

`npm install react-native-a`

## Usage

```
...
import A from 'react-native-a';
...
render() {
  return (
    <View>
      <Text>Made With ❤️ By <A>Softek.ir</A></Text>
    </View>
  );
}
````


1. Simplest without `href` but `URL` insdie text (default blue hyperlink)
`<A>Example.com</A>`

2. With `href`:

`<A class="example.com">Example</A>`<br/>
`<A class="http://example.com">Example.com</A>`<br/>
`<A class="https://example.com">Example</A>`<br/>

3. With `style`:
`<A style={{fontWeight: 'bold'}}>Example.com</A>`<br/>

##

Made with <span style="color: red; font-size: 16px;">:heart:</span> by <a href="https://softek.ir">Softek</a>
