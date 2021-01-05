const classes = [
  {
    name: "A",
    description: `With 16 million possible hosts on each network, Class A is used for massive networks: ISPs, Internet backbone.`,
    leading: [0],
    networkSize: 7,
  },
  {
    name: "B",
    description:
      "Medium-sized networks (large companies, universities), 65,000 hosts",
    leading: [1, 0],
    networkSize: 14,
  },
  {
    name: "C",
    description: "Small companies and organizations, 254 hosts",
    leading: [1, 1, 0],
    networkSize: 21,
  },
  {
    name: "D",
    description:
      "Reserved for multicast: one-to-many or many-to-many communication, data sent to group of destinations simultaneously",
    leading: [1, 1, 1, 0],
    networkSize: 0,
  },
  {
    name: "E",
    description: "Reserved for future use or research and development",
    leading: [1, 1, 1, 1],
    networkSize: 0,
  },
];
module.exports = classes;
