# ActionSheet


## 测试插入视频
[![Alt text for your video](https://img.youtube.com/vi/T-D1KVIuvjA/0.jpg)](http://www.youtube.com/watch?v=T-D1KVIuvjA)

## 测试插入在线Demo
<iframe src="http://dabbott.github.io/react-native-web-player/" height="600" width="800" allowfullscreen="" frameborder="0"></iframe>

## 测试一下代码高亮

``` jsx
export default class ActionSheet extends Component {
  static _id

  static show (choices) {
    ActionSheet._id = PopupStub.addPopup(<ActionSheet choices={choices} />, {
      mask: true,
      zIndex: 300,
      delay: 0,
      duration: 100,
      animation: {from: {translateY: 210}, to: {translateY: 0}},
      easing: 'ease',
      position: 'bottom',
      // or the same, 100% width at the bottom of screen
      // position: 'none',
      // wrapperStyle: {position: 'absolute', left: 0, right: 0, bottom: 0}
    })
  }

  static hide () {
    PopupStub.removePopup(ActionSheet._id)
  }

  render () {
    // as for demo, we ignore property choices here
    return (
      <View style={{backgroundColor: 'gray'}}>
        <View style={styles.btn}>
          <Text style={{fontSize: 16}}>Option 1</Text>
        </View>
        <View style={[styles.btn, styles.line]}>
          <Text style={{fontSize: 16}}>Option 2</Text>
        </View>
        <View style={[styles.btn, styles.line]}>
          <Text style={{fontSize: 16}}>Option 3</Text>
        </View>

        <View style={[styles.btn, {marginTop: 10}]}>
          <Text style={{fontSize: 16, color: 'gray'}} onPress={() => ActionSheet.hide()}>Cancel</Text>
        </View>
      </View>
    )
  }
}
```
