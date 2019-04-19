import React, { createContext, PureComponent } from 'react';

const AppContext = createContext({}); // Context 를 만듭니다.

// Context 안에는 Provider 와 Consumer 라는게 존재합니다.
// 이 둘은, Context 를 이용하기 위해 필요한 컴포넌트들입니다.
// Consumer 는 나중에 내보내줄 때 편하도록 SampleConsumer 라고 부르도록 설정했습니다.
const { Provider, Consumer: AppConsumer } = AppContext;


// Provider 에서 state 를 사용하기 위해서 컴포넌트를 새로 만들어줍니다.
class AppProvider extends PureComponent {
  state = {
    value: '기본값입니다'
  }

  actions = {
    setValue: (value: string) => {
      this.setState({ value });
    }
  }

  render () {
    const { state, actions } = this;
    // Provider 내에서 사용할 값은, "value" 라고 부릅니다.
    // 현재 컴포넌트의 state 와 actions 객체를 넣은 객체를 만들어서,
    // Provider 의 value 값으로 사용하겠습니다.
    const value = { state, actions };
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    )
  }
}

export {
  AppContext,
  AppProvider,
  AppConsumer
};
