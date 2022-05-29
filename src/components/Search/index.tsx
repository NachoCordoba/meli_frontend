import "./index.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button";
import { CSSProperties } from "react";

interface ISearch {
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: () => void;
  finderContainerStyle?: CSSProperties;
}

const Search = ({
  value,
  onChange = () => {},
  onSubmit = () => {},
  finderContainerStyle = {},
}: ISearch) => {
  return (
    <div className="search-finder" style={finderContainerStyle}>
      <input
        className="search-input"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.code === "Enter") onSubmit();
        }}
      ></input>
      <Button className="search-button" onClick={() => onSubmit()}>
        <FontAwesomeIcon icon={faSearch} />
      </Button>
    </div>
  );
};

export default Search;
