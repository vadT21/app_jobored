import parse from "html-react-parser";

interface A {
  value: string | undefined;
}
const JobDetailDescription = ({ value }: A) => {
  const item = value && parse(value);
  return <div>{item}</div>;
};

export default JobDetailDescription;
