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


1. Simplest usage without `href` but `URL` inside text (default blue hyperlink)<br/>
`<A>Example.com</A>`

2. With `href`:<br/>
`<A href="example.com">Example</A>`<br/>
`<A href="http://example.com">Example.com</A>`<br/>
`<A href="https://example.com">Example</A>`<br/>

3. With `style`:<br/>
`<A style={{fontWeight: 'bold'}}>Example.com</A>`

##

Made with <span style="color: red; font-size: 16px;">:heart:</span> by <a href="https://softek.ir">Softek</a>
