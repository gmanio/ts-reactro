import * as React from 'react';
import { apiFetcher } from '../../../../common/apiHelper';

export default class Search extends React.PureComponent {
  private state: { list: any[] };

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
    const data = await apiFetcher('/api/employees/search?name=' + name);
    console.log(data);
    this.setState({ list: data });
  }

  render = () => {
    const list = this.state.list;

    return (
      <>
        <input type="text" onKeyUp={this.handleKeyup}/>

        <ul>
          {list ? list.map(person => (<li key={person.emp_no}>{person.first_name}</li>)) : ''}
        </ul>
      </>
    )
  }
}
