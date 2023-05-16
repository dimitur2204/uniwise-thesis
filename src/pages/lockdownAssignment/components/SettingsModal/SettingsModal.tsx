import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import { TabContext } from '@mui/lab';
import { WfButton } from '@uniwise/flow-ui-react';
import { Radio } from 'semantic-ui-react';
import { WfModal } from '../WfModal/WfModal';
import './SettingsModal.css';

type RadioGroupOption = {
  value: string;
};

export const SettingModal = () => {
  const [value, setValue] = useState('1');
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const options: RadioGroupOption[] = [
    { value: 'blackWhite' },
    { value: 'greyGrey' },
    { value: 'purpleGreen' },
    { value: 'blackRose' },
    { value: 'yellowBlue' },
    { value: 'whiteBlack' },
    { value: 'small' },
    { value: 'normal' },
    { value: 'large' },
    { value: 'x-large' },
    { value: 'xx-large' },
  ];

  const handleRadioChange = (e: React.FormEvent<HTMLInputElement>, { value }: any) => {
    setSelectedValue(value);
  };

  return (
    <>
      <WfModal
        trigger={
          <WfModal.Trigger>
            <IconButton
              aria-label="settings"
              size="large"
              className="active"
              sx={{
                backgroundColor: '#A3ACA4',
                borderRadius: '4px',
                '&:hover': {
                  backgroundColor: '#8F9E91',
                  color: 'white',
                },
              }}
            >
              <SettingsIcon fontSize="large" />
            </IconButton>
          </WfModal.Trigger>
        }
      >
        <WfModal.Title>
          <span>Settings</span>
          <div className="subHeader">
            <p>Adjust the visuals of the flow</p>
          </div>
        </WfModal.Title>
        <WfModal.Content>
          <TabContext value={value}>
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Color scheme" value="1" />
              <Tab label="Font size" value="2" />
              <Tab label="Zoom" value="3" />
            </Tabs>
            <TabPanel value="1">
              <div className="settingsContainer">
                <p>Change the background and foreground colors of your activity</p>

                <div className="colorPicker">
                  <Radio
                    name="colorPicker"
                    value={options[0].value}
                    checked={selectedValue === options[0].value}
                    onChange={handleRadioChange}
                  />
                  <div className="colorPickerColor blackWhite">
                    <p>Black on white</p>
                  </div>
                </div>

                <div className="colorPicker">
                  <Radio
                    name="colorPicker"
                    value={options[1].value}
                    checked={selectedValue === options[1].value}
                    onChange={handleRadioChange}
                  />
                  <div className="colorPickerColor greyGrey">
                    <p>Grey on grey</p>
                  </div>
                </div>

                <div className="colorPicker">
                  <Radio
                    name="colorPicker"
                    value={options[2].value}
                    checked={selectedValue === options[2].value}
                    onChange={handleRadioChange}
                  />
                  <div className="colorPickerColor purpleGreen">
                    <p>Purple on green</p>
                  </div>
                </div>

                <div className="colorPicker">
                  <Radio
                    name="colorPicker"
                    value={options[3].value}
                    checked={selectedValue === options[3].value}
                    onChange={handleRadioChange}
                  />
                  <div className="colorPickerColor blackRose">
                    <p>Black on rose</p>
                  </div>
                </div>

                <div className="colorPicker">
                  <Radio
                    name="colorPicker"
                    value={options[4].value}
                    checked={selectedValue === options[4].value}
                    onChange={handleRadioChange}
                  />
                  <div className="colorPickerColor yellowBlue">
                    <p>Yellow on blue</p>
                  </div>
                </div>

                <div className="colorPicker">
                  <Radio
                    name="colorPicker"
                    value={options[5].value}
                    checked={selectedValue === options[5].value}
                    onChange={handleRadioChange}
                  />
                  <div className="colorPickerColor whiteBlack">
                    <p>White on black</p>
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel value="2">
              <div className="settingsContainer">
                <p>Change your default font size</p>

                <div className="fontPicker">
                  <Radio
                    name="fontPicker"
                    value={options[6].value}
                    checked={selectedValue === options[6].value}
                    onChange={handleRadioChange}
                  />
                  <div className="fontSize small">
                    <p>Small (75%)</p>
                  </div>
                </div>

                <div className="fontPicker">
                  <Radio
                    name="fontPicker"
                    value={options[7].value}
                    checked={selectedValue === options[7].value}
                    onChange={handleRadioChange}
                  />
                  <div className="fontSize medium">
                    <p>Normal (100%)</p>
                  </div>
                </div>

                <div className="fontPicker">
                  <Radio
                    name="fontPicker"
                    value={options[8].value}
                    checked={selectedValue === options[8].value}
                    onChange={handleRadioChange}
                  />
                  <div className="fontSize large">
                    <p>Large (125%)</p>
                  </div>
                </div>

                <div className="fontPicker">
                  <Radio
                    name="fontPicker"
                    value={options[9].value}
                    checked={selectedValue === options[9].value}
                    onChange={handleRadioChange}
                  />
                  <div className="fontSize xLarge">
                    <p>X-Large (150%)</p>
                  </div>
                </div>

                <div className="fontPicker">
                  <Radio
                    name="fontPicker"
                    value={options[10].value}
                    checked={selectedValue === options[10].value}
                    onChange={handleRadioChange}
                  />
                  <div className="fontSize xxLarge">
                    <p>XX-Large (175%)</p>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value="3">
              <div className="settingsContainer">
                <p>
                  Zoom in and out using the following keyboard shortcuts (In the lockdown browser on
                  Windows use the browser information button instead):
                </p>
                <div className='zoom'>
                  <p>
                    <b>Zoom in</b>
                  </p>
                  <p>To zoom in, press Command +.</p>
                </div>
                <p>The browser will zoom in incrementally each time you press the plus key.</p>
                <div className='zoom'>
                  <p>
                    <b>Zoom out</b>
                  </p>
                  <p>To zoom out, press Command -.</p>
                </div>
                <p>The browser will zoom out incrementally each time you press the minus key.</p>
                <div className='zoom'>
                  <p>
                    <b>Reset the zoom level</b>
                  </p>
                  <p>Reset the zoom level by pressing Command 0.</p>
                </div>
                <p>The browser will return to its default zoom level</p>
              </div>
            </TabPanel>
          </TabContext>
        </WfModal.Content>
        <WfModal.Footer>
          <WfModal.Close>
            <WfButton content="Close" />
          </WfModal.Close>
          <WfModal.Close>
            <WfButton content="Ok" color="green" />
          </WfModal.Close>
        </WfModal.Footer>
      </WfModal>
    </>
  );
};
