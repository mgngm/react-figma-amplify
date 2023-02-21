/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ItemsSoldCreateFormInputValues = {
    name?: string;
    surname?: string;
    username?: string;
    avatar?: string;
    bio?: string;
    followers?: number;
    following?: number;
};
export declare type ItemsSoldCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    surname?: ValidationFunction<string>;
    username?: ValidationFunction<string>;
    avatar?: ValidationFunction<string>;
    bio?: ValidationFunction<string>;
    followers?: ValidationFunction<number>;
    following?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ItemsSoldCreateFormOverridesProps = {
    ItemsSoldCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    surname?: PrimitiveOverrideProps<TextFieldProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    avatar?: PrimitiveOverrideProps<TextFieldProps>;
    bio?: PrimitiveOverrideProps<TextFieldProps>;
    followers?: PrimitiveOverrideProps<TextFieldProps>;
    following?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ItemsSoldCreateFormProps = React.PropsWithChildren<{
    overrides?: ItemsSoldCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ItemsSoldCreateFormInputValues) => ItemsSoldCreateFormInputValues;
    onSuccess?: (fields: ItemsSoldCreateFormInputValues) => void;
    onError?: (fields: ItemsSoldCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ItemsSoldCreateFormInputValues) => ItemsSoldCreateFormInputValues;
    onValidate?: ItemsSoldCreateFormValidationValues;
} & React.CSSProperties>;
export default function ItemsSoldCreateForm(props: ItemsSoldCreateFormProps): React.ReactElement;
