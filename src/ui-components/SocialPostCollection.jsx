/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { ItemsSold } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import SocialPost from "./SocialPost";
import { Collection } from "@aws-amplify/ui-react";
export default function SocialPostCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: ItemsSold,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "SocialPostCollection")}
    >
      {(item, index) => (
        <SocialPost
          itemsSold={item}
          height="auto"
          width="auto"
          margin="1px 1px 0 0"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></SocialPost>
      )}
    </Collection>
  );
}
