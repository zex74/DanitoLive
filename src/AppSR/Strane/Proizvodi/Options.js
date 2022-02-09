import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../../../Styles/Options/Options.css";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function BasicTabs({ pageName, optionsContent }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label={optionsContent.optionHeaders?.first || "OPIS"} {...a11yProps(0)} />
          <Tab label={optionsContent.optionHeaders?.second || "PREDNOSTI"} {...a11yProps(1)} />
          <Tab label={optionsContent.optionHeaders?.third || "DEKORI"} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <h2>{optionsContent.nameHeader}</h2>
        {optionsContent.options.firstOption.map((data) => {
          return <li>{data}</li>;
        })}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ul>
          {optionsContent.options.secondOption.map((data) => {
            return <li>{data}</li>;
          })}
        </ul>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ul>
          <li>{optionsContent.options.thirdOption.opis}</li>
        </ul>
        {optionsContent.options.thirdOption.boje ? (
          <div className="options__colorContainer">
            {optionsContent.options.thirdOption.boje.map((data) => {
              return (
                <div className="options__colors">
                  <p>{data.text}</p>
                  <img src={data.image} alt="" />
                </div>
              );
            })}
          </div>
        ) : null}
      </TabPanel>
    </Box>
  );
}

export default BasicTabs;
