// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qz82g6YFD3ByaFAf5Je7H9
// Component: 5ZZWxsx_rh
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: qz82g6YFD3ByaFAf5Je7H9/projectcss
import * as sty from "./PlasmicTekst.module.css"; // plasmic-import: 5ZZWxsx_rh/css

export const PlasmicTekst__VariantProps = new Array();

export const PlasmicTekst__ArgProps = new Array("children");

function PlasmicTekst__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.PlasmicSlot
        defaultContents={"Enter some text"}
        value={args.children}
      />
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTekst__ArgProps,
      internalVariantPropNames: PlasmicTekst__VariantProps
    });

    return PlasmicTekst__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTekst";
  } else {
    func.displayName = `PlasmicTekst.${nodeName}`;
  }
  return func;
}

export const PlasmicTekst = Object.assign(
  // Top-level PlasmicTekst renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicTekst
    internalVariantProps: PlasmicTekst__VariantProps,
    internalArgProps: PlasmicTekst__ArgProps
  }
);

export default PlasmicTekst;
/* prettier-ignore-end */
