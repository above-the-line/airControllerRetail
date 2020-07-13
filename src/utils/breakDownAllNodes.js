// The GQL query returned to top-index.jsx contains
// all markdown documents from the content folder
// ./content filtered by lanuage code and in ascending oder.
// These "nodes" are then sent to the breakDownAllNodes.js utility
// which parses the data and formats it into something more useable
// 9 nodes => [0...8]
// are returned as [ anchors: {}, footerNode: {}, navBarNode: {}, sectionsNodes, topNode]

import { curry, pathSatisfies, test, identity, path } from "ramda";

const propFilter = curry((pathList, regex) => pathSatisfies(test(regex), pathList));

/**
 * break down all data retrieved in index.js
 */
export default function breakDownAllNodes(nodes) {
  const filterByFileName = propFilter(["fields", "fileName"]);
  const filterByDirectoryName = propFilter(["fields", "directoryName"]);

  // top part
  const topNode = nodes.find(filterByFileName(/top/i)) || {};
  // navbar
  const navBarNode = nodes.find(filterByFileName(/navbar/i)) || {};
  // footer
  const footerNode = nodes.find(filterByFileName(/footer/i)) || {};

  // sections part
  const sectionsNodes = nodes.filter(filterByDirectoryName(/sections/i));

  // anchors for NavBar
  const anchors = sectionsNodes.map(path(["frontmatter", "anchor"])).filter(identity);

  return {
    topNode,
    navBarNode,
    footerNode,
    sectionsNodes,
    anchors,
  };
}
