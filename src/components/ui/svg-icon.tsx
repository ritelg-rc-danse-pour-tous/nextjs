type Props = {
  name: string;
};
export default function SVGIcon({ name }: Props) {
  return (
    <svg className="icon">
      <use href={`/images/sprite.svg#${name}`}></use>
    </svg>
  );
}
