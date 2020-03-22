import React, { Component } from "react";
import axios from "axios";
import { Form, Button, Dropdown } from 'semantic-ui-react'


class CreateArticle extends Component {
  state = {
    message: ""
  };

  onCreate = async e => {
    e.preventDefault();
    let response = await axios.post(
      "/articles",
      {
        article: {
          title: e.target.title.value,
          lead: e.target.lead.value,
          content: e.target.content.value,
          category: e.target.category.value
        }
      },
      { headers: { "Content-Type": "application/json" } }
    );
    if (response.status === 200) {
      this.setState({ message: response.data.message })
    } else {
      this.setState({ message: response.data.error })
    }
  };

  render() {
    let category = [
      { key: 'latest_news', text: 'Latest News', value: 'latest_news' },
      { key: 'Tech', text: 'Tech', value: 'tech' },
      { key: 'Food', text: 'Food', value: 'food' },
      { key: 'Sports', text: 'Sports', value: 'sports' },
      { key: 'Culture', text: 'Culture', value: 'culture' },
    ]
    return (
      <>
        <Form id="new-article-form" onSubmit={this.onCreate}>
          Title <Form.Input id="title" placeholder="Title" key="title" width={6} />
          Lead
          <Form.Input id="lead" placeholder="Lead" key="lead" width={6} />
          Content
          <Form.TextArea id="content" placeholder="Content" key="content" width={6} />
          <Dropdown options={category} placeholder="Categories" id="category-selector" key="category" name="category" width={6} >
            {/* <option value="latest_news">Latest News</option>
            <option value="tech">Tech</option>
            <option value="food">Food</option>
            <option value="sports">Sports</option>
            <option value="culture">Culture</option> */}
          </Dropdown>
          <Button id="create-article-button" type="submit">
            Create Article
          </Button>
        </Form>
        <p id="message">{this.state.message}</p>
      </>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     createArticle: bindActionCreators(createArticle, dispatch)
//   };
// };

// CreateArticle.PropTypes = {
//   onSubmitHandler: PropTypes
// }

export default CreateArticle;
