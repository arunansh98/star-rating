import Star from "./Star";

export default function Stars(props) {
  const { count } = props;
  console.log({ count });

  const starArray = Array(count).fill(undefined);
  return starArray.map((_star, index) => <Star key={index} index={index} />);
}
