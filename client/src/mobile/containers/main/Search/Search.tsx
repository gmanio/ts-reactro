import * as React from 'react';
import styled from 'styled-components';
import { apiFetcher } from '../../../../common/apiHelper';

interface SearchProps {
  /* This prop is optional, since TypeScript won't know that it's passed by the wrapper */
  className?: string;
}

export default class Search extends React.PureComponent<SearchProps> {
  state: { list: any[] };

  constructor(props) {
    super(props);

    this.state = {
      list: []
    };
  }

  componentDidMount() {
  }

  handleKeyup = async (e) => {
    const name = e.currentTarget.value;
    if (name) {
      this.setState({ list: await apiFetcher('/api/employees/search?name=' + name) });
    }
  }

  render = () => {
    const list = this.state.list;
    let elList;

    if (list) {
      elList = list.map(person => {
        console.log(person);
        return (<li key={person.emp_no}>{person.first_name} {person.last_name}</li>)
      });
    }

    return (
      <div className={this.props.className}>
        <input type="text" onKeyUp={this.handleKeyup}/>
        <ul>
          {elList}
        </ul>
      </div>
    )
  }
}
