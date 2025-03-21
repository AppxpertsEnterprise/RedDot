import React from "react";
import Select from "react-select";

const customStyle = {
    valueContainer: (provided) => ({
        ...provided,
        fontSize: 16,
        fontWeight: 500,
        textAlign: "left",
    }),
    placeholder: (provided) => ({
        ...provided,
        color: "var(--tolak-text, #636363)",
    }),
    singleValue: (provided) => ({
        ...provided,
        cursor: "pointer",
        color: "var(--tolak-text, #636363)",
    }),
    menu: (provided) => ({
        ...provided,
        border: "1px solid #e9ebee",
        boxShadow: "none",
        zIndex: 10,
        backgroundColor: "var(--tolak-gray, #ecf2fc)",
    }),
    option: (provided, state) => ({
        ...provided,

        color: state.isSelected ? "#fff" : "var(--tolak-text, #636363)",
        padding: "14px 30px",
        backgroundColor: state.isSelected ? "var(--tolak-base, #ED1B24)" : "var(--tolak-gray, #ecf2fc)",
        transition: "all 0.4s ease",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "var(--tolak-base, #ED1B24)",
            color: "#fff"
        },
        fontSize: 16,
        textAlign: "left",
        fontWeight: 500,
    }),
    control: (base) => ({
        ...base,
        borderColor: "transparent",
        boxShadow: "none",
        borderRadius: 0,
        height: 55,
        width: "100%",

        "&:hover": {
            borderColor: "transparent",
        },
        backgroundColor: "var(--tolak-gray, #ecf2fc) !important",
        paddingLeft: 30,
        paddingRight: 30,
        marginBottom: 10,
    }),
};

/**
 * @param {React.ComponentProps<typeof Select>} props
 */

const CustomSelect = ({
    options = [],
    styles = {},
    isSearchable = false,
    components = {},
    ...props
}) => {
    const customStyle2 = {
        option: (provided, state) => ({
            ...provided,
            ...customStyle.option(provided, state),
            borderBottom:
                state.label === options[options.length - 1].label
                    ? "none"
                    : "0.5px solid #e9ebee",
            borderRadius:
                state.label === options[options.length - 1].label ? "0 0 8px 8px" : 0,
        }),
    };

    return (
        <Select
            options={options}
            styles={{ ...customStyle, ...customStyle2, ...styles }}
            isSearchable={isSearchable}
            components={{
                IndicatorSeparator: () => null,
                ...components,
            }}
            {...props}
        />
    );
};

export default CustomSelect;
