import React from 'react';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import { EditorData } from '../data/dummy';
import { Header } from '../Components';

const Editor = () => {
  return (
    <div className="pt-2 dark:bg-zinc-800 h-full">
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-[#33373E] rounded-3xl">
        <Header category="App" title="Editor"/>
        <RichTextEditorComponent>
          <EditorData/>
          <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]}/>
        </RichTextEditorComponent>
      </div>
    </div>
  )
}

export default Editor