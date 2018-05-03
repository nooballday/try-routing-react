import React, { Component } from 'react';
import TinyMCE from 'react-tinymce';

class Editor extends Component{
  constructor(){
    super();
    this.state = {editor:null};
  }

  componentDidMount(){
  }

  componentWillUnmount(){

  }

  render(){
    return(
      <div className="container">
        <TinyMCE
            content="<p>This is the initial content of the editor</p>"
            config={{
              plugins: 'link image code',
              toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
            }}
            onChange={this.handleEditorChange}
          />
      </div>
    )
  }
}

export default Editor;
