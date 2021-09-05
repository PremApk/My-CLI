const React = require("react");
const { Box } = require("ink");
const SelectInput = require("ink-select-input").default;
const open = require("open");

const handleSelect = (item) => {
  if (item.url) {
    open(item.url);
  } else if (item.action) {
    item.action();
  }
};

const createList = (items) => {
  return items.map((item) => {
    return { ...item, key: item.label || item.url };
  });
};

const listItems = createList([
  {
    label: "----------",
  },
  {
    label: "GitHub 🌲",
    url: "https://github.com/PremApk",
  },
  {
    label: "Instagram 💚",
    url: "https://www.instagram.com/its_apk/",
  },
  {
    label: "Linkedin 💼",
    url: "https://www.linkedin.com/in/premkumar-arumugam/",
  },
  {
    label: "Blog 📚",
    url: "https://its-apk.medium.com/",
  },
  {
    label: "Contact 📧",
    url: "mailto:a.premapk99@gmail.com",
  },
  {
    label: "---------",
  },
  {
    label: "Quit",
    action() {
      process.exit();
    },
  },
]);

const renderResume = () => {
  return (
    <>
      <Box flexDirection="column">
        <Box marginBottom={1} />
        <SelectInput items={listItems} onSelect={handleSelect} />
      </Box>
    </>
  );
};

module.exports = renderResume;
