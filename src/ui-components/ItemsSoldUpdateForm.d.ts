/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ItemsSold } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ItemsSoldUpdateFormInputValues = {
    name?: string;
    surname?: string;
    username?: string;
    avatar?: string;
    bio?: string;
    followers?: number;
    following?: number;
};
export declare type ItemsSoldUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    surname?: ValidationFunction<string>;
    username?: ValidationFunction<string>;
    avatar?: ValidationFunction<string>;
    bio?: ValidationFunction<string>;
    followers?: ValidationFunction<number>;
    following?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ItemsSoldUpdateFormOverridesProps = {
    ItemsSoldUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    surname?: PrimitiveOverrideProps<TextFieldProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    avatar?: PrimitiveOverrideProps<TextFieldProps>;
    bio?: PrimitiveOverrideProps<TextFieldProps>;
    followers?: PrimitiveOverrideProps<TextFieldProps>;
    following?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ItemsSoldUpdateFormProps = React.PropsWithChildren<{
    overrides?: ItemsSoldUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    itemsSold?: ItemsSold;
    onSubmit?: (fields: ItemsSoldUpdateFormInputValues) => ItemsSoldUpdateFormInputValues;
    onSuccess?: (fields: ItemsSoldUpdateFormInputValues) => void;
    onError?: (fields: ItemsSoldUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ItemsSoldUpdateFormInputValues) => ItemsSoldUpdateFormInputValues;
    onValidate?: ItemsSoldUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ItemsSoldUpdateForm(props: ItemsSoldUpdateFormProps): React.ReactElement;
