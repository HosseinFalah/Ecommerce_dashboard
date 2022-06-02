import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { Header } from '../Components';

const change = (args) => {
  document.querySelector("#preview").style.backgroundColor = args.currentValue.hex;
}

const ColorPicker = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="ColorPicker"/>
      <div className="text-center">
        <div id="preview"/>
        <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <ColorPickerComponent
            id="inline-pallete"
            mode="Palette"
            modeSwitcher={false}
            inline
            showButtons={false}
            change={change}
            />
          <ColorPickerComponent
            id="inline-Picker"
            mode="Picker"
            modeSwitcher={false}
            inline
            showButtons={false}
            change={change}
            />
        </div>
      </div>
    </div>
  )
}

export default ColorPicker