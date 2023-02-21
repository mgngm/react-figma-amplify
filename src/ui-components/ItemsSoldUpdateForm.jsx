/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { ItemsSold } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ItemsSoldUpdateForm(props) {
  const {
    id: idProp,
    itemsSold,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    surname: "",
    username: "",
    avatar: "",
    bio: "",
    followers: "",
    following: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [surname, setSurname] = React.useState(initialValues.surname);
  const [username, setUsername] = React.useState(initialValues.username);
  const [avatar, setAvatar] = React.useState(initialValues.avatar);
  const [bio, setBio] = React.useState(initialValues.bio);
  const [followers, setFollowers] = React.useState(initialValues.followers);
  const [following, setFollowing] = React.useState(initialValues.following);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = itemsSoldRecord
      ? { ...initialValues, ...itemsSoldRecord }
      : initialValues;
    setName(cleanValues.name);
    setSurname(cleanValues.surname);
    setUsername(cleanValues.username);
    setAvatar(cleanValues.avatar);
    setBio(cleanValues.bio);
    setFollowers(cleanValues.followers);
    setFollowing(cleanValues.following);
    setErrors({});
  };
  const [itemsSoldRecord, setItemsSoldRecord] = React.useState(itemsSold);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(ItemsSold, idProp)
        : itemsSold;
      setItemsSoldRecord(record);
    };
    queryData();
  }, [idProp, itemsSold]);
  React.useEffect(resetStateValues, [itemsSoldRecord]);
  const validations = {
    name: [],
    surname: [],
    username: [],
    avatar: [{ type: "URL" }],
    bio: [],
    followers: [],
    following: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          surname,
          username,
          avatar,
          bio,
          followers,
          following,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            ItemsSold.copyOf(itemsSoldRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ItemsSoldUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              surname,
              username,
              avatar,
              bio,
              followers,
              following,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Surname"
        isRequired={false}
        isReadOnly={false}
        value={surname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              surname: value,
              username,
              avatar,
              bio,
              followers,
              following,
            };
            const result = onChange(modelFields);
            value = result?.surname ?? value;
          }
          if (errors.surname?.hasError) {
            runValidationTasks("surname", value);
          }
          setSurname(value);
        }}
        onBlur={() => runValidationTasks("surname", surname)}
        errorMessage={errors.surname?.errorMessage}
        hasError={errors.surname?.hasError}
        {...getOverrideProps(overrides, "surname")}
      ></TextField>
      <TextField
        label="Username"
        isRequired={false}
        isReadOnly={false}
        value={username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              surname,
              username: value,
              avatar,
              bio,
              followers,
              following,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
      ></TextField>
      <TextField
        label="Avatar"
        isRequired={false}
        isReadOnly={false}
        value={avatar}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              surname,
              username,
              avatar: value,
              bio,
              followers,
              following,
            };
            const result = onChange(modelFields);
            value = result?.avatar ?? value;
          }
          if (errors.avatar?.hasError) {
            runValidationTasks("avatar", value);
          }
          setAvatar(value);
        }}
        onBlur={() => runValidationTasks("avatar", avatar)}
        errorMessage={errors.avatar?.errorMessage}
        hasError={errors.avatar?.hasError}
        {...getOverrideProps(overrides, "avatar")}
      ></TextField>
      <TextField
        label="Bio"
        isRequired={false}
        isReadOnly={false}
        value={bio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              surname,
              username,
              avatar,
              bio: value,
              followers,
              following,
            };
            const result = onChange(modelFields);
            value = result?.bio ?? value;
          }
          if (errors.bio?.hasError) {
            runValidationTasks("bio", value);
          }
          setBio(value);
        }}
        onBlur={() => runValidationTasks("bio", bio)}
        errorMessage={errors.bio?.errorMessage}
        hasError={errors.bio?.hasError}
        {...getOverrideProps(overrides, "bio")}
      ></TextField>
      <TextField
        label="Followers"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={followers}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              surname,
              username,
              avatar,
              bio,
              followers: value,
              following,
            };
            const result = onChange(modelFields);
            value = result?.followers ?? value;
          }
          if (errors.followers?.hasError) {
            runValidationTasks("followers", value);
          }
          setFollowers(value);
        }}
        onBlur={() => runValidationTasks("followers", followers)}
        errorMessage={errors.followers?.errorMessage}
        hasError={errors.followers?.hasError}
        {...getOverrideProps(overrides, "followers")}
      ></TextField>
      <TextField
        label="Following"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={following}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              surname,
              username,
              avatar,
              bio,
              followers,
              following: value,
            };
            const result = onChange(modelFields);
            value = result?.following ?? value;
          }
          if (errors.following?.hasError) {
            runValidationTasks("following", value);
          }
          setFollowing(value);
        }}
        onBlur={() => runValidationTasks("following", following)}
        errorMessage={errors.following?.errorMessage}
        hasError={errors.following?.hasError}
        {...getOverrideProps(overrides, "following")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || itemsSold)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || itemsSold) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
