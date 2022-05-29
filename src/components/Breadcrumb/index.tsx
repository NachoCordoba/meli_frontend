import "./index.css";

interface IBreadcrumb {
  items?: Array<string>;
}

const Breadcrumb = ({ items = [] }: IBreadcrumb) => {
  return (
    <ul className="breadcrumb">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Breadcrumb;
