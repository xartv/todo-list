import * as React from "react";
import Select from "react-select";

const MOCK_DATA_OPTIONS: Options[] = [
  {
    label: "First option",
    value: "first option",
  },
  {
    label: "Second option",
    value: "second option",
  },
  {
    label: "Third option",
    value: "third option",
  },
];

const MOCK_DATA_COLORS: Options[] = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Green",
    value: "green",
    isDisabled: true,
  },
  {
    label: "Blue",
    value: "blue",
  },
];

interface Options {
  readonly label: string;
  readonly value: string;
  readonly isDisabled?: boolean;
}

interface GroupedOption {
  readonly label: string;
  readonly options: Options[];
}

const groupedOptions: readonly GroupedOption[] = [
  {
    label: "Data",
    options: MOCK_DATA_OPTIONS,
  },
  {
    label: "Colors",
    options: MOCK_DATA_COLORS,
  },
];

export const TestPage = () => {
  const groupStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const groupBadgeStyles: React.CSSProperties = {
    backgroundColor: "#EBECF0",
    borderRadius: "2em",
    color: "#172B4D",
    display: "inline-block",
    fontSize: 12,
    fontWeight: "normal",
    lineHeight: "1",
    minWidth: 1,
    padding: "0.16666666666667em 0.5em",
    textAlign: "center",
  };

  const formatGroupLabel = (data) => (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
  );

  return (
    <Select<Options, false, GroupedOption>
      defaultValue={MOCK_DATA_OPTIONS[0]}
      options={groupedOptions}
      formatGroupLabel={formatGroupLabel}
    />
  );
};
