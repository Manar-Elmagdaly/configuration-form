import React from 'react';
import ConfigurationForm from './components/configurationForm';

const configData = [
  {
    "aggregation_level_number": {
      "No Aggregation": "0",
      "One Level": "1",
      "Two Levels": "2",
      "Three Levels": "3"
    },
    "aggregation_level": {
      "Level 2": "level_2",
      "Level 3": "level_3",
      "Level 4": "level_4"
    },
    "cartons_per_layer": {
      "No Aggregation": "0",
      "Shipper Level": "shipper_level"
    },
    "layers_number": {
      "1": "1",
      "2": "2",
      "3": "3",
      "Bulking": "bulking"
    },
    "level_parent_type": {
      "SGTIN-21": "sgtin",
      "SSCC-00": "sscc"
    },
    "level3_child_count": {
      "11": "11",
      "No Aggregation": "0"
    },
    "level4_child_count": {
      "15": "15",
      "No Aggregation": "0"
    }
  }
];

const App = () => {
  return (
    <div>
      <h1>Dynamic Configuration Form</h1>
      <ConfigurationForm configData={configData} />
    </div>
  );
};

export default App;
